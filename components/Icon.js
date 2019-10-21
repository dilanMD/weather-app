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

class Icon extends Component {
  render() {
    return (
      <View style={styles.iconContainer}>
        <Image
          source={icon}
          style={styles.icon}
        />
        <Text style={styles.temperature}>{"28"}&deg;</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Icon);

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 300,
    height: 300
  },
  temperature: {
    fontSize: 40
  }
});
