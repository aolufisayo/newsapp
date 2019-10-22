import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { API_KEY } from 'react-native-dotenv'
import Article from './Article';

@inject('newsStore')
@observer
export default class NewsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      country: 'us',
      refreshing: false
    }

  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    const { country } = this.state
    const { newsStore } = this.props
    const endpoint = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
    this.setState({ refreshing: true })
    let response = await fetch(endpoint, {
      method: 'GET'
    }).then(res => res.json())
    await response.articles.map(article => {
      newsStore.addArticle(article)
    })
    this.setState({ refreshing: false })
  }

  render() {
    const { refreshing } = this.state
    const { articles } = this.props.newsStore

    const onRefresh = () => {
      this.getData()
    }
    return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {
          articles.map((article, index) => (
            <Article key={index} article={article} style={{ elevation: 10 }} navigation={this.props.navigation} />
          ))
        }
      </ScrollView>

    )
  }
}


