import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import WeatherDetails from '../../screens/WeatherDetails';
import CityLists from '../../screens/CityLists';

const Navigation = createBottomTabNavigator({
  WeatherDetails: WeatherDetails,
  CityLists: CityLists
});

export const App = createAppContainer(Navigation);