import React from 'react';
import {View} from 'react-native';

import Choice from './ChoiceQuestion';
import NextButton from './Footer/NextButton';

class TopLevelScreenComponent extends React.Component {

    render() {
        return (
          <View style={{
            flex: 1,
            flexDirection:'column',
            justifyContent: 'space-between'
          }}>
            <Choice.Question
              title="Choice Question"
              onSelect={(choiceIndex)=>{console.log(choiceIndex);}}>
              <Choice.Answer>Answer 1</Choice.Answer>
              <Choice.Answer>Answer 2</Choice.Answer>
            </Choice.Question>
            <View style={{flex: 1, flexDirection:'row',
            justifyContent: 'space-around', alignItems: 'center'}}>
              <NextButton>Next</NextButton>
            </View>

          </View>
      );
    }
}

export default TopLevelScreenComponent;
