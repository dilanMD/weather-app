import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native';
import { connect } from "react-redux";
import MetaData from '../components/MetaData';
import Prediction from '../components/Prediction';
import Icon from '../components/Icon';
// import background from '../assets/images/gradient_bg_1.jpg';

class WeatherDetails extends Component {
  static navigationOptions = () => ({

  })
  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          source={background}
          style={styles.backgroundImage}
        > */}
        <MetaData />
        <Icon />
        <Prediction />
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    errorMessage: state.errorMessage,
    apiData: state.apiData
  };
};

export default connect(mapStateToProps)(WeatherDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%"
  }
});
