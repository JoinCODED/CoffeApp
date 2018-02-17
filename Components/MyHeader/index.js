

import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Platform, View } from 'react-native';
import { Route , Switch, Link } from 'react-router-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import store from '../Store';
import {observer} from 'mobx-react';

const Amount = observer(() => {return (store.cart) } )
const HeaderText = observer(() => {return (store.header) } )
export default class MyHeader extends Component {
    render() {
      return (
      <Header style={{backgroundColor: "transparent"}} >
        <Switch>
        <Route exact path='/' component={Left} />
        <Route path="/" render={() => (
        <Left>
            <Link to='/' component={Button} transparent>
            
            <Icon style={styles.backicon} name='arrow-back' />
            
            </Link>

        </Left>
        )}/>
        </Switch>

        <Body>
        <Title style={styles.header}><HeaderText /></Title>
        </Body>
        <Right>
            <Link to='/cart' component={Button} transparent>
                <Text style={styles.text}><Amount />{" "}
                <Icon name='beer' style={styles.icon} />
                </Text>
            </Link>
        </Right>
        </Header>
      )
    }
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#5cd6d6',
      opacity: 0.6,
    },
    topheader: {
      backgroundColor: '#5cd6d6',
      opacity: 0,
  
    },
    backicon: {
        color: 'white',

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
  
  