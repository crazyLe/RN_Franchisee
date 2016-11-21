'use strict';
import React , {Component,PropTypes} from 'react';
import {View,Text,TouchableHighlight,StyleSheet,Image,Alert} from 'react-native';

const keyMirror = require('fbjs/lib/keyMirror');

const buttonContentDir = keyMirror({
  /**
   * 图片和文本按垂直方向布局的按钮
   */
  vertical: 'column',
  /**
   * 图片和文本按水平布局的按钮
   */
  horizontal: 'row',
});

const Button = React.createClass({
	PropTypes : {
		image: PropTypes.object.isRequired,
		imageStyle: PropTypes.object,
		text: PropTypes.string.isRequired,
		textStyle: PropTypes.object,
		clickBtnFunc: PropTypes.func,
		tag: PropTypes.number,
	},
	statics: {
		contentDir: buttonContentDir,
	},
	render(){
		return (
			<TouchableHighlight style={{flex:1}} onPress={()=>this.clickBtn()}>
				<View style={[{flex:1,justifyContent:'center',alignItems:'center'},{flexDirection:this.props.contentDir==buttonContentDir.vertical?'column':'row'}]}>
					<Image source={this.props.image} style={this.props.imageStyle}/>
					<Text style={this.props.textStyle}>{this.props.text}</Text>
				</View>
			</TouchableHighlight>
			);
	},
	clickBtn(){
		if(this.props.clickBtnFunc){
			this.props.clickBtnFunc(this);
		}
	},
});

const styles = StyleSheet.create({
	
});

module.exports = Button;
