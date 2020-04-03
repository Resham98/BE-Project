import React from 'react';
import {
 SafeAreaView,
 StyleSheet,
 ScrollView,
 TouchableOpacity,
 View,
 Text,
 StatusBar,
 Button,
 Image,
 Linking,
 TextInput,
 TouchableWithoutFeedback,
 KeyboardAvoidingView,
 Keyboard,
 Animated,
 Dimensions,
 Picker,
 FlatList
} from 'react-native';
import {Container,Left,Body,Right,Icon,Title, FooterTab,Content,Footer} from 'native-base';
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
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component{

   constructor(props) {
      super(props);
      this.state = {
        UserName: '',
        Password: '',
       }
  }

  userLogin = () =>{

   fetch('http://192.168.1.205/BEUDAN/PHP/singleRead.php', {
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


           if(responseJson === "Username does Not Exist, Please Register First !!!"){
               Alert.alert("Username does Not Exist, Please Register First !!!")
           }
           else if(responseJson === "Password matched"){
              {  this.props.navigation.navigate("Users")}
           }
           else if(responseJson === "Password Matching Failed!"){
               Alert.alert("Incorrect Password/Username");
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
 onChangeText={username => this.setState({UserName : username})}
 onSubmitEditing={()=> this.refs.txtPassword.focus()}/>
 
 <TextInput style={styles.input}
 placeholder="Enter Password"
 returnKeyType='go'
 secureTextEntry={true}
 autocorrect={false}
 onChangeText={password => this.setState({Password : password})}
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