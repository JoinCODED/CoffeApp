import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, ListView } from 'react-native';
import { Link } from 'react-router-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem, Tab, Tabs } from 'native-base';
import store from '../Store';
import openMap from 'react-native-open-maps';
import {observer} from 'mobx-react'
export default class CoffeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          detail: store.detail,
          drink: 0,
          option: 0,

        };
    }
    componentWillMount(){
        store.header = this.state.detail.name
    }
  addCoffe(){
      if (store.shop.name === store.detail.name || store.shop.name === "") {
        let current = store.current
        let coffe = {
            drink: this.state.drink,
            option: this.state.option,
            quantity: 1
        }
        if (current.length > 0) { 
        if (current.findIndex((item) => item.drink === coffe.drink && item.option === coffe.option) === -1) {
            current.push(coffe)
        } else {
            let index = current.findIndex((item) => item.drink === coffe.drink && item.option === coffe.option)
            current[index].quantity += 1
            }
        }
         else {
            current.push(coffe)
        }
        store.current = current
        store.shop = store.detail
        }
    }

  render() {
    return (
        <List>
            <ListItem style={styles.top}>
                <Left>
                <Text style={styles.text}>
                {this.state.detail.name + '\n'} 
                <Text note>{this.state.detail.location}</Text>
                </Text>
                </Left>
                <Body>

                </Body>
                <Right>
                <Thumbnail bordered source={this.state.detail.image} />
                </Right>
            </ListItem>
            <ListItem >
            <Body >
            <Text style={styles.middleText}>Choose Drink</Text>
            </Body>
            </ListItem>
            <Tabs initialPage={0} onChangeTab={({ i, ref, from })=> this.setState({drink: i})}>
            <Tab heading="Espresso">
            </Tab>
            <Tab heading="Latte">
            </Tab>
            </Tabs>
            <ListItem >
            <Body >
            <Text style={styles.middleText}>Choose Option</Text>
            </Body>
            </ListItem>
            <Tabs initialPage={0} onChangeTab={({ i, ref, from })=> this.setState({option: i})}>
            <Tab heading="Small">
            </Tab>
            <Tab heading="Large">
            </Tab>
            </Tabs>
            <Button full danger onPress={this.addCoffe.bind(this)}>
                <Text>Add</Text>
            </Button>
        </List>
        
    );
  }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 15,
        justifyContent:"center",
        alignItems:'center',
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    top:{
        marginLeft: -6,
        backgroundColor: '#ffffcc'
    },
    middleText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: "center"
    }
  });
  
  