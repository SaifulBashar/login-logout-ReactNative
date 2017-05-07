import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';


export function Header (props) {
    
    return (
        <View style={styles.viewStyle}>

            <Text style={styles.textStyle}>
                {props.headerText}
            </Text>

        </View>
    );

};


const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        height: 80,
        justifyContent: 'center',//Vertical center
        alignItems: 'center',//Horizontal center
        paddingTop: 20,
    },

    textStyle: {
        fontSize: 25,
    }
});
