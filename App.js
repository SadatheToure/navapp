import React, { Component } from 'react';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

class HomeScreen extends Component<{}> {
  static NavigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text
            onPress= {() => navigate ('Profile')}>navigate to Profile
          </Text>
        </View>
    );
  }
}
class ProfileScreen extends Component<{}> {
  static NavigationOptions = {
    title: 'Profile',
  };
  render() {
    const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
          <Text
            onPress= {() => navigate ('Home')}>navigate to Home
          </Text>
        </View>
    );
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: {screen: ProfileScreen },
}, {
    NavigationOptions: {
      headerStyle: {
        marginTop: Expo.Constants.statusBarHeight
    }
  }
})
export default class App extends Component<{}> {
  render() {
    return <NavigationApp />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
