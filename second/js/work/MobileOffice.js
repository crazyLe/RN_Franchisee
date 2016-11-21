import React , {Component} from 'react';
import {View,Image,Text,TouchableHighlight,StyleSheet,Alert} from 'react-native';

import ImageManager from '../Utils/ImageManager'
import Button from './Button'

export default class MobileOffice extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}
	render(){
		return (
				<View style={{flex:1}}> 
					<View style={styles.topView}> 
						<Image source={ImageManager.workOfficeIcon()} style={styles.workOfficeIcon}/>
						<Text style={styles.workOfficeText}>移动办公</Text>
					</View>
					<View style={styles.buttonBgView}> 
						<View style={{flex:1,flexDirection:'row'}}>
							<View style={styles.buttonBorderView}>
								<Button 
								image={ImageManager.workOfficeEnroll()} 
								text={'招生名片'} 
								textStyle={styles.workOfficeBtnText}
								contentDir={Button.contentDir.vertical}
								clickBtnFunc={this.clickBtn.bind(this)}
								tag={1}
								/>	
							</View>
							<View style={styles.buttonBorderView}>
								<Button image={ImageManager.workOfficeRoyalty()} 
								text={'提成申请'} 
								textStyle={styles.workOfficeBtnText}
								contentDir={Button.contentDir.vertical}
								clickBtnFunc={this.clickBtn.bind(this)}
								tag={2}
								/>	
							</View>
							<View style={styles.buttonBorderView}>
								<Button image={ImageManager.workOfficeWorkManager()} 
								text={'工作安排'} 
								textStyle={styles.workOfficeBtnText}
								contentDir={Button.contentDir.vertical}
								clickBtnFunc={this.clickBtn.bind(this)}
								tag={3}
								/>	
							</View>
							<View style={styles.buttonBorderView}>
								<Button image={ImageManager.workOfficeActivity()} 
								text={'活动宣传'} 
								textStyle={styles.workOfficeBtnText}
								contentDir={Button.contentDir.vertical}
								clickBtnFunc={this.clickBtn.bind(this)}
								tag={4}
								/>	
							</View>
						</View>
						<View style={{flex:1,flexDirection:'row'}}>
							<View style={styles.buttonBorderView}>
								<Button image={ImageManager.workOfficeBusiness()} 
								text={'业务培训'} 
								textStyle={styles.workOfficeBtnText}
								contentDir={Button.contentDir.vertical}
								clickBtnFunc={this.clickBtn.bind(this)}
								tag={5}
								/>	
							</View>
							<View style={styles.buttonBorderView}>
								<Button image={ImageManager.workOfficeMaterial()} 
								text={'物料申请'} 
								textStyle={styles.workOfficeBtnText}
								contentDir={Button.contentDir.vertical}
								clickBtnFunc={this.clickBtn.bind(this)}
								tag={6}
								/>	
							</View>
							<View style={styles.buttonBorderView}>
							</View>
							<View style={styles.buttonBorderView}>
							</View>
						</View>
					</View>
				</View>
			);
		}
		clickBtn(button){
			switch(button.props.tag){
				case 1 :
					{
						Alert.alert('111');
					}
					break;
				case 2 :
					{
						Alert.alert('222');
					}
					break;
				case 3 :
					{
						Alert.alert('333');
					}
					break;
				case 4 :
					{
						Alert.alert('444');
					}
					break;
				case 5 :
					{
						Alert.alert('555');
					}
					break;
				case 6 :
					{
						Alert.alert('666');
					}
					break;
			}
		}
}

const styles = StyleSheet.create({
	topView : {
		flex:5, 
		alignItems: 'center',
		flexDirection: 'row',
	},
	buttonBgView : {
		flex:14,
	},
	workOfficeIcon : {
		marginLeft: 15,
		width: 20,
		height: 20,
	},
	workOfficeText: {
		marginLeft: 7.5,
		marginRight: 15,
		marginTop: 10,
		height: 25,
		color: '#333333',
		fontSize: 16,
		fontWeight: 'bold',
	},
	buttonBorderView: {
		flex: 1,
		borderLeftWidth: 0.5,
		borderTopWidth: 0.5,
		borderColor: 'rgb(237,237,237)'
	},
	workOfficeBtnText: {
		fontSize: 13,
		color: '#333333',
		marginTop: 5,
	},
});