import React, { Component } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';

import styles from './styles';

import Header from '../../components/header';
import RepositoryItem from './repositoryItem';

export default class Repositories extends Component {
  state = {
    newRepository: '',
    repos: [],
    loading: true,
    error: '',
  };

  componentDidMount() {
    // AsyncStorage.clear();
    this.loadRepos();
  }

  loadRepos = async () => {
    this.setState({ refreshing: true });
    if (await AsyncStorage.getItem('@Desafio2:repos')) {
      this.setState({
        repos: JSON.parse(await AsyncStorage.getItem('@Desafio2:repos')),
      });
    }
    this.setState({ loading: false, refreshing: false });
  };

  addRepo = async () => {
    this.setState({ loading: true });
    try {
      const { data } = await api.get(`/repos/${this.state.newRepository}`);

      this.setState({ repos: [...this.state.repos, data], error: '', loading: false }, () => {
        AsyncStorage.setItem('@Desafio2:repos', JSON.stringify(this.state.repos));
      });
    } catch (err) {
      this.setState({ error: 'Repositório inexistente', loading: false });
    }
  };

  renderList = () => {
    const { repos, refreshing } = this.state;
    // console.tron.log(repos);
    return (
      <FlatList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <RepositoryItem repository={item} goToIssue={this.goToIssues} />}
        onRefresh={this.loadRepos}
        refreshing={refreshing}
      />
    );
  };

  goToIssues = (repo) => {
    this.props.navigation.navigate('Issues', {
      repoName: repo,
    });
  };

  render() {
    const { error, loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="GitIssues" />
        <View style={styles.header}>
          <TextInput
            autoCorrect={false}
            autoFocus
            autoCapitalize="none"
            placeholder="Adicionar novo repositório"
            style={styles.input}
            value={this.state.newRepository}
            onChangeText={text => this.setState({ newRepository: text })}
          />
          <TouchableOpacity onPress={this.addRepo}>
            <Icon name="plus" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
        {!!error && <Text style={styles.error}>{error}</Text>}
        {loading ? <ActivityIndicator /> : this.renderList()}
      </View>
    );
  }
}
