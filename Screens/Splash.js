import React,{Component} from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
export default class Splash extends Component{
  render(){
   
  return(
    <View style={styles.container}>
         <View style={styles.logoContainer}>
        <Image style={styles.logo}
        source={require('MyProject/images/img.jpg')}>
        </Image>
        </View>
    </View>


  )
} 
}
const styles=StyleSheet.create({
  container:
  {
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  logoContainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:1
},
logo:{
  flex:1
  }
})

