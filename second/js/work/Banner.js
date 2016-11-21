'use strict';
import React, {Component} from 'react';
import {Text,View,StyleSheet,TouchableHighlight,Image,Alert} from 'react-native';
import Banner from 'react-native-banner';

export default class MyBanner extends Component {
    constructor(props) {
      super(props);

      this.state = {};
    }
	render(){
		return (
			<View style={{flex:1}}>
				<Banner 
				 style={{flex:1}}
				 banners={this.props.banners} 
				 defaultIndex={this.props.defaultIndex}
				 />
			</View>
			);
	}
}