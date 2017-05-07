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
    Card,
    Spinner
} from './common';

import { Input } from './common/Input';
import firebase from 'firebase';

export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }

    handlePress() {

        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }


    onLoginFail() {
        this.setState({
            error: 'login failed',
            loading: false
        })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <Spinner />
            );
        }

        return (
            <Button onPress={this.handlePress.bind(this)}>
                Log In
                </Button>
        );

    }


    render() {

        return (
            <Card>


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
                <Text style={{ color: 'red', alignSelf: 'center' }}>{this.state.error}</Text>
                <CardSec>

                    {this.renderButton()}

                </CardSec>
            </Card>

        );
    }
}


