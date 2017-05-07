import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import {
    Header, Spinner, Button,CardSec
} from './component/common';

import firebase from 'firebase';
import { LoginForm } from './component/LoginForm';


export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null
        }
    }

    componentWillMount() {

        firebase.initializeApp(
            {
                apiKey: "AIzaSyCmTrQMr3mq1E_ybVD7wnFBlepmNu_yIYA",
                authDomain: "authentication-6af93.firebaseapp.com",
                databaseURL: "https://authentication-6af93.firebaseio.com",
                projectId: "authentication-6af93",
                storageBucket: "authentication-6af93.appspot.com",
                messagingSenderId: "637751726041"
            }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });

    }

    renderPage() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSec>
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button>
                    </CardSec>
                    
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }

    }


    render() {

        return (

            <View>
                <Header headerText="Authentication" />
                {this.renderPage()}
            </View>


        );
    }
}


