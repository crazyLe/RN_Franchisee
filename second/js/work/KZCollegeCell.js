'use strict';
import React, {Component} from 'react';
import {Image,View,Text,StyleSheet} from 'react-native';
import DateManager from '../Utils/DateManager'

export default class KZCollegeCell extends Component{
	render(){
		return (
				<View style={styles.cellBg}>
					<View style={styles.topView}>
						<View style={{flex:6}}> 
							<Text style={{fontSize:16,fontWeight:'bold',color:'#333333'}} numberOfLines={2}>
								{this.props.title}
							</Text>
							<Text style={{fontSize:15,color:'#999999',marginTop:7}} numberOfLines={1}>
								{this.props.content}
							</Text>
						</View>
						<View style={{flex:2,alignItems:'flex-end'}}> 
							<Image source={this.props.image}/>
						</View>
					</View>
					<View style={styles.bottomView}>
						<Text>{this.props.articleType==1?'文章':this.props.articleType==2?'视频':'图片'}</Text>
						<Text>{this._time2Text(this.props.articleTime)}</Text>
					</View>
				</View>
			);
	}

	_time2Text(articleTime){
		if (articleTime) {}
	}
}

const styles = StyleSheet.create({
	cellBg: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	topView: {
		paddingTop: 18,
		marginBottom: 10,
		marginLeft: 15,
		marginRight: 15,
		flexDirection: 'row',
		borderTopWidth: 0.5,
		borderColor: '#efeff4'
	},
	bottomView: {
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 10,
	},
});