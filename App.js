import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from "react-redux";
import SplashScreen from './screens/SplashScreen';
import WeatherDetails from './screens/WeatherDetails';

class App extends Component {
  render() {
    // return (this.props.isFetching ? <SplashScreen /> : <WeatherDetails />);
    return <WeatherDetails />
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    errorMessage: state.errorMessage,
    apiData: state.apiData
  };
};

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%"
  }
});
