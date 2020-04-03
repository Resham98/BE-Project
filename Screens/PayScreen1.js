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
import Drawer from 'react-native-drawer'
console.disableYellowBox = true;
export default class PayScreen1 extends React.Component{
  constructor(props) {
    super(props);
  
  this.state={
                oStation: this.props.navigation.state.params.oStation,
                dStation: this.props.navigation.state.params.dStation,
                dDate: this.props.navigation.state.params.dDate,
                aDate: this.props.navigation.state.params.aDate,
                dTime: this.props.navigation.state.params.dTime,
                aTime: this.props.navigation.state.params.aTime,
                fName: this.props.navigation.state.params.fName,
                fNumber: this.props.navigation.state.params.fNumber,
                fDuration:this.props.navigation.state.params.fDuration,
                fPrice: this.props.navigation.state.params.fPrice,
                adults:this.props.navigation.state.params.adults,
                children:this.props.navigation.state.params.children,
                infants:this.props.navigation.state.params.infants,
                classindex:this.props.navigation.state.params.classindex,
                userid:this.props.navigation.state.params.userid,



  }

}

renderDrawer() {
    //SlideMenu
    return (
        <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuTitleContiner}>
                            <Text style={styles.menuTitle} onPress={() => this.props.navigation.navigate("Home")}>
                                Home
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuTitleContainer}>
                              <Text style={styles.menuTitle} onPress={() => this.props.navigation.navigate("History")}>
                                  History
                              </Text>
                          </TouchableOpacity>
                <TouchableOpacity style={styles.menuTitleContainer}>
                            <Text style={styles.menuTitle} onPress={() => this.props.navigation.navigate("Home")}>
                                About Us
                            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuTitleContainer}>
                            <Text style={styles.menuTitle} onPress={() => this.props.navigation.navigate("Home")}>
                                Contact Us
                            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuTitleContainer}>
                            <Text style={styles.menuTitle} onPress={() => this.props.navigation.navigate("Home")}>
                                Log Out
                            </Text>
            </TouchableOpacity>
        </View>
    )
}

openDrawer() {
    this.drawer.open()
}

closeDrawer() {
    this.drawer.close()
}

    render(){
       return(
        <SafeAreaView style={styles.safeAreaStyle}>
        <View style={styles.mainContainer}>
            <Drawer
                ref={(ref) => this.drawer = ref}
                content={this.renderDrawer()}
                type='static'
                tapToClose={true}
                openDrawerOffset={0.35}
                styles={drawerStyles}>
                {/* //Main View */}
                <View style={styles.headerContainer}>
                    <View style={styles.menuButton}>
                        <TouchableOpacity
                            onPress={this.openDrawer.bind(this)}>
                            <Image style={{ tintColor: 'white' }} source={require('MyProject/images/list.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headerTitle}>DRAWER</Text>
                    <View style={styles.menuButton} />
                </View>
           
       
    
        <View style={styles.containerPay}>
          <Text style={styles.header1}>Payment Methods</Text>
          <TouchableOpacity style={styles.card} onPress={() => this.props.navigation.navigate('History')}>
             <Text style={styles.CardText}>Net Banking </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} 
          
          onPress={() =>  
            this.props.navigation.navigate('Debit1',{
            oStation: this.state.oStation,
        dStation: this.state.dStation,
        dDate: this.state.dDate,
        aDate: this.state.aDate,
        dTime: this.state.dTime,
        aTime: this.state.aTime,
        fName: this.state.fName,
        fNumber: this.state.fNumber,
        fDuration: this.state.fDuration,
        fPrice: this.state.fPrice,
        adults:this.state.adults,
        children:this.state.children,
        infants:this.state.infants,
        classindex:this.state.classindex,
        userid:this.state.userid,

           
          })}>
             <Text style={styles.CardText}>Debit/Credit Card </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
             <Text style={styles.CardText}>Mobile Wallet </Text>
          </TouchableOpacity>
              
        </View>
        </Drawer>
        </View>
        </SafeAreaView>
       )}
   
   
    };
    const drawerStyles = {
      drawer: {
          flex: 1.0,
          backgroundColor: '#3B5998',
      },
      main: {
          flex: 1.0,
          backgroundColor: 'white'
      }
  }
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1.0,
      backgroundColor: 'white'
  },
  safeAreaStyle: {
      flex: 1.0,
      backgroundColor: '#3B5998',
  },
  headerContainer: {
      height: 44,
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#3B5998',
  },
  headerTitle: {
      flex: 1.0,
      textAlign: 'center',
      alignSelf: 'center',
      color: 'white'
  },
  menuButton: {
      marginLeft: 8,
      marginRight: 8,
      alignSelf: 'center',
      tintColor: 'white'
  },
  menuContainer: {
      flex: 1.0,
      backgroundColor: '#3B5998',
  },
  menuTitleContainer: {
      alignItems:'center',
      height: 60,
      width:'100%',
      flexDirection:'row',
  },
  menuTitle: {
      width:'100%',
      color: 'white',
      textAlign: 'center',
      fontSize: 17,
      alignSelf:'center',
  },
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
  
