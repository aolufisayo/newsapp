import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { observer, inject } from 'mobx-react'
import { API_KEY } from 'react-native-dotenv'

@inject('newsStore')
@observer
export default class NewsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: 'us'
    }

  }

  async componentDidMount() {
    const { country } = this.state
    const { newsStore } = this.props
    const endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
    let response = await fetch(endpoint, {
      method: 'GET'
    }).then(res => res.json())
    console.log(response)
    await response.articles.map(article => {
      newsStore.addArticle(article)
    })
  }

  render() {
    return (
      <View>
        <Text>Newlist component</Text>
      </View>
    )
  }
}