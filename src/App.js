import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import {
    Button,
    Header,
    CardSec,
    Card
} from './component/common';

import { Input } from './component/Input';
import firebase from 'firebase';

export class App extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
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
    }



    render() {

        return (
            <Card>
                <CardSec>

                    <Header headerText={"Auth"} />

                </CardSec>

                <CardSec>

                    <Input
                        placeholder={'user@***.com'}
                        value={this.state.email}
                        autoCorrect={false}
                        label={'Email:'}
                        secureTextEntry={false}
                        onChangeText={(text) => this.setState({ email: text })}
                    />

                </CardSec>

                <CardSec>

                    <Input
                        placeholder={'*********'}
                        value={this.state.password}
                        autoCorrect={false}
                        label={'Password:'}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                </CardSec>

                <CardSec>

                    <Button>
                        Log In
                    </Button>

                </CardSec>
            </Card>

        );
    }
}


