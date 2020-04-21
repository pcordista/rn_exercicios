import React from 'react';
import { Text } from 'react-native'
import Padrao from '../styles/index';

export default props => {
    return <Text style={[Padrao.ex]}>{props.text}</Text>
}