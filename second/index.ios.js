/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component, PropTypes } from 'react';
import { NavigatorIOS,Alert, Text, AppRegistry, View
  , TouchableHighlight,ScrollView,StyleSheet,ListView,RefreshControl,Image} from 'react-native';

import BaseInfoView from './js/work/BaseInfo';
import MyBanner from './js/work/Banner';
import MobileOffice from './js/work/MobileOffice';
import KZCollege from './js/work/KZCollege';
import HttpManager from './js/Utils/HttpManager';
import Interface from './js/Utils/Interface';
import RefreshableListView from './js/common/RefreshableListView';
import ImageManager from './js/Utils/ImageManager'
import KZCollegeCell from './js/work/KZCollegeCell';

var banners = ['banner轮播'];

let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        }) // assumes immutable objects

export default class second extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: '工作',
          rightButtonIcon:require('./image/work/iconfont-work-tixing.png')
        }}
        style={{flex: 1}}
        barTintColor='#ffffff'
        translucent={false}
        tintColor='rgb(62,62,62)'
      />
    );
  }
}

 class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this._onForward = this._onForward.bind(this);

    this.banners = [
            {
                // title: 'beauty 1',
                // image: require('./image/work/banner轮播.png'),
                image: 'http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png',
            },
            {
                // title: 'beauty 2',
                image: 'http://img1.3lian.com/2015/a1/53/d/200.jpg',
            },
            {
                // title: 'The next banner has no title',
                image: 'http://img1.3lian.com/2015/a1/53/d/198.jpg',
            },
            {
                // title: 'no title',
                image: 'http://image.tianjimedia.com/uploadImages/2012/235/9J92Z5E5R868.jpg',
            },
        ];
      this.defaultIndex = 0;
  }

  _getDataSource(appendArr : array){
    let dataBlob = {section1:[{},{},{},{},{},{}]};
    //拉取work数据
    const json = HttpManager.async_fetch(Interface.work());
    // console.log(json);
    return dataBlob;
  }

  _onForward() {
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene'+1,
    });
  }

/*
  render() {
    return (
      <ScrollView style = {styles.scrollView}> 
        <View style = {styles.baseInfo}>
           <BaseInfoView />  
        </View>
        <View style={{height:10}}> 
        </View>
        <View style = {styles.banner}> 
           <MyBanner style={{flex:1}} banners={this.banners} defaultIndex={this.defaultIndex} /> 
        </View>
        <View style={{height:10}}> 
        </View>
        <View style = {styles.mobileOffice}> 
          <MobileOffice style={{flex:1}}/>
        </View>
        <View style={{height:10}}> 
        </View>
        <View style = {styles.kzCollege}> 
          <KZCollege style={{flex:1}} />
        </View>
      </ScrollView>
    );
  }
  */

  render(){
    return (
          <View style={{flex:1}}>
            <RefreshableListView 
            renderHeader={() => {
              return this._renderHeader();
            }}
            renderRow={(rowData,SectionId,rowID) => this._renderRowView(rowData,SectionId,rowID) }
            getProductList={(pageNo)=>this._getProductList(pageNo)}
            listViewStyle={styles.scrollView}
            />
          </View>
      );
  }

  _getProductList(pageNo){
      return new Promise((resole,reject) => {
         console.log(''+pageNo);
         if (pageNo>1) {
            resole({isSuccess:true,productArr:[]});
         }
         HttpManager.async_fetch(Interface.work())
         .then((json)=>{
          if (json.code==1) {
            // console.log('dic',{isSuccess:true,productArr:json});
            resole({isSuccess:true,productArr:json.data.article});
          }else{
            resole({isSuccess:false,productArr:json.data.article});
          }
        }).catch((error) => {
          console.warn(error);
          reject(error);
        });
    });
   }

  _renderHeader(){
    return (
      <View style={{flex:1}}>
          <View style = {styles.baseInfo}>
                <BaseInfoView />  
            </View>
            <View style={{height:10}}> 
            </View>
            <View style = {styles.banner}> 
                <MyBanner style={{flex:1}} banners={this.banners} defaultIndex={this.defaultIndex} /> 
            </View>
            <View style={{height:10}}> 
            </View>
            <View style = {styles.mobileOffice}> 
                <MobileOffice style={{flex:1}}/>
            </View>
            <View style={{height:10}}> 
            </View>
            <View style = {styles.kzCollege}> 
                <Image source={ImageManager.kzCollegeIcon()} style={styles.workOfficeIcon}/>
                <Text style={styles.workOfficeText}>移动办公</Text>
            </View>
      </View>
    );
  }

  _renderRowView(rowData,SectionId,rowID) {
    console.log('_renderRowView');
    return (
      <TouchableHighlight
        style={styles.kzCollegeRow}
        underlayColor='#c8c7cc'
        onPress={() => this._onPress(rowData)}
      >
        <View style={{flex:1}}>
            <KZCollegeCell 
              style={{flex:1}} 
              title={'康庄学院教您如何招生一万名!只要认真看，就可以'}
              content={'如果学会了做推销就是学会了如何'}
              image={ImageManager.kzCollegeContentImage()}
            />
        </View>
      </TouchableHighlight>
    );
  }

}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#efeff4',
    flexDirection: 'column'
  },
  baseInfo: {
    height: 250,
    backgroundColor: '#ffffff',
  },
  banner: {
    height: 90,
    backgroundColor: '#ffffff',
  },
  mobileOffice: {
    height: 250,
    backgroundColor: '#ffffff',
  },
  kzCollege: {
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection:'row',
    alignItems: 'center',
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
  kzCollegeRow: {
    height: 125,
  },
});


AppRegistry.registerComponent('second', () => second);
