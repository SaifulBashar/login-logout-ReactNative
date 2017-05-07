import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export const CardSec = function(props){
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

  }
})
