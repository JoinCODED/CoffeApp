import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Expo, {AppLoading} from 'expo';
import {Spinner, Container} from 'native-base';
import Loading from './Loading';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native'
import HomePage from './HomePage';

export default class MyApp extends React.Component {
    state = { 
        fontsAreLoaded: false,
        doneLoading: false,
     };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            });
        this.setState({fontsAreLoaded: true});
    }
    componentDidMount(){
        setInterval(() => {this.setState({doneLoading: true})},3000);
    }
    render() {
        if (!this.state.fontsAreLoaded) {
            return <AppLoading/>;
        }
        return (
            <NativeRouter>
                <Route path="/" render={() => (
                    !this.state.doneLoading ? (
                    <Loading />
                    ) : (
                    <HomePage/>
                    )
                )}/>
            </NativeRouter>
        );
    }
}


