/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'

import { AntDesign } from '@expo/vector-icons';

export default class Search extends Component {

  state = {
    text: "",
  }

  onChangeText = text => {
    this.setState({text});
  }

  onPress = () => {
    //this.setState({text: ""});  
    console.log("HELLO!")
  }

  render () {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.textInput}
          onChangeText={text => this.onChangeText(text)}
          placeholder={"Search for News"}
          value={this.state.text}
        />  
        <TouchableOpacity 
          style={styles.TouchableOpacity}
          onPress={this.onPress}
        >
          <AntDesign 
              //style={styles.icon}
              name="search1"
              size={40} color="gray"  
          />
        </TouchableOpacity>
        

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container : {
    width: '96%',
    height: '8%',
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: "#e8e8e8",
    borderRadius: 10,
    alignItems: 'center',
  },
  textInput : {
    flex: 9,
    height: '100%',
    padding: 5,
  },
  TouchableOpacity : {
    flex: 2,
  }

});
