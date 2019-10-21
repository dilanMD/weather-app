import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';
import { connect } from "react-redux";
import Swipeout from 'react-native-swipeout';

class CityLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeRowKey: null
    }
  }
  componentDidMount() {
    console.log("------City List------")
    console.log(this.props.parentFlatList.refreshList)
  }
  renderSearchRow = () => {
    return (
      <View>
        <Text style={styles.city}>{this.props.item.label}</Text>
        <Text style={styles.temperature}>{this.props.item.temperature}&deg;</Text>
      </View>
    )
  }
  render() {
    const { index, item } = this.props
    const { cities } = this.props
    const deletingRow = this.state.activeRowKey

    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({ activeRowKey: null })
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({ activeRowKey: item.key })
      },
      right: [
        {
          onPress: () => {
            Alert.alert(
              'Delete Warning',
              'Are you sure to delete ' + item.label,
              [
                { text: 'No', },
                {
                  text: 'Yes',
                  onPress: () => {
                    cities.splice(index, 1)
                    this.props.parentFlatList.refreshList(deletingRow)
                  }
                }
              ]
            )
          },
          text: 'Delete', type: 'delete'
        }
      ],
      rowId: this.state.act,
      sectionId: 1
    }
    return (
      <Swipeout {...swipeSettings} style={{ marginTop: index == 0 ? 75 : 0 }}>
        <View style={styles.cityListSingleContainer}>
          <Text style={styles.city}>{this.props.item.label}</Text>
          <Text style={styles.temperature}>{this.props.item.temperature}&deg;</Text>
        </View >
      </Swipeout >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  };
};

export default connect(mapStateToProps)(CityLists);

const styles = StyleSheet.create({
  cityListSingleContainer: {
    flexDirection: "row",
    backgroundColor: "#E5E5E5",
    borderBottomColor: "#000000",
    borderBottomWidth: 0.3
  },
  city: {
    fontSize: 30,
    padding: 20,
  },
  temperature: {
    fontSize: 30,
    paddingVertical: 20,
    position: "absolute",
    right: 0,
    paddingRight: 30
  }
});
