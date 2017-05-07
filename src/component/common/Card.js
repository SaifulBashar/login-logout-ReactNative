import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export const Card = function(props){
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'white',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
       
    }
})
