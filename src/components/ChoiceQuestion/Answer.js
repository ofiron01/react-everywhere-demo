import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const Answer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 10px;
`;

const AnswerImage = styled.Image`
  width: 32;
  height: 32;
  border-width: 1;
  border-color: #408EA7;
  margin-right: 10;
`;

const AnswerText = styled.Text`
  font-size: 18px;
  color: #408EA7;
  padding: 10px 0;
  flex: 0.9;
`;

const AnswerCheckbox = styled.Text`
  background-color: #ffffff;
  border-width: 2px;
  border-color: #e37c44;
width: 16px;
height: 16px;
  border-style: solid;
  border-radius: 20;
  background-color: ${
    props => props.checked
    ? '#e37c44'
    : '#ffffff'
  };

`;

const AnswerHighlight = styled.View`
  background-color: ${
    props => props.isHover
    ? 'rgba(64, 142, 167, 0.04)'
    : 'transparent'
  };
`;

export default class ChoiceAnswer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hover: false
    };
  }

  onChoiceSelected(choiceIndex) {
    this.props.onSelect(choiceIndex);
  }

  render() {
    let {hover} = this.state;
    let {children, selected, image, index} = this.props;
    return (
      <View
        style={{flex:1}}
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}>
        <AnswerHighlight isHover={selected || hover}>
          <TouchableHighlight
            onPress={() => this.onChoiceSelected(index)}
            activeOpacity={1}
            underlayColor="rgba(64, 142, 167, 0.04)">
            <Answer>
              <AnswerImage
                source={image}
              />
              <AnswerText>
                {children}
              </AnswerText>
              <AnswerCheckbox checked={selected} />
            </Answer>
          </TouchableHighlight>
        </AnswerHighlight>
      </View>
    );
  }
}
