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
export default class DetailsScreen extends React.Component {

  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {
    date:"1980-05-01",
    Name: '',
    UserName: '',
    UserEmail: '',
    Password: '',
    Mobile: '',
    Address: '',
    Gender: 0,
    Image: ''
   
    }
    }
   
    UserRegistration = () =>{
   
       fetch('http://192.168.1.208/BEUDAN/MyProject/PHP/user_registration.php', {
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
           date: this.state.date,
           value: this.state.Gender,
           address: this.state.Address,
          
         })
   
       }).then((response) => response.json())
           .then((responseJson) => {
   
             // Showing response message coming from server after inserting records.
             
               Alert.alert(responseJson);
             
   
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
    format="YYYY-MM-DD"
    minDate="1980-01-01"
    maxDate="2021-12-31"
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
    onPress={(value) => {
      this.setState({
        Gender: value,
      })
    }}
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
   
       <Button 
    title="SIGN UP"
    onPress={this.UserRegistration}/>
    </View>
    </View>
    </ScrollView>
    );
    }
    
   }
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
