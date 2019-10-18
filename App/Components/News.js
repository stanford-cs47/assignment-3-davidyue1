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
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

export default class News extends Component {
  //static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  constructor(props){
    super(props);

    //console.log(props);

  }
  //you can change the props above to whatever you want/need.
  renderArticle = (index, item) => (

    <View style={styles.article}>
      <Text style={styles.titleFont}>
        {item.title}
      </Text>

      <Text style={styles.snippetFont}>
        {item.snippet}
      </Text>      

      <Text style={styles.authorFont}>
        {item.byline}
      </Text>

      <Text style={styles.dateFont}>
        {item.date}
      </Text>
    </View>
      
  )

  keyExtractor = index => {
    return index.toString();
  }


  render () {
    const {articles} = this.props;

    return (
      <View style={styles.container}>
          <FlatList
            data={this.props.articles}
            // We encapsulated the code for renderItem into renderTodo.
            renderItem={({ index, item }) => this.renderArticle(index, item)}
            keyExtractor={(item, index) => this.keyExtractor(index)}
          />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {

  },
  article : {
    //borderWidth : 1,
    padding: 10,
  },
  titleFont : {
    fontSize: 24,
  },
  snippetFont : {
    fontSize: 14,
  },
  authorFont : {
    fontWeight: 'bold',
    lineHeight: 30,
  },
  dateFont : {
    color: '#ababab',
  },

});
