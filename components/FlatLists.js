import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { connect } from "react-redux";
import CityLists from '../screens/CityLists';
import { Container, Header, Content, Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

class FlatLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deleteRowKey: null
    }
  }
  refreshList = (deleteKey) => {
    this.setState((prevState) => {
      deleteRowKey: deleteKey
    })
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.cities}
          renderItem={({ index, item }) => {
            console.log("------Flatlist------")
            console.log(item)
            return (
              <CityLists index={index} item={item} parentFlatList={this} />
            )
          }}
        >
        </FlatList>
        {/* <TouchableOpacity> */}
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.iconContainer}>
            <Icon name='add-circle' style={styles.searchIcon}
              onPress={() => this.props.navigation.navigate("SearchCity")}
            />

          </Text>
        </View>
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};

export default connect(mapStateToProps)(FlatLists);

const styles = StyleSheet.create({
  searchIcon: {
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    fontSize: 30,
    paddingVertical: 20,
    position: "absolute",
    right: 0,
    paddingRight: 30
  }
});
