import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text, TouchableOpacity
} from 'react-native';


export const Button = function (props) {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>

            <Text style={styles.textStyle}>{props.children}</Text>

        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 5,
        padding: 5,
        borderColor: 'rgb(90,200,250)',
        flex: 1,
        borderWidth: 2
    },

    textStyle: {
        alignSelf: 'center',
        fontSize: 20
    }
});
