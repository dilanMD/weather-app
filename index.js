import React from "react";
import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducers";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import WeatherDetails from './screens/WeatherDetails';
import CityLists from './screens/CityLists';
import FlatLists from "./components/FlatLists.js";
import SearchCity from "./screens/SearchCity";

const Navigation = createBottomTabNavigator({
  WeatherDetails: WeatherDetails,
  CityLists: FlatLists,
  SearchCity: SearchCity
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'WeatherDetails') {
          iconName = `ios-cloud${focused ? '' : '-outline'}`;
        } else if (routeName === 'CityLists') {
          iconName = `ios-menu`;
        } else if (routeName === 'SearchCity') {
          iconName = `ios-search`;
        }
        return <IconComponent name={iconName} size={26} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  });

const App = createAppContainer(Navigation);


const store = createStore(reducer, applyMiddleware(thunk));

const wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => wrapper);