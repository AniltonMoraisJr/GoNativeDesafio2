import React from 'react';

import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repository, goToIssue }) => {
  const {
    owner: { avatar_url, login },
  } = repository;
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: avatar_url }} />
      <View style={styles.info}>
        <Text style={styles.title}>{repository.name}</Text>
        <Text style={styles.subTitle}>{login}</Text>
      </View>
      <TouchableOpacity onPress={() => goToIssue(`${login}/${repository.name}`)}>
        <Icon name="arrow-right" size={24} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default RepositoryItem;
