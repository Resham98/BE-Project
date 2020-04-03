import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import RetailsScreen from "./Screens/RetailsScreen";
import CardsScreen1 from "./Screens/CardsScreen1";
import CardsScreen2 from "./Screens/CardsScreen2";
import PayScreen1 from "./Screens/PayScreen1";
import DebitScreen1 from "./Screens/DebitScreen1";
import PayScreen2 from "./Screens/PayScreen2";
import DebitScreen2 from "./Screens/DebitScreen2";
import HistoryScreen from "./Screens/HistoryScreen";
import Splash from "./Screens/Splash";

const RootStack = createStackNavigator(
 {
 Home: HomeScreen,
 Details: DetailsScreen,
 Retails:RetailsScreen,
 Cards1:CardsScreen1,
 Cards2: CardsScreen2,
 Pay1:PayScreen1,
 Debit1:DebitScreen1,
 Pay2:PayScreen2,
 Debit2:DebitScreen2,
 History:HistoryScreen,
 Splash:Splash,
 },
 {
 initialRouteName: 'Home',
 }
);
const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
    constructor(props){
      super(props);
          this.state={currentScreen:"Splash"};
          console.log("start doing some task for 3 sec");
          setTimeout(()=>{
              console.log("Done some task for 3 sec");
              this.setState({currentScreen:'HomeScreen'})},3000)
  }
   render() {
  const {currentScreen}=this.state
  let mainScreen=currentScreen=='Splash'?<Splash/>:<AppContainer/>
  return mainScreen;
  //return <AppContainer />;
   }
  }




