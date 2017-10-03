import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  TouchableHighlight
} from 'react-native';

const Answer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 10px;
`;

const AnswerText = styled.Text`
  font-size: 18px;
  color: #408EA7;
  padding: 10px 0;
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
    let {children, selected, index} = this.props;
    return (
      <View
        onMouseEnter={() => this.setState({hover: true})}
        onMouseLeave={() => this.setState({hover: false})}>
        <AnswerHighlight isHover={selected || hover}>
          <TouchableHighlight
            onPress={() => this.onChoiceSelected(index)}
            activeOpacity={1}
            underlayColor="rgba(64, 142, 167, 0.04)">
            <Answer>
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
