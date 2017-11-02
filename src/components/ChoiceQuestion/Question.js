import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  ScrollView,
  Dimensions,
  Platform
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

    if (Platform.OS === 'web') {
      window.addEventListener('resize', (e)=> {
        setTimeout(() => {
          this.setState({
              width: Dimensions.get('window').width
          })
        }, 200);

      });
    }


    this.state = {
      selectedAnswer: props.selectedAnswer || null,
      width: Dimensions.get('window').width
    };
  }

  onSelect(choice) {
    this.setState({selectedAnswer: choice});
  }

  render() {
    let {title, children} = this.props;
    let {selectedAnswer, width} = this.state;
    this.width = Dimensions.get('window').width; //full width

    return (
     <View style={{
       flex: 1
     }}>
      <QuestionTitle width={width}>{title}</QuestionTitle>
        <ScrollView
          style={{flex:1, height:80}}>
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
        </ScrollView>
      </View>
   );
  }
}
