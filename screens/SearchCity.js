import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { Container, Header, Item, Input, Icon, Button, Text, Content, List, ListItem } from 'native-base';

class SearchCity extends Component {
  constructor() {
    super()
    this.cities = [
      'Colombo',
      'Jaffna',
      'Negombo',
      'Mannar'
    ]
    this.state = {
      searchString: "",
      suggestions: []
    }
  }

  onTextChanged = (e) => {
    const value = e
    if (value.length < 1) {
      this.setState({ suggestions: [] })
      console.log("-----IF-----")
      console.log(this.state.suggestions)
    } else {
      // console.log("-----VALUE LENGTH")
      // console.log(value.length)
      // const regex = new RegExp(`^${value}`)
      const suggestions = this.cities.filter((city) => {
        return city == value
      })
      this.setState({ suggestions: suggestions })
      console.log("-----ELSE-----")
      console.log(this.state.suggestions)
    }
  }

  onRenderedSearch = () => {
    const { suggestions } = this.state
    if (suggestions.length === 0) { return null }
    else {
      return (
        <List>
          {this.cities.map((index, city) =>
            <ListItem key={index}>
              <Text>{city}</Text>
            </ListItem>
          )}
        </List>
      )
    }

  }

  render() {
    return (
      <Container style={styles.searchContainer}>
        <Header searchBar rounded>
          <Item style={styles.textInput}>
            <Icon name="ios-search" />
            <Input placeholder="City name" onChangeText={this.onTextChanged} />
            <Icon name="ios-cloud" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <Content>
            {this.onRenderedSearch()}
          </Content>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(SearchCity);

const styles = StyleSheet.create({
  textInput: {
    // marginRight: 10
  }
});
