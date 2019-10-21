import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
// import * as actionCreator from '../actions';
import { connect } from "react-redux";
import { fetchData } from '../actions';


class MetaData extends Component {

  componentDidMount() {
    this.props.fetchData()

  }

  render() {
    console.log("------METADATA------")
    console.log(this.props.apiData)
    return (
      <View style={styles.metaData}>
        <Text style={styles.currentDay}>{"Saturday" + ", " + "19" + "th " + "October"}</Text>
        <Text style={styles.currentTime}>{"09:35" + " " + "am"}</Text>
        <Text style={styles.city}>{this.props.apiData.name}</Text>
        <Text style={styles.weatherType}>{"sunny"}</Text>
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

const mapDispatchToProps = { fetchData }

export default connect(mapStateToProps, mapDispatchToProps)(MetaData);

const styles = StyleSheet.create({
  metaData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentDay: {
    fontSize: 18
  },
  currentTime: {
    fontSize: 30,
    marginTop: 10
  },
  city: {
    fontSize: 32,
    marginTop: 10,
    fontWeight: "bold"
  },
  weatherType: {
    fontSize: 16
  }
});
