import React, { Component } from 'react'
import styled from 'styled-components'
import { TouchableWithoutFeedback } from 'react-native';


export default class Article extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { article, navigation } = this.props
    return (
      <Container>
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('Details', { article }) }}>
          <Cover style={{ elevation: 20 }}>

            <CaptionText>{article.title}</CaptionText>

            <PostImage source={article.urlToImage ? { uri: article.urlToImage } : null} />
            <Subtitle>
              <SubtitleText>{article.source.name}</SubtitleText>
            </Subtitle>

          </Cover>
        </TouchableWithoutFeedback>
        <Horizontal />
      </Container>
    )
  }
}

const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 25.5px;
    
`;

const Cover = styled.View`
    width: 343px;
    height: 245px;
    background: #FFFFFF;
    margin-right: 16px;
    margin-left: 16px;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const Subtitle = styled.View`
    width: 85px;
    height: 25px;
    position: absolute;
    margin-left: 10px;
    bottom: 10px;
    background: #F71735;
    border-radius: 5px;
`
const Horizontal = styled.View`
    border-bottom-width: 0.5;
    margin-top: 25.5px;
    width: 343px;
    margin-left: 16px;
    margin-right: 16px;
`

const SubtitleText = styled.Text`
     color: #FFFFFF;
    font-size: 14px;
    padding-left: 8px;
`

const CaptionText = styled.Text`
    font-size: 16px;
    text-align: left;
    font-weight: 400;
    color: #333333;
`

const PostImage = styled.Image`
    width: 100%;
    height: 185px;
    position: absolute;
    bottom: 0px;
    left: 0px;
`