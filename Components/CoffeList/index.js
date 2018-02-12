import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, TouchableHighlight } from 'react-native';
import coffee from '../../images/coffee.jpg';
import list from './list';
import { Link } from 'react-router-native'
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import store from '../Store';
import openMap from 'react-native-open-maps';

export default class CardImageExample extends Component {
 
    _onPress(object) {
        openMap({ latitude: object.lat, longitude: object.lng });
      }
  render() {
    return (
        <View>
            {
                list.map(
                    (object,index) => {
                        return (
                            <Link key={object.name + "-" + index} onPress={() => this._onPress(object)}>
                            <ImageBackground  source={object.background} style={{height: 180, width: null, flex: 1}}>
                            <Card style={{ backgroundColor: "transparent", borderTopWidth: 0,borderRightWidth: 0,borderLeftWidth: 0,borderBottomWidth: 0 }}>
                            <CardItem style={{ backgroundColor: "transparent" }}>
                              <Left>
                                <Thumbnail bordered source={object.image} />
                                <Body>
                                  <Text style={styles.text}>{object.name}</Text>
                                  <Text note style={styles.text}>{object.distance}</Text>
                                </Body>
                                </Left>
                            </CardItem>
                          </Card>
                          <View style={styles.divider}></View>
                          </ImageBackground>
                          </Link>

                        )
                    }
                )
            }
          </View>
    );
  }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 15,
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
  });
  
  