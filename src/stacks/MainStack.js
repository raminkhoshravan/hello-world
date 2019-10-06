import React from 'react';
import {
  AsyncStorage,
  View, 
} from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Welcome from '../Pages/MasterPages/screen/Welcome';
import HallofFameList from '../Pages/MasterPages/screen/HallofFameList';
import Mainscreen from '../Pages/MasterPages/screen/Mainscreen';
const Main = createSwitchNavigator({
  Welcome: {
    screen: Welcome, navigationOptions: {
      header: null,
    }
  },
  HallofFameList: {
    screen: HallofFameList, navigationOptions: {
      header: null
    }
  },
},
  {
    //   contentComponent: scrinOfDrawer,
    //   drawerWidth: 300
  });

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    let userToken = await AsyncStorage.getItem('userToken');
    if (userToken !== null) {
      
      this.props.navigation.navigate('App');
    } else {
      this.props.navigation.navigate('Intro');
    }

  };
  // Render any loading content that you like here
  render() {
    return (
      <View>
      </View>
    );
  }
}

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Intro: Mainscreen,
    App: Main,
  },
  {
    // initialRouteName: 'AuthLoading',
  }
));
