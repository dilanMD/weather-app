import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from "react-redux";
import icon from '../assets/images/raining.png';

class Prediction extends Component {
  render() {
    return (
      <View style={styles.prediction}>
        <Text style={styles.day}>{"Saturday"}</Text>
        <View style={styles.predictionContainer}>
          <View style={styles.singlePredictionContainer}>
            <Text style={styles.time}>3pm</Text>
            <Image
              source={icon}
              style={styles.icon}
            />
            <Text style={styles.temperature}>{"27"}&deg;</Text>
          </View>
          <View style={styles.singlePredictionContainer}>
            <Text style={styles.time}>4pm</Text>
            <Image
              source={icon}
              style={styles.icon}
            />
            <Text style={styles.temperature}>{"28"}&deg;</Text>
          </View>
          <View style={styles.singlePredictionContainer}>
            <Text style={styles.time}>5pm</Text>
            <Image
              source={icon}
              style={styles.icon}
            />
            <Text style={styles.temperature}>{"27"}&deg;</Text>
          </View>
          <View style={styles.singlePredictionContainer}>
            <Text style={styles.time}>6pm</Text>
            <Image
              source={icon}
              style={styles.icon}
            />
            <Text style={styles.temperature}>{"27"}&deg;</Text>
          </View>
          <View style={styles.singlePredictionContainer}>
            <Text style={styles.time}>7pm</Text>
            <Image
              source={icon}
              style={styles.icon}
            />
            <Text style={styles.temperature}>{"29"}&deg;</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps)(Prediction);

const styles = StyleSheet.create({
  prediction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {
    fontSize: 24,
    marginBottom: 20
  },
  predictionContainer: {
    flexDirection: "row",
  },
  singlePredictionContainer: {
    justifyContent: 'space-between',
    margin: 15,
    alignItems: 'center'
  },
  time: {
    fontSize: 16
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5
  },
  temperature: {
    fontSize: 16
  },
  menuIcon: {
    fontSize: 28,
    position: "absolute",
    right: 30,
    bottom: 30
  }
});
