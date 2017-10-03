import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const PrimaryButton = styled.Text`
  background-color: ${
    props => props.isHover
    ? '#326f82'
    : '#408EA7'
  };
  color: #ffffff;
  font-size: 22px;
  border-radius: 4px;
  border-style: solid;
  border-color: #326f82;
  border-width: 1px;
  width: 200;
  text-align:center;
  padding: 10px;
`;

 class NextButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
   let {children} = this.props;
   let {hover} = this.state;
   return (
     <View
       onMouseEnter={() => this.setState({hover: true})}
       onMouseLeave={() => this.setState({hover: false})}>
       <TouchableOpacity
         activeOpacity={0.85}>
         <PrimaryButton isHover={hover}>{children}</PrimaryButton>
       </TouchableOpacity>
     </View>

   );
  }
 }

export default NextButton;
