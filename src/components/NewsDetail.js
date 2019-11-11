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


  handleBookmark = (article, event) => {
    //console.log("the article object passed in", article)
    //console.log(event)
    this.setState({ pressed: !this.state.pressed })

    if (!this.state.pressed) {
      //console.log("article was passed in handleBookmark method");
      this.props.rootStore.bookmarkStore.addBookmark(article)
    }
    //console.log("article was removed from bookmark store");
    this.props.rootStore.bookmarkStore.removeBookmark(article)

  }


  render() {
    const article = this.props.navigation.getParam('article')
    const { pressed } = this.state;
    return (

      <>
        <WebView
          source={{ uri: article.url }}
        />

        <TouchableWithoutFeedback onPress={(event) => this.handleBookmark(article, event)}>
          <View style={{ position: 'absolute', right: 10, zIndex: 100, bottom: 10 }}>
            <TabBarIcon size={36} name="bookmark" color={pressed ? "#F71735" : "#000"} />
          </View>
        </TouchableWithoutFeedback>


      </>

    )
  }
}
