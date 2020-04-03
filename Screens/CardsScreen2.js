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
import Drawer from 'react-native-drawer';
console.disableYellowBox = true;
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
 export default class CardsScreen2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
        dataSource: [],
        origin: this.props.navigation.state.params.origin,
        destination: this.props.navigation.state.params.destination,
        adults: this.props.navigation.state.params.adults,
        children: this.props.navigation.state.params.children,
        infants: this.props.navigation.state.params.infants,
        classindex: this.props.navigation.state.params.classindex,
        outbounddate: this.props.navigation.state.params.outbounddate,
        inbounddate: this.props.navigation.state.params.inbounddate,
        userid: this.props.navigation.state.params.userid,

  
    }
    }
    renderDrawer() {
      //SlideMenu
      return (
          <View style={styles.menuContainer}>
                  <TouchableOpacity style={styles.menuTitleContainer}>
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
   
    componentDidMount(){
      fetch('http://192.168.1.208/BEUDAN/MyProject/PHP/roundtrip.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          origin: this.state.origin,
          destination: this.state.destination,
          adults: this.state.adults,
          children: this.state.children,
          infants: this.state.infants,
          classindex: this.state.classindex,
          outbounddate: this.state.outbounddate,
          inbounddate: this.state.inbounddate,
        })
  
      }).then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              dataSource:responseJson
              })
            // Showing response message coming from server after inserting records.
            
            //  Alert.alert(responseJson);
          }).catch((error) => {
        console.error(error);
      });
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
                        <View style={styles.mainContainer}>
         
         <FlatList
          padding ={15}
            data={this.state.dataSource}
            renderItem={({item}) => 
            <View style={{flexGrow:0}}>
            
         
            <Text style={{fontSize: 25, paddingVertical: 2, fontFamily:'bold',color:'blue'}}>
            <Image style={styles.logo}
               source={require('MyProject/images/plane.png')}>
             </Image>
   
            {item.flight.out[0].OriginStation} to {item.flight.out[0].DestinationStation}
            </Text>
            
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.out[0].DepartureDate}  to  {item.flight.out[0].ArrivalDate}</Text>
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.out[0].DepartureTime} to {item.flight.out[0].ArrivalTime}</Text>
            <Text style={{fontSize: 25, paddingVertical: 2,fontFamily:'bold',color:'blue'}}>{item.flight.out[0].FlightName}</Text>
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.out[0].FlightNumber}</Text>
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.out[0].Duration}</Text>
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.out[0].Stops}</Text>
            <Text style={{color: 'blue'}} onPress={() => Linking.openURL(item.flight.out[0].ImageUrl)}>Image</Text>

            <View style={{height: 2,backgroundColor:'gray'}}></View>

            <Text style={{fontSize: 25, paddingVertical: 2, fontFamily:'bold',color:'blue'}}>
            <Image style={styles.logo}
               source={require('MyProject/images/plane.png')}>
             </Image>
   
            {item.flight.in[0].OriginStation} to {item.flight.in[0].DestinationStation}
            </Text>
            
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.in[0].DepartureDate}  to  {item.flight.in[0].ArrivalDate}</Text>
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.in[0].DepartureTime} to {item.flight.in[0].ArrivalTime}</Text>
            <Text style={{fontSize: 25, paddingVertical: 2,fontFamily:'bold',color:'blue'}}>{item.flight.in[0].FlightName}</Text>
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.in[0].FlightNumber}</Text>
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.in[0].Duration}</Text>
            <Text style={{fontSize: 15, paddingVertical: 2}}>{item.flight.in[0].Stops}</Text>
            <Text style={{color: 'blue'}} onPress={() => Linking.openURL(item.flight.in[0].ImageUrl)}>Image</Text>


            <Text style={{fontSize: 25 ,paddingVertical: 4,fontFamily:'bold',paddingLeft:240,color:'blue'}}>{item.price}</Text>
            <TouchableOpacity style={styles.buttonContainer}
             onPress={() =>  
              this.props.navigation.navigate('Pay2',{
          oStation1: item.flight.out[0].OriginStation,
          dStation1: item.flight.out[0].DestinationStation,
          dDate1: item.flight.out[0].DepartureDate,
          aDate1: item.flight.out[0].ArrivalDate,
          dTime1: item.flight.out[0].DepartureTime,
          aTime1: item.flight.out[0].ArrivalTime,
          fName1: item.flight.out[0].FlightName,
          fNumber1: item.flight.out[0].FlightNumber,
          fDuration1: item.flight.out[0].Duration,
          oStation2: item.flight.in[0].OriginStation,
          dStation2: item.flight.in[0].DestinationStation,
          dDate2: item.flight.in[0].DepartureDate,
          aDate2: item.flight.in[0].ArrivalDate,
          dTime2: item.flight.in[0].DepartureTime,
          aTime2: item.flight.in[0].ArrivalTime,
          fName2: item.flight.in[0].FlightName,
          fNumber2: item.flight.in[0].FlightNumber,
          fDuration2: item.flight.in[0].Duration,
          fPrice: item.price,
          adults:this.state.adults,
          children:this.state.children,
          infants:this.state.infants,
          classindex:this.state.classindex,
          userid:this.state.userid,

             
            })}>
            <Text style={{textAlign:'center'}}>Book </Text>
            </TouchableOpacity>
            <View style={{height: 5,backgroundColor:'gray'}}></View>
    
         
            </View>
           }
          />
 
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
        justifyContect: 'center',
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
        alignItem:'center',
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
      mainContainer1: {
        flex: 1.0,
        backgroundColor: 'white',
      
    },
    mainContainer: {
      flex: 1.0,
      backgroundColor: 'white',
      
     
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
        alignContent:'center',
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
        width:20,
        height:30,
       
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
        height:20,
        width:80,
        color:'black',
        marginBottom:10,
        marginLeft:250,
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
    

