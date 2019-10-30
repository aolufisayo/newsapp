import React, { Fragment } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { observer, inject } from 'mobx-react'
import { WebView } from 'react-native-webview'
import TabBarIcon from '../navigation/components/TabBarIcon';

@(inject('rootStore'))
@observer
export default class NewsDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pressed: false
    }

  }


  handleBookmark = (article) => {
    this.setState({ pressed: !this.state.pressed })
    console.log("article was passed in handleBookmark method");
    this.props.rootStore.bookmarkStore.addBookmark(article)
  }


  render() {
    const article = this.props.navigation.getParam('article')
    const { pressed } = this.state;
    return (

      <>
        <WebView
          source={{ uri: article.url }}
        />

        <TouchableWithoutFeedback onPress={() => this.handleBookmark(article)}>
          <View style={{ position: 'absolute', right: 10, zIndex: 100, bottom: 10 }}>
            <TabBarIcon size={36} name={pressed ? "bookmark" : "bookmark-outline"} color={pressed ? "#F71735" : "#000"} />
          </View>
        </TouchableWithoutFeedback>


      </>

    )
  }
}
