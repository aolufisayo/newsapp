import React, { Component } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

export default class NewsDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const article = this.props.navigation.getParam('article')
    return (

      <WebView
        source={{ uri: article.url}}
        style={{ marginTop: 20 }}
      />

    )
  }
}
