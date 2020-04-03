/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component{
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
 keyboardType='email-address'
 returnKeyType='next'
 autocorrect={false}
 onSubmitEditing={()=> this.refs.txtPassword.focus()}/>
 
 <TextInput style={styles.input}
 placeholder="Password"
 returnKeyType='go'
 secureTextEntry={true}
 autocorrect={false}
 ref={"txtPassword"}/>
 <Button 
 title="SIGN IN"
 onPress={() => this.props.navigation.navigate("Retails")}/>
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
class DetailsScreen extends React.Component {
 constructor(props){
 super(props)
 //set value in state for initial date
 this.state = {date:"15-05-2018"}
 }
 render() {
 return (
 <ScrollView>
 <View style={styles.container1}>
 <View style={styles.regform}>
 <Text style={styles.header}>Registration</Text>

 <TextInput style={styles.textInput} 
    placeholder="Enter User Name"
    onChangeText={name => this.setState({UserName : name})}
    underlineColorAndroid={'transparent'}/>

 <TextInput style={styles.textInput} 
    placeholder="Enter Email-id"
    onChangeText={email => this.setState({UserEmail : email})}
    underlineColorAndroid={'transparent'}/>

 <Text> Gender: </Text>
 <RadioForm 
 radio_props={gender}
 initial={0}
 onPress={(value) =>{}}
 buttonSize={10}
 buttonOuterSize={20}
 selectedButtonColor={'green'}
 selectedLabelColor={'green'}
 buttonColor={'#FF8C00'}
 formHorizontal={true}
 radioStyle={{paddingRight:20}}
 />

 <Text> DOB: </Text>
 <DatePicker
 style={{width: 200}}
 date={this.state.date} //initial date from state
 mode="date" //The enum of date, datetime and time
 placeholder="select date"
 format="DD-MM-YYYY"
 minDate="01-01-2016"
 maxDate="01-01-2019"
 confirmBtnText="Confirm"
 cancelBtnText="Cancel"
 customStyles={{
 dateIcon: {
 position: 'absolute',
 left: 0,
 top: 4,
 marginLeft: 0
 },
 dateInput: {
 marginLeft: 36
 }
 }}
 onDateChange={(date) => {this.setState({date: date})}}
/>

<TextInput style={styles.textInput} 
    placeholder="Address"
    onChangeText={address => this.setState({UserAddress : address})}
    underlineColorAndroid={'transparent'} 
    multiline={true}/>
<TextInput style={styles.textInput} placeholder="Mobile no."
 underlineColorAndroid={'transparent'} keyboardType="numeric" />
<TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true}
 underlineColorAndroid={'transparent'} />
<TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
 <Text style={styles.buttonText}>BIOMETRIC</Text>
 </TouchableOpacity>
 <Button 
 title="SIGN UP"
 onPress={() => this.props.navigation.navigate('Home')}/>
 </View>
 </View>
 </ScrollView>
 );
 }
}
class RetailsScreen extends React.Component {
 state = {
 active: 0,
 xTabOne: 0,
 xTabTwo: 0,
 translateX: new Animated.Value(0),
 translateXTabOne: new Animated.Value(0),
 translateXTabTwo: new Animated.Value(width),
 translateY: -1000
};

handleSlide = type => {
 let {
 active,
 xTabOne,
 xTabTwo,
 translateX,
 translateXTabOne,
 translateXTabTwo
 } = this.state;
 Animated.spring(translateX, {
 toValue: type,
 duration: 100
 }).start();
 if (active === 0) {
 Animated.parallel([
 Animated.spring(translateXTabOne, {
 toValue: 0,
 duration: 100
 }).start(),
 Animated.spring(translateXTabTwo, {
 toValue: width,
 duration: 100
 }).start()
 ]);
 } else {
 Animated.parallel([
 Animated.spring(translateXTabOne, {
 toValue: -width,
 duration: 100
 }).start(),
 Animated.spring(translateXTabTwo, {
 toValue: 0,
 duration: 100
 }).start()
 ]);
 }
};
 render() {
 let {
 xTabOne,
 xTabTwo,
 translateX,
 active,
 translateXTabOne,
 translateXTabTwo,
 translateY
 } = this.state;
 return (
 <View style={{ flex: 1 }}>
 <View
 style={{
 width: "90%",
 marginLeft: "auto",
 marginRight: "auto"
 }}
 >
 <View
 style={{
 flexDirection: "row",
 marginTop: 40,
 marginBottom: 20,
 height: 36,
 position: "relative"
 }}
 >
 <Animated.View
 style={{
 position: "absolute",
 width: "50%",
 height: "100%",
 top: 0,
 left: 0,
 backgroundColor: "#007aff",
 borderRadius: 4,
 transform: [
 {
 translateX
 }
 ]
 }}
 />
 <TouchableOpacity
 style={{
 flex: 1,
 justifyContent: "center",
 alignItems: "center",
 borderWidth: 1,
 borderColor: "#007aff",
 borderRadius: 4,
 borderRightWidth: 0,
 borderTopRightRadius: 0,
 borderBottomRightRadius: 0
 }}
 onLayout={event =>
 this.setState({
 xTabOne: event.nativeEvent.layout.x
 })
 }
 onPress={() =>
 this.setState({ active: 0 }, () =>
 this.handleSlide(xTabOne)
 )
 }
 >
 <Text
 style={{
 color: active === 0 ? "#fff" : "#007aff"
 }}
 >
 One Way
 </Text>
 </TouchableOpacity>
 <TouchableOpacity
 style={{
 flex: 1,
 justifyContent: "center",
 alignItems: "center",
 borderWidth: 1,
 borderColor: "#007aff",
 borderRadius: 4,
 borderLeftWidth: 0,
 borderTopLeftRadius: 0,
 borderBottomLeftRadius: 0
 }}
 onLayout={event =>
 this.setState({
 xTabTwo: event.nativeEvent.layout.x
 })
 }
 onPress={() =>
 this.setState({ active: 1 }, () =>
 this.handleSlide(xTabTwo)
 )
 }
 >
 <Text
 style={{
 color: active === 1 ? "#fff" : "#007aff"
 }}
 >
 Round Trip
 </Text>
 </TouchableOpacity>
 </View>

 <ScrollView>
 <Animated.View
 style={{
 //justifyContent: "center",
 //alignItems: "center",
 transform: [
 {
 translateX: translateXTabOne
 }
 ]
 }}
 onLayout={event =>
 this.setState({
 translateY: event.nativeEvent.layout.height
 })
 }
 >
 
 
 <View style={styles.container2}>
 <View style={styles.regform2}>
 <TextInput style={styles.textInput2} placeholder="From"
 underlineColorAndroid={'transparent'}/>
 <TextInput style={styles.textInput2} placeholder="To"
 underlineColorAndroid={'transparent'}/>
 <Text> FROM: </Text>
 <DatePicker
 style={{width: 200}}
 date={this.state.date} //initial date from state
 mode="date" //The enum of date, datetime and time
 placeholder="select date"
 format="DD-MM-YYYY"
 minDate="01-01-2016"
 maxDate="01-01-2019"
 confirmBtnText="Confirm"
 cancelBtnText="Cancel"
 customStyles={{
 dateIcon: {
 position: 'absolute',
 left: 0,
 top: 4,
 marginLeft: 0
 },
 dateInput: {
 marginLeft: 36
 }
 }}
 onDateChange={(date) => {this.setState({date: date})}}
 />
 <Text> CLASS: </Text>
 <Picker style={styles.pickerStyle} 
 selectedValue={this.state.language} 
 onValueChange={(itemValue, itemPosition) => 
 this.setState({language: itemValue, choosenIndex: itemPosition})} 
 > 
 <Picker.Item label="Economy" value="economy" /> 
 <Picker.Item label="Business" value="business" /> 
 <Picker.Item label="First" value="first" /> 
 </Picker> 
 <TouchableOpacity style={styles.buttonContainer}>
 <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate("Cards")}>SEARCH FLIGHTS</Text>
 </TouchableOpacity>
</View>
 </View>
 </Animated.View>
 <Animated.View
 style={{
 justifyContent: "center",
 alignItems: "center",
 transform: [
 {
 translateX: translateXTabTwo
 },
 {
 translateY: -translateY
 }
 ]
 }}
 >
 
 <View style={styles.container2}>
 <View style={styles.regform2}>
 <TextInput style={styles.textInput2} placeholder="From"
 underlineColorAndroid={'transparent'}/>
 <TextInput style={styles.textInput2} placeholder="To"
 underlineColorAndroid={'transparent'}/>
 <Text> FROM: </Text>
 <DatePicker
 style={{width: 200}}
 date={this.state.date} //initial date from state
 mode="date" //The enum of date, datetime and time
 placeholder="select date"
 format="DD-MM-YYYY"
 minDate="01-01-2016"
 maxDate="01-01-2019"
 confirmBtnText="Confirm"
 cancelBtnText="Cancel"
 customStyles={{
 dateIcon: {
 position: 'absolute',
 left: 0,
 top: 4,
 marginLeft: 0
 },
 dateInput: {
 marginLeft: 36
 }
 }}
 onDateChange={(date) => {this.setState({date: date})}}
 />
 <Text> TO: </Text>
 <DatePicker
 style={{width: 200}}
 date={this.state.date} //initial date from state
 mode="date" //The enum of date, datetime and time
 placeholder="select date"
 format="DD-MM-YYYY"
 minDate="01-01-2016"
 maxDate="01-01-2019"
 confirmBtnText="Confirm"
 cancelBtnText="Cancel"
 customStyles={{
 dateIcon: {
 position: 'absolute',
 left: 0,
 top: 4,
 marginLeft: 0
 },
 dateInput: {
 marginLeft: 36
 }
 }}
 onDateChange={(date) => {this.setState({date: date})}}
 />
 <Text> CLASS: </Text>
 <Picker style={styles.pickerStyle} 
 selectedValue={this.state.language} 
 onValueChange={(itemValue, itemPosition) => 
 this.setState({language: itemValue, choosenIndex: itemPosition})} 
 > 
 <Picker.Item label="Economy" value="economy" /> 
 <Picker.Item label="Business" value="business" /> 
 <Picker.Item label="First" value="first" /> 
 </Picker> 
 <TouchableOpacity style={styles.buttonContainer}>
 <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate("Cards")}>SEARCH FLIGHTS</Text>
 </TouchableOpacity>
 </View>
 </View>
 </Animated.View>
 </ScrollView>
 </View>
 </View>
 );
}


}

class CardsScreen extends React.Component{
 constructor(props){
 super(props);
 this.state={
 dataSource: []
 }
 }

 componentDidMount(){
 const url='http://192.168.1.202/BEUDAN/PHP/main.php'
 fetch(url)
 .then((response)=>response.json())
 .then((responseJson) =>{
 this.setState({
 dataSource:responseJson
 })
 }).catch((error)=>{
 console.log(error)
 })
 }
 
 render(){
    return(
     <View style={{padding:10}}>
     <FlatList
     padding ={30}
        data={this.state.dataSource}
        renderItem={({item}) => 
        <View style={{height: 50}}>
        <Text style={{height: 50}}>{item.Query.Country}</Text>
        
        <View style={{height: 1,backgroundColor:'gray'}}></View>
        </View>
       }
      />
     
    </View>
    )}


 };


const RootStack = createStackNavigator(
 {
 Home: HomeScreen,
 Details: DetailsScreen,
 Retails:RetailsScreen,
 Cards:CardsScreen
 },
 {
 initialRouteName: 'Home',
 }
);
const AppContainer = createAppContainer(RootStack);


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
}



});

export default class App extends React.Component {
 render() {
 return <AppContainer />;
 }
}

