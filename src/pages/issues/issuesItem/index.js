import React from 'react';

import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssuesItem = ({ issue, goToUrl }) => {
  const {
    user: { avatar_url, login },
  } = issue;
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: avatar_url }} />
      <View style={styles.info}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {issue.title}
        </Text>
        <Text style={styles.subTitle}>{login}</Text>
      </View>
      <TouchableOpacity onPress={() => goToUrl(issue.html_url)}>
        <Icon name="arrow-right" size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default IssuesItem;
