
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

   fetch('http://192.168.1.208/BEUDAN/PHP/singleRead.php', {
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
              {  Alert.alert("Successful !!!")}
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
class DetailsScreen extends React.Component {
 constructor(props){
 super(props)
 //set value in state for initial date
 this.state = {
 date:"15-05-2018",
 Name: '',
 UserName: '',
 UserEmail: '',
 Password: '',
 Mobile: '',
 DOB: '',
 Address: '',
 Gender: '',
 Image: ''

 }
 }

 UserRegistration = () =>{

    fetch('http://192.168.1.208/BEUDAN/PHP/user_registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.Name,
        username: this.state.UserName,
        email: this.state.UserEmail,
        password: this.state.Password,
        mobile: this.state.Mobile,
        dob: this.state.DOB,
        address: this.state.Address,
        gender: this.state.Gender,
      })

    }).then((response) => response.json())
        .then((responseJson) => {

          // Showing response message coming from server after inserting records.
          if(responseJson === "true"){
            Alert.alert("User Registered Successfully!")
          }

        }).catch((error) => {
      console.error(error);
    });

  };

 render() {
 return (
 <ScrollView>
 <View style={styles.container1}>
 <View style={styles.regform}>
 <Text style={styles.header}>Registration</Text>

 <TextInput style={styles.textInput} 
    placeholder="Enter Name"
    onChangeText={name => this.setState({Name : name})}
    underlineColorAndroid={'transparent'}/>

 <TextInput style={styles.textInput} 
    placeholder="Enter User Name"
    onChangeText={username => this.setState({UserName : username})}
    underlineColorAndroid={'transparent'}/>

 <TextInput style={styles.textInput} 
    placeholder="Enter Email-id"
    onChangeText={email => this.setState({UserEmail : email})}
    underlineColorAndroid={'transparent'}/>

<TextInput style={styles.textInput} 
    placeholder="Password" 
    onChangeText={password => this.setState({Password : password})}
    secureTextEntry={true}
    underlineColorAndroid={'transparent'} />

<TextInput style={styles.textInput} 
    placeholder="Mobile no."
    onChangeText={mobile => this.setState({Mobile : mobile})}
    underlineColorAndroid={'transparent'} 
    keyboardType="numeric" />

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

<TextInput style={styles.textInput} 
    placeholder="Address"
    onChangeText={address => this.setState({Address : address})}
    underlineColorAndroid={'transparent'} 
    multiline={true}/>

<TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
 <Text style={styles.buttonText}>BIOMETRIC</Text>
 </TouchableOpacity>

 <Button 
 title="SIGN UP"
 onPress={this.UserRegistration}/>
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
 <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate("Pay")}>SEARCH FLIGHTS</Text>
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

 componentWillMount(){
 const url='http://192.168.1.208/try.php'
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
     <View style={{padding:5,flexGrow:0}}>
     <FlatList
      padding ={15}
        data={this.state.dataSource}
        renderItem={({item}) => 
        <View style={{flexGrow:0}}>
        
     
        <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight[0].OriginStation}</Text>
        <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight[0].DestinationStation}</Text>
        <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight[0].DepartureDate}</Text>
        <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight[0].DepartureTime}</Text>
        <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight[0].ArrivalDate}</Text>
        <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight[0].ArrivalTime}</Text>
        <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight[0].FlightName}</Text>
        <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight[0].FlightNumber}</Text>
        <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight[0].Duration}</Text>
        <Text style={{fontSize: 15 ,paddingVertical: 2}}>{item.price}</Text>
        <Text style={{color: 'blue'}} onPress={() => Linking.openURL(item.flight[0].ImageUrl)}>Image</Text>
        <View style={{height: 1,backgroundColor:'gray'}}></View>

     
        </View>
       }
      />
     
    </View>
    )}


 };
 
 class PayScreen extends React.Component{
    render(){
    return(
    <View style={styles.containerPay}>
    <Text style={styles.header1}>Payment Methods</Text>
    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('History')}>
    <Text style={styles.CardText}>Net Banking </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('Debit')}>
    <Text style={styles.CardText}>Debit/Credit Card </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.card}>
    <Text style={styles.CardText}>Mobile Wallet </Text>
    </TouchableOpacity>
   
    </View>
    )}
    
    
    };
    
    class DebitScreen extends React.Component{
    render(){
    return(
    <View style={styles.containerP}>
    <Text style={styles.header1}>Details Of Payment</Text>
    <TextInput style={styles.textInput} placeholder="Card Number"
    underlineColorAndroid={'transparent'}/>
    <TextInput style={styles.textInput} placeholder="Expiry Date"
    underlineColorAndroid={'transparent'}/>
    <TextInput style={styles.textInput} placeholder="CVV"
    underlineColorAndroid={'transparent'}/>
    <TextInput style={styles.textInput} placeholder="Card Holder Name"
    underlineColorAndroid={'transparent'}/>
    <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate("Cards")}>PROCEED TO PAY</Text>
    </TouchableOpacity>
    
    </View>
    )}
    
    
    };
    
    class HistoryScreen extends React.Component{
    render(){
    return(
    <View style={styles.containerP}>
    <Text style={styles.header1}>Details Of Payment</Text>
    <TextInput style={styles.textInput} placeholder="Card Number"
    underlineColorAndroid={'transparent'}/>
    <TextInput style={styles.textInput} placeholder="Expiry Date"
    underlineColorAndroid={'transparent'}/>
    <TextInput style={styles.textInput} placeholder="CVV"
    underlineColorAndroid={'transparent'}/>
    <TextInput style={styles.textInput} placeholder="Card Holder Name"
    underlineColorAndroid={'transparent'}/>
    <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate("Cards")}>PROCEED TO PAY</Text>
    </TouchableOpacity>
    
    </View>
    )}
    
    
    };
    
    
const RootStack = createStackNavigator(
 {
 Home: HomeScreen,
 Details: DetailsScreen,
 Retails: RetailsScreen,
 Cards: CardsScreen,
 Pay: PayScreen,
 Debit: DebitScreen,
 History: HistoryScreen

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

export default class App extends React.Component {
 render() {
 return <AppContainer />;
 }
}

