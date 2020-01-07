import React, { useEffect, useCallback } from 'react'
import { View, Text, TouchableOpacity, ScrollView, RefreshControl, Dimensions } from 'react-native'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import Article from './Article';


const { width, height } = Dimensions.get('window')
const getContainerWidth = (width) => {
  let containerWidth = width - 40;
  if (width >= 768) {
    containerWidth = (width - 60) / 2;
  }
  if (width >= 1024) {
    containerWidth = (width - 80) / 3
  }
  return containerWidth;
}

@inject('rootStore')
@observer
export default class NewsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cardWidth: getContainerWidth(width),
      refreshing: false
    }

  }

  componentDidMount() {
    this.props.rootStore.newsStore.fetchHeadlines();
    Dimensions.addEventListener("change", this.adaptLayout)
  }

  adaptLayout = dimensions => {
    this.setState({ cardWidth: getContainerWidth(dimensions.window.width) });
  }

  onRefresh = () => {
    this.props.rootStore.newsStore.fetchHeadlines();
  }


  render() {
    const { refreshing } = this.props.rootStore.newsStore
    const { articles } = this.props.rootStore.newsStore


    return (

      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />}
      >
        <Container>
          {
            articles.map((article, index) => (
              <Article key={index} article={article} style={{ elevation: 10 }} cardWidth={this.state.cardWidth} navigation={this.props.navigation} />
            ))
          }
        </Container>
      </ScrollView>


    )
  }
}



const Container = styled.View`
   flex-direction: row;
    width: ${width};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;