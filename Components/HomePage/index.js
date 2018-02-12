import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Platform, View } from 'react-native';
import { Route , Switch, Link } from 'react-router-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CoffeList from '../CoffeList';
import background from '../../images/10.jpg';

export default class HomePage extends Component {
  render() {
    return (
        <ImageBackground source={background} style={{height: null, width: null, flex: 1}}>
      <Container>
        <Header style={{backgroundColor: "transparent"}} >
        <Switch>
        <Route exact path="/somepage" render={() => (
          <Left>
            <Link to='/' component={Button} transparent>
            
              <Icon name='arrow-back' />
            
            </Link>

          </Left>
        )}/>
        <Route path='/' component={Left} />
        </Switch>

        <Body>
           <Title style={styles.header}>The Coffe App</Title>
        </Body>
        <Right>
            <Button transparent>
                <Text style={styles.text}>3{" "}
                <Icon name='beer' style={styles.icon} />
                </Text>
            </Button>
        </Right>
        </Header>

        <Content>
        <Route path='/' render={() => <CoffeList /> } />
        </Content>
        <Footer style={{backgroundColor: "transparent"}}>
          <FooterTab>
            <Button full>
              <Text style={styles.footerbutton}><Icon name='navigate' style={styles.footericon} /> Map</Text>
            </Button>
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

