import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Platform, View } from 'react-native';
import { Route , Switch, Link } from 'react-router-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CoffeList from '../CoffeList';
import CoffeDetail from '../CoffeDetail';
import CoffeCart from '../CoffeCart';
import store from '../Store'
import background from '../../images/10.jpg';
import MyHeader from '../MyHeader';

export default class HomePage extends Component {
  render() {
    return (
        <ImageBackground source={background} style={{height: null, width: null, flex: 1}}>
      <Container>
      <MyHeader />
        <Content>
        <Route exact path='/' render={() => <CoffeList /> } />
        <Route exact path='/detail' render={() => <CoffeDetail /> } />
        <Route exact path='/cart' render={() => <CoffeCart current={store.current}/> } />

        </Content>
        <Footer style={{backgroundColor: "transparent"}}>
          <FooterTab>
            <Link to='/cart' component={Button} full>
              <Text style={styles.footerbutton}><Icon name='cart' style={styles.footericon} /> Cart</Text>
            </Link>
          </FooterTab>
        </Footer>
      </Container>
      </ImageBackground>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5cd6d6',
    opacity: 0.6,
  },
  topheader: {
    backgroundColor: '#5cd6d6',
    opacity: 0,

  },
  icon: {
    color: 'white',
    fontSize: 17,
    opacity: 1,
    },
    footericon: {
        color: 'white',
        fontSize: 15,
    },
  text: {
      color: 'white',
      fontSize: 15,
      marginTop: 19,
      opacity: 1,
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
    opacity: 1,

    },
    footerbutton: {
        
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        },
    footer: {
        backgroundColor: '#5cd6d6',
        opacity: 0.6,
    }
});

