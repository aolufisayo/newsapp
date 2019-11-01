import React, { Component } from 'react'
import { ScrollView, RefreshControl } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Article from './Article';

export default class Bookmarks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: {}
    }
    this.getData()
  }


  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@news-app-bookmarks')
      if (value !== null) {
        // value previously stored
        const result = JSON.parse(value)
        this.setState({
          articles: result
        })
      }
    } catch (e) {
      // error reading value
      console.log(e)
    }

  }



  render() {
    const { bookmarks } = this.state.articles
    return (
      <ScrollView>
        {
          bookmarks && bookmarks.map((bookmark, index) => (
            <Article key={index} article={bookmark} style={{ elevation: 10 }} navigation={this.props.navigation} />
          ))
        }
      </ScrollView>
    )
  }
}