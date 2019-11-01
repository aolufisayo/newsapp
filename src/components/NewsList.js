import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { API_KEY } from 'react-native-dotenv'
import Article from './Article';

@inject('rootStore')
@observer
export default class NewsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }

  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    const { selectedCountry } = this.props.rootStore.newsStore
    const { rootStore } = this.props
    const endpoint = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${API_KEY}`
    this.setState({ refreshing: true })
    let response = await fetch(endpoint, {
      method: 'GET'
    }).then(res => res.json())
    await response.articles.map(article => {
      rootStore.newsStore.addArticle(article)
    })
    this.setState({ refreshing: false })
  }

  render() {
    const { refreshing } = this.state
    const { articles } = this.props.rootStore.newsStore

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


