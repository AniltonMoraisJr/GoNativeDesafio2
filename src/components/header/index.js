import React, { Component } from 'react';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Header extends Component {
  render() {
    const { title, goBack, goBackMethod } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {goBack ? (
          <TouchableOpacity onPress={goBackMethod}>
            <Icon name="arrow-left" size={24} style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View />
        )}

        <Text style={styles.title}>{title}</Text>
        <View />
      </View>
    );
  }
}
