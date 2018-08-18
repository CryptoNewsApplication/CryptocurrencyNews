import React, {Component} from 'react';
import { View, TextInput, Button } from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

const inputContainer = props => (
    
    <DefaultInput placeholder="place name" 
        value={props.newsName} 
        onChangeText={props.onChangeText}/>

);
    


export default inputContainer;

