import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems(['item1', 'item2', 'item3']);
  }

  handleButton() {
    const { addItem } = this.props;
    addItem('item10');
  }

  render() {
    const { items } = this.props;
    return (
      <View style={styles.container}>
        {items.map(item => <Text key={item}>{item}</Text>)}
        <TouchableOpacity onPress={this.handleButton}>
          <Text>Add itemdfds</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
