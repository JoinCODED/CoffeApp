import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight, ListView } from 'react-native';
import { Link } from 'react-router-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem, Tab, Tabs } from 'native-base';
import store from '../Store';
import {observer} from 'mobx-react'
export default class CoffeDetail extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(props.current),
          current: store.current
        };
      }

      renderItem(item,index){
          return (
              <ListItem key={index}>
                    <Left>
                        <Text>
                        {item.drink === 0 ? 'Espresso' : 'Latte'}
                        {'\n'}
                        {item.option === 0 ? 'Small' : 'Large'}
                    </Text>
                    </Left>
                    <Body>
                        <Text>{item.quantity}</Text>
                    </Body>

             </ListItem>
          )
      }
  render() {
    return (
            <List>
                <ListItem  style={styles.top}>
                    <Left>
                    <Text style={styles.text}>
                    {store.shop.name + '\n'} 
                    <Text note>{store.shop.location}</Text>
                    </Text>
                    </Left>
                    <Body>
  
                    </Body>
                    <Right>
                    <Thumbnail bordered source={store.shop.image} />
                    </Right>
                </ListItem>
            {store.current.map(
                (item, index) => this.renderItem(item,index)
            )}
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
  
  