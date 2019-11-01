import React, { Component } from 'react'
import { ScrollView, RefreshControl } from 'react-native'
import { inject, observer } from 'mobx-react'
import AsyncStorage from '@react-native-community/async-storage';
import Article from './Article';

@inject('rootStore')
@observer
export default class Bookmarks extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    const result = this.props.rootStore.bookmarkStore.getBookmarks()
    console.log("from mobx bookmasrk store", result)
    return (
      <ScrollView>
        {
          result && result.map((bookmark, index) => (
            <Article key={index} article={bookmark} style={{ elevation: 10 }} navigation={this.props.navigation} />
          ))
        }
      </ScrollView>
    )
  }
}