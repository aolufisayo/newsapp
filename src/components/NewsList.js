import React, { useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { observer, inject } from 'mobx-react'
import { autorun } from 'mobx'
import styled from 'styled-components'
import { API_KEY } from 'react-native-dotenv'
import Article from './Article';

@inject('rootStore')
@observer
export default class NewsList extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.rootStore.newsStore.fetchHeadlines();
  }


  render() {
    const { refreshing } = this.props.rootStore.newsStore
    const { articles } = this.props.rootStore.newsStore

    const onRefresh = () => {
      this.props.rootStore.newsStore.fetchHeadlines();
    }
    return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {
          articles.map((article, index) => (
            <Article key={"article " + index} article={article} style={{ elevation: 10 }} navigation={this.props.navigation} />
          ))
        }
      </ScrollView>

    )
  }
}


