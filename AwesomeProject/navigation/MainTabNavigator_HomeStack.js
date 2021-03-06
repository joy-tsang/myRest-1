import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OrderScreen from '../screens/OrderScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const LoginStack = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen},
  }
);

const HomeStack = createBottomTabNavigator(
  {
    Products: {screen: ProductsScreen},
    Order: {screen: OrderScreen},
    Profile: {screen: ProfileScreen},
  },
  {
  headerMode: 'screen',

  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  
    navigation.state.routes.map(route => {
      if (route.routeName === "Order") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  

  return {
    tabBarVisible
  };
};


export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: LoginStack,
    App: HomeStack,
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
  }
);
