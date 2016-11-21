
import React, { Component,PropTypes} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	ListView,
	InteractionManager,
	RefreshControl,
	Platform,
} from 'react-native'

import LoadMoreFooter from './LoadMoreFooter'

const { width, height } = Dimensions.get('window')

let _pageNo = 1;
let _pageSize = 10;

export default class RefreshableListView extends Component {

	// PropTypes : {

	// }

	constructor(props) {
		super(props);

		this.state = {
		    products: [],
		    isRefreshing: false,
		    isLoadingMore: false,
		    totalProductCount: 200,  //由服务端返回 这里临时指定一个值设置为上限
		    tabbarShow: true,
		    tabbarHeight: 49,
		    viewRecord: [],
		    isShowNoMoreData:false,
		};
	}

	componentDidMount() {
		this._loadData(1);
	}

	_goToDetail(rowData) {

	}

	_onRefresh() {
		this._loadData(1);
	}

	_toEnd() {

		console.log("加载更多？ ",this.state.isLoadingMore, this.state.products.length, this.state.totalProductCount,this.state.isRefreshing);
		//ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
		if (this.state.isLoadingMore || this.state.products.length >= this.state.totalProductCount || this.state.isRefreshing) {
			return;
		};
		InteractionManager.runAfterInteractions(() => {
			console.log("触发加载更多 toEnd() --> ");
			_pageNo = Number.parseInt(this.state.products.length / _pageSize) + 1;
			this._loadData(_pageNo);
			console.log('page',this.state.products.length,_pageSize);
		});
	}

	_loadData(pageNo=1){
		if (pageNo === 1) {
			//标志下拉刷新中
			this.setState({isRefreshing:true});
		}else{
			//标志上拉加载中
			this.setState({isLoadingMore: true});
		}
		this.props.getProductList(pageNo)
		.then(({isSuccess,productArr}) => {
			console.log('=======',isSuccess,productArr,this.state.products.length,pageNo);
			if (isSuccess) {
				if (pageNo === 1) {
					//标志下拉刷新结束
					this.setState({isRefreshing: false, products: productArr});
					if (productArr.length) {
						//计算pageSize
						_pageSize = productArr.length;
					}else{
						//show empty datasource view
					}
				}else{
					//标志上拉加载结束
					this.setState({isLoadingMore: false});
					if (productArr.length) {
						this.setState({products: this.state.products.concat(productArr)});
						this.setState({isShowNoMoreData:false});
					}else{
						// show no more data view
						this.setState({isShowNoMoreData:true});
					}
				}
			}else{
				this.setState({isRefreshing: false, isLoadingMore: false});
			}
		}).catch((error) => {
			this.setState({isRefreshing: false, isLoadingMore: false});
		});
	}

	render() {
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return (
			<View style={{flex:1}}>
				<ListView style={ this.props.listViewStyle } 
					dataSource={ ds.cloneWithRows(this.state.products) } 
					renderRow={ (rowData,SectionId,rowID) => this.props.renderRow(rowData,SectionId,rowID)}
					renderHeader={ () => this.props.renderHeader()}
					onEndReached={ this._toEnd.bind(this) }
					onEndReachedThreshold={10}
					renderFooter={ this._renderFooter.bind(this) }
					enableEmptySections={true} 
					refreshControl={
						<RefreshControl
							refreshing={ this.state.isRefreshing }
							onRefresh={ this._onRefresh.bind(this) }
							tintColor="gray"
							colors={['#ff0000', '#00ff00', '#0000ff']}
							progressBackgroundColor="gray"/>
						}/>
			</View>
		)
	}

	_renderFooter() {

		//通过当前product数量和刷新状态（是否正在下拉刷新）来判断footer的显示
		if (this.state.products.length < 1 || this.state.isRefreshing) {
			return null;
		};
		if (!this.state.isShowNoMoreData) {
			//还有更多，默认显示‘正在加载更多...’
			return <LoadMoreFooter />
		}else{
			// 加载全部
			return <LoadMoreFooter isLoadAll={true}/>
		}
	}

}