import React from 'react';
import {View} from 'react-native';

import Choice from './ChoiceQuestion';
import NextButton from './Footer/NextButton';

class TopLevelScreenComponent extends React.Component {

    render() {
        return (
          <View style={{
            flex: 0.9,
            flexDirection:'column',
            justifyContent: 'space-around'
          }}>
            <Choice.Question
              title="Choice Question"
              onSelect={(choiceIndex)=>{console.log(choiceIndex);}}>
                <Choice.Answer image={require('../assets/1.png')}>Answer 1</Choice.Answer>
                <Choice.Answer image={require('../assets/2.png')}>Answer 2</Choice.Answer>
                <Choice.Answer image={require('../assets/1.png')}>Answer 3</Choice.Answer>
                <Choice.Answer image={require('../assets/2.png')}>Answer 4</Choice.Answer>
                <Choice.Answer image={require('../assets/1.png')}>Answer 5</Choice.Answer>
                <Choice.Answer image={require('../assets/2.png')}>Answer 6</Choice.Answer>
                <Choice.Answer image={require('../assets/1.png')}>Answer 7</Choice.Answer>
            </Choice.Question>

            <View style={{
              flex: 1,
              flexDirection:'row',
              justifyContent: 'space-around',
              alignItems: 'center'}}>
              <NextButton>Next</NextButton>
            </View>

          </View>
      );
    }
}

export default TopLevelScreenComponent;
