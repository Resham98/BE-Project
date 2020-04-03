import React, { Children } from 'react';
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
import Drawer from 'react-native-drawer';
console.disableYellowBox = true;
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
export default class RetailsScreen extends React.Component {
  constructor(props){

  super(props)
    this.state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000,
    Origin: '',
    Destination: '',
    Adults: '',
    Children: '',
    Infants: '',
    ClassIndex: 0,
    date1: "2020-07-03",
    date2: "2020-07-03",
    date3: "2020-07-03",
    userid: this.props.navigation.state.params.userid,
   };
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

    <TextInput style={styles.textInput2} 
    placeholder="From"
    underlineColorAndroid={'transparent'}
    autocorrect={false}
    keyboardType="default"
    onChangeText={Origin => this.setState({Origin})}/>

    <TextInput style={styles.textInput2} 
    placeholder="To"
    underlineColorAndroid={'transparent'}
    autocorrect={false}
    keyboardType="default"
    onChangeText={Destination => this.setState({Destination})}/>

  <TextInput style={styles.textInput2}
  placeholder="Adults"
  returnKeyType='next'
  autocorrect={false}
  onChangeText={Adults => this.setState({Adults})}
  />

  <TextInput style={styles.textInput2}
  placeholder="Children"
  returnKeyType='next'
  autocorrect={false}
  onChangeText={Children => this.setState({Children})}
  />

  <TextInput style={styles.textInput2}
  placeholder="Infants"
  returnKeyType='next'
  autocorrect={false}
  onChangeText={Infants => this.setState({Infants})}
  />

    <Text> FROM: </Text>
    <DatePicker
    style={{width: 200}}
    date={this.state.date1} //initial date from state
    mode="date" //The enum of date, datetime and time
    placeholder="select date"
    format="YYYY-MM-DD"
    minDate="1980-01-01"
    maxDate="2021-01-01"
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
    onDateChange={(date1) => {this.setState({date1})}}
    />
    <Text> CLASS: </Text>
    <Picker style={styles.pickerStyle} 
    selectedValue={this.state.class} 
    onValueChange={(itemValue, itemPosition) => 
    this.setState({class: itemValue, ClassIndex: itemPosition})} 
    > 
    <Picker.Item label="Economy" value="economy" /> 
    <Picker.Item label="Business" value="business" /> 
    <Picker.Item label="First" value="first" /> 
    </Picker> 
    <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.buttonText} 
    onPress={() =>  
      this.props.navigation.navigate('Cards1',{
      origin: this.state.Origin,
      destination: this.state.Destination,
      adults: this.state.Adults,
      children: this.state.Children,
      infants: this.state.Infants,
      classindex: this.state.ClassIndex,
      onlyoutbounddate: this.state.date1,
      userid: this.state.userid,
      
     
    })}>SEARCH FLIGHTS</Text>
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


    <TextInput style={styles.textInput2} 
    placeholder="From"
    underlineColorAndroid={'transparent'}
    autocorrect={false}
    keyboardType="default"
    onChangeText={Origin => this.setState({Origin})}/>

    <TextInput style={styles.textInput2} 
    placeholder="To"
    underlineColorAndroid={'transparent'}
    autocorrect={false}
    keyboardType="default"
    onChangeText={Destination => this.setState({Destination})}/>

  <TextInput style={styles.textInput2}
  placeholder="Adults"
  returnKeyType='next'
  autocorrect={false}
  onChangeText={Adults => this.setState({Adults})}
  />

  <TextInput style={styles.textInput2}
  placeholder="Children"
  returnKeyType='next'
  autocorrect={false}
  onChangeText={Children => this.setState({Children})}
  />

  <TextInput style={styles.textInput2}
  placeholder="Infants"
  returnKeyType='next'
  autocorrect={false}
  onChangeText={Infants => this.setState({Infants})}
  />
    <Text> FROM: </Text>
    <DatePicker
    style={{width: 200}}
    date={this.state.date2} //initial date from state
    mode="date" //The enum of date, datetime and time
    placeholder="select date"
    format="YYYY-MM-DD"
    minDate="1980-01-01"
    maxDate="2021-01-01"
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
    onDateChange={(date2) => {this.setState({date2})}}
    />
    <Text> TO: </Text>
    <DatePicker
    style={{width: 200}}
    date={this.state.date3} //initial date from state
    mode="date" //The enum of date, datetime and time
    placeholder="select date"
    format="YYYY-MM-DD"
    minDate="1980-01-01"
    maxDate="2021-01-01"
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
    onDateChange={(date3) => {this.setState({date3})}}
    />
    <Text> CLASS: </Text>
    <Picker style={styles.pickerStyle} 
    selectedValue={this.state.class} 
    onValueChange={(itemValue, itemPosition) => 
    this.setState({class: itemValue, ClassIndex: itemPosition})} 
    > 
    <Picker.Item label="Economy" value="economy" /> 
    <Picker.Item label="Business" value="business" /> 
    <Picker.Item label="First" value="first" /> 
    </Picker> 
    <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.buttonText} 
    
    onPress={() =>  
      this.props.navigation.navigate('Cards2',{
      origin: this.state.Origin,
      destination: this.state.Destination,
      adults: this.state.Adults,
      children: this.state.Children,
      infants: this.state.Infants,
      classindex: this.state.ClassIndex,
      outbounddate: this.state.date2,
      inbounddate: this.state.date3,
      userid: this.state.userid,
      
     
    })}>SEARCH FLIGHTS</Text>
    </TouchableOpacity>
    </View>
    </View>
    </Animated.View>
    </ScrollView>
    
    </View>
    </Drawer>
                    </View>
                    </SafeAreaView>
                      
    </View>
    );
   }
   
   
   
   }
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
    height:700,
    width:280,
   
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

