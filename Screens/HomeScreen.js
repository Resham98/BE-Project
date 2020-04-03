

import React from 'react';
import {
  Alert,
 SafeAreaView,
 StyleSheet,
 ScrollView,
 TouchableOpacity,
 View,
 Text,
 StatusBar,
 Button,
 Image,
 TextInput,
 TouchableWithoutFeedback,
 KeyboardAvoidingView,
 Keyboard,
 Animated,
 Dimensions,
 Picker,
 FlatList
} from 'react-native';
import RadioForm,
{
 RadioButton,
 RadioButtonInput,
 RadioButtonLabel
} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
var gender=[
{label:"Male",value:0},
{label:"Female",value:1},
{label:"Others",value:2},
];
const { width } = Dimensions.get("window");

import {
 Header,
 LearnMoreLinks,
 Colors,
 DebugInstructions,
 ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export default class HomeScreen extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      Password: '',
     }
}

userLogin = () =>{

 fetch('http://192.168.1.208/BEUDAN/MyProject/PHP/singleRead.php', {
     method: 'POST',
     headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
     },
     body: JSON.stringify({
         username: this.state.UserName,
         password: this.state.Password
     })

 }).then((response) => response.json())
     .then((responseJson) => {

      if(responseJson[0].msg === "Username or Password invalid !!!"){
      Alert.alert("Username or Password invalid !!!");}
      else if(responseJson[0].msg === "Successful !!!"){
       
        {  this.props.navigation.navigate("Retails",{userid : responseJson[0].id})}
     }
     else{
      Alert.alert("Try Again");
  }
      

     }).catch((error) => {
     console.error(error);
 });


};
 

render(){
  return (
  <SafeAreaView style={styles.container}>
  <StatusBar barStyle="light-content"/>
  <KeyboardAvoidingView behaviour='padding' style={styles.container}> 
  <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
  <View style={styles.logoContainer}>
  <View style={styles.logoContainer}>
  <Image style={styles.logo}
  source={require('MyProject/images/UDAN.jpg')}>
  </Image>
  
  </View>
  <View style={styles.infoContainer}>
 
  <TextInput style={styles.input}
  placeholder="Enter Username"
  returnKeyType='next'
  autocorrect={false}
  onChangeText={UserName => this.setState({UserName})}
  onSubmitEditing={()=> this.refs.txtPassword.focus()}/>
  
  <TextInput style={styles.input}
  placeholder="Enter Password"
  returnKeyType='go'
  secureTextEntry={true}
  autocorrect={false}
  onChangeText={Password => this.setState({Password})}
  ref={"txtPassword"}/>
 
  <Button 
  title="SIGN IN"
  onPress={ this.userLogin}/>
  <View style={styles.signupTextCont}>
  <Text>Dont have an account yet?</Text>
  <Text onPress={() => this.props.navigation.navigate('Details')}>SIGNUP</Text>
  </View>
  </View>
  </View>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  </SafeAreaView>
  
  
  );
 }
 };
const styles = StyleSheet.create({
    scrollView: {
    backgroundColor: Colors.lighter,
    },
    engine: {
    position: 'absolute',
    right: 0,
    },
    body: {
    backgroundColor: Colors.white,
    },
    sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    },
    logoContainer:{
    alignItems:'center',
    marginTop:10,
    flex:1,
   },
   logo:{
    width:200,
    height:200,
   
   },
   container:{
    flex:1,
    backgroundColor:'white',
    flexDirection:'column',
   },
    sectionContainer1: {
    marginTop: 10,
    paddingHorizontal: 24,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
    },
    sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    },
    sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    },
    highlight: {
    fontWeight: '700',
    },
    footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    },
    input:{
    height:40,
    borderRadius:25,
    backgroundColor:'green',
    color:'black',
    marginBottom:10,
    paddingHorizontal:20,
    
   },
   infoContainer:{
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    height:180,
    padding:10,
    //backgroundColor:'red'
   },
   signupTextCont:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
   },
   container1:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'white',
    paddingLeft:40,
    paddingRight:40,
   },
   regform:{
    alignSelf:'stretch',
   
   },
   header:{
    fontSize:24,
    color:'blue',
    paddingBottom:5,
    marginTop:90,
    marginBottom:20,
    borderBottomColor:'#FF8C00',
    borderBottomWidth:1,
   },
   textInput:{
    alignSelf:'stretch',
    height:40,
    marginBottom:20,
    color:'black',
    borderBottomColor:'green',
    borderBottomWidth:1,
   },
   buttonContainer:{
    backgroundColor:'#FF8C00',
    height:40,
    color:'black',
    marginBottom:10,
    paddingHorizontal:20,
   },
   buttonText:{
    textAlign:'center',
    color:'rgb(32,53,70)',
    fontWeight:'bold',
    fontSize:18,
    height:30,
    marginTop:5
   
   
   },
   textInput2:{
    alignSelf:'stretch',
    height:40,
    marginBottom:20,
    color:'black',
    borderBottomColor:'green',
    borderBottomWidth:1,
   },
   container2:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'white',
    paddingLeft:40,
    paddingRight:40,
   },
   regform2:{
    alignSelf:'stretch',
   
   },
   buttonContainer2:{
    backgroundColor:'#FF8C00',
    height:40,
    color:'black',
    marginBottom:10,
    paddingHorizontal:20,
    marginTop:40,
    borderRadius:25,
   },
   buttonText2:{
    textAlign:'center',
    color:'rgb(32,53,70)',
    fontWeight:'bold',
    fontSize:18,
    height:30,
    marginTop:5
   
   
   },
   containerR:{
    flex:1,
    backgroundColor:'#F5FCFF',
   },
   containerPay:{
     marginTop:20,
     backgroundColor:'#fff'
   },
   card:{
     backgroundColor:'#87CEEB',
     marginBottom:10,
     marginLeft:'2%',
     width:'96%',
     shadowColor:'#000',
     shadowOpacity:0.2,
     shadowRadius:1,
     shadowOffset:{
       width:3,
       height:3
     }
       
   
   },
   CardText:{
        padding:10,
        fontSize:16
   },
   header1:{
     fontSize:24,
     color:'blue',
     paddingBottom:5,
     marginTop:5,
     marginBottom:5,
     borderBottomColor:'#fff',
     borderBottomWidth:1,
    },
    containerP:{
     flex:1,
     marginTop:20,
     backgroundColor:'white',
     paddingLeft:40,
     paddingRight:40,
    },
   
   
   
   });