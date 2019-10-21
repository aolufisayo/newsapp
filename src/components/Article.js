import React, { Component } from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native';


export default class Article extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { article } = this.props
    return (
      <Container>
        <TouchableOpacity onPress={() => { }}>
          <Cover>

            <CaptionText>{article.title}</CaptionText>

            <PostImage source={article.urlToImage ? { uri: article.urlToImage } : null} />
            <Subtitle>
              <SubtitleText>{article.source.name}</SubtitleText>
            </Subtitle>

          </Cover>
        </TouchableOpacity>
        <Horizontal>

        </Horizontal>
      </Container>
    )
  }
}

const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 25.5;
`;

const Cover = styled.View`
    width: 343;
    height: 245;
    background: #FFFFFF;
    margin-right: 16;
    margin-left: 16;
`

const Subtitle = styled.View`
    width: 85;
    height: 25;
    position: absolute;
    margin-left: 10;
    bottom: 10;
    background: #F71735;
    border-radius: 5;
`
const Horizontal = styled.View`
    border-bottom-width: 0.5;
    margin-top: 25.5;
    width: 343;
    margin-left: 16;
    margin-right: 16;
`

const SubtitleText = styled.Text`
     color: #FFFFFF;
    font-size: 14;
    padding-left: 8;
`

const CaptionText = styled.Text`
    font-size: 16;
    text-align: left;
    font-weight: 400;
    color: #333333;
`

const PostImage = styled.Image`
    width: 100%;
    height: 185;
    position: absolute;
    bottom: 0;
    left: 0;
`