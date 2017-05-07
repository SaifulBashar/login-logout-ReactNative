import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';


export function Input(props) {

    return (
        <View style={styles.containerStlye}>
            <Text style={styles.labelStyle} >{props.label}</Text>
            <TextInput
                placeholder={props.placeholder}
                value={props.value}
                autoCorrect={props.autoCorrect}
                secureTextEntry={props.secureTextEntry}
                style={styles.inputStyle}
                onChangeText={props.onChangeText}
            />

        </View>

    );

};

const styles = StyleSheet.create({
    inputStyle:{
        flex:2,
    },
    labelStyle:{
        flex:1,
        padding:10
    },
    containerStlye:{
        flex:1,
        flexDirection:'row',
        height:40,
        justifyContent:'center',
        alignItems:'center'
    }
});