'use strict';
import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View,Image,TouchableHighlight,ScrollView,StyleSheet,Button,Alert} from 'react-native';

import WindowScreen from '../Utils/Utils';

const screenWidth = WindowScreen.screenWidth();
const circleWidth = screenWidth/3/2;

export default class BaseInfoView extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {num:'7800.00',isShowNum:true};
	}
	render() {
		return (
				<View style={{flex:1}}>
					<View style={{flex:2,flexDirection:'row'}}>
						<View style={{flex:1}}> 
							<Image style={sytles.headImgView} source={require('../../image/work/头像.png')}/>
						</View> 
						<View style={{flex:2,alignItems:'center',justifyContent:'center',marginTop:25}}> 
							<View style={{flex:2,alignItems:'center',justifyContent:'center',flexDirection:'row'}}> 
								<Text style={sytles.showNum}>{this.state.isShowNum?this.state.num:'****'}</Text>
								<TouchableHighlight onPress={this.clickHideBtn.bind(this)} underlayColor='#ffffff'> 
									<Image style={{width:25,height:25}} source={require('../../image/work/iconfont-work-yanjing.png')}/>
								</TouchableHighlight>
							</View>
							<View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
								<Text style={sytles.earnUnit}>累计收益（元）</Text>
							</View>
						</View> 
						<View style={[{flex:1},{flexDirection:'row',justifyContent:'center',marginTop:24}]}> 
							<TouchableHighlight onPress={this.clickHowEarnMoney.bind(this)} underlayColor='#ffffff'>
								<Text style={{fontSize:12,color:'#999999'}}>如何赚钱</Text>
							</TouchableHighlight>
							<TouchableHighlight onPress={this.clickHowEarnMoney.bind(this)} underlayColor='#ffffff' style={{marginLeft:5,marginTop:-2.5}}>
								<Image style={{width:15,height:15}} source={require('../../image/work/iconfont-work-help2.png')}/>
							</TouchableHighlight>
						</View> 
					</View>
					<View style={{flex:2,flexDirection:'row'}}> 
						<View style={sytles.baseInfo}> 
							<View style={sytles.circleBorder}> 
								<Text style={sytles.leftNum}>236</Text>
								<Text style={sytles.rightUnit}>人</Text>
							</View>
							<Text style={sytles.bottomPromptText}>意向报名</Text>
						</View>
						<View style={sytles.baseInfo}> 
							<View style={sytles.circleBorder}> 
								<Text style={sytles.leftNum}>165</Text>
								<Text style={sytles.rightUnit}>人</Text>
							</View>
							<Text style={sytles.bottomPromptText}>APP注册量</Text>
						</View>
						<View style={sytles.baseInfo}> 
							<View style={sytles.circleBorder}> 
								<Text style={sytles.leftNum}>78</Text>
								<Text style={sytles.rightUnit}>人</Text>
							</View>
							<Text style={sytles.bottomPromptText}>累计招生</Text>
						</View>
					</View>
					<View style={{flex:1,flexDirection:'row',backgroundColor:'rgb(244,249,250)'}}> 
						<Image style={sytles.kzReportImage} source={require('../../image/work/康庄战报.png')}/>
						<Text style={sytles.kzReportText}>恭喜！校园代理周**成功招生1名，获得...</Text>
					</View>
				</View>
			);
	}

	clickHideBtn(){
		// Alert.alert('clickHideBtn');
		this.setState({isShowNum:!this.state.isShowNum});
	}

	clickHowEarnMoney(){
		Alert.alert('you clicked how to earn money button');
	}
}

const sytles = StyleSheet.create({
	headImgView : {
		width: 35,
		height: 35,
		marginLeft: 15,
		marginTop: 15,
		borderRadius: 17.5,
	},
	showNum : {
		fontSize: 30,
		fontWeight: 'bold',
	},
	earnUnit: {
		fontSize: 15,
		color: '#ff801a',
		marginTop: -10,
	},
	baseInfo: {
		alignItems:'center',
		justifyContent:'center',
		flex:1,
	},
	circleBorder: {
		alignItems:'center',
		justifyContent:'center',
		flexDirection: 'row',
		borderRadius: circleWidth/2,
		borderWidth: 1,
		width: circleWidth,
		height: circleWidth,
		borderColor: 'rgb(240,240,240)',
	},
	leftNum: {
		fontSize: 18,
		color: '#444b54',
	},
	rightUnit: {
		fontSize: 11,
		color : '#444b54',
		marginTop: 3,
	},
	bottomPromptText: {
		fontSize: 12,
		color: '#999999',
		marginTop: 7.5,
	},
	kzReportImage: {
		marginLeft: 15,
		marginTop: 15,
		marginBottom: 15,
		width: 60,
		resizeMode: Image.resizeMode.contain,
	},
	kzReportText: {
		marginLeft: 15,
		marginTop: 13,
		marginBottom: 15,
		marginRight: 15,
		color: '#666666',
		fontSize: 14,
	},
});