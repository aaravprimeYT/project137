import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      url: `https://e58963a55bb1.ngrok.io `
    };
  }
  
  render() {
    const { details, imagePath } = this.state;
      return (
        <View style={styles.container}>
            <View>
                <Text style={styles.cardItem}>
                    Loading
                </Text>
            </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10
  }
});