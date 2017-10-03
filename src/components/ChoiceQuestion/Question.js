import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  Dimensions
} from 'react-native';

const QuestionTitle = styled.Text`
    font-size: 24px;
    color: #408EA7;
    border-style: solid;
    border-bottom-color: rgba(64, 142, 167, 0.3);
    border-bottom-width: 1px;
    width: ${props => props.width * 0.8};
    padding: 10px 0;
    margin-bottom: 20px;
  `;

export default class ChoiceQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: props.selectedAnswer || null
    };
  }

  onSelect(choice) {
    this.setState({selectedAnswer: choice});
  }

  render() {
    let {title, children} = this.props;
    let {selectedAnswer} = this.state;
    const width = Dimensions.get('window').width; //full width

    return (
     <View style={{
       flex: 0.2
     }}>
       <QuestionTitle width={width}>{title}</QuestionTitle>
       <View>
         {
           React.Children.map(
             children,
             (child, i) => React.cloneElement(child, {
               index: i,
               onSelect: (choice) => this.onSelect(choice),
               selected: selectedAnswer === i
             })
           )
         }
       </View>
     </View>
   );
  }
}
