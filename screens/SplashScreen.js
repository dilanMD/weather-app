import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from "react-redux";

class Icon extends Component {
  render() {
    return (
      <View style={styles.splashScreen}>
        <Text>Loading...</Text>
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
  splashScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
