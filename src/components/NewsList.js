import React, { useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { observer, inject } from 'mobx-react'
import { autorun } from 'mobx'
import styled from 'styled-components'
import { getData } from '../utils/fetchData'
import { API_KEY } from 'react-native-dotenv'
import Article from './Article';

@inject('rootStore')
@observer
export default class NewsList extends React.Component {
  _mounted = false;
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false
    }

  }

  async componentDidMount() {
    const { rootStore } = this.props
    const { selectedCountry } = this.props.rootStore.newsStore;
    this.setState({ refreshing: true })
    await getData(selectedCountry, rootStore)
    this.setState({ refreshing: false })
  }

  componentWillUnmount() {
    this._mounted = false
  }

  reaction = autorun(() => {
    const { rootStore } = this.props;
    const { selectedCountry } = this.props.rootStore.newsStore;
    console.log("selected country has changed", selectedCountry)
    getData(selectedCountry, rootStore)
  })

  render() {
    const { refreshing } = this.state
    const { articles } = this.props.rootStore.newsStore

    const onRefresh = async () => {
      const { rootStore } = this.props
      const { selectedCountry } = this.props.rootStore.newsStore;
      await getData(selectedCountry, rootStore)
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


