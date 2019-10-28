import React, { Component } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { WebView } from 'react-native-webview'
import TabBarIcon from '../navigation/components/TabBarIcon';

export default class NewsDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: () => (
      <View style={{ position: 'absolute', right: 10 }}>
        <TouchableWithoutFeedback onPress={navigation.getParam('onBookmarkIconPress')}>
          <TabBarIcon name="bookmark-outline" color="#000" />
        </TouchableWithoutFeedback>
      </View >
    )
  })


  constructor(props) {
    super(props)
    this.state = {
      pressed: false
    }

  }

  componentDidMount() {
    this.props.navigation.setParams({ onBookmarkIconPress: this._onBookmarkIconPress })
  }


  _onBookmarkIconPress = () => {
    this.setState({
      pressed: !this.state.pressed
    })
  }


  render() {
    const article = this.props.navigation.getParam('article')
    return (

      <WebView
        source={{ uri: article.url }}
      />

    )
  }
}
