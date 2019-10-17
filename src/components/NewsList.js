import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { observer, inject } from 'mobx-react'
import { API_KEY } from 'react-native-dotenv'

@inject('newsStore')
@observer
export default class NewsList {
  constructor(props) {
    this.state = {
      country: 'us',
      endpoint: 'https://newsapi.org/v2/top-headlines'
    }

  }

  componentDidMount() {
    fetch(this.state.endpoint, {
      method: 'GET',
      body: JSON.stringify({
        country: this.state.country,
        apiKey: API_KEY

      })
    }).then(res => res.json()).then(response => console.log(response))
  }

  render() {
    return (
      <View>
        <Text>Newlist component</Text>
      </View>
    )
  }
}