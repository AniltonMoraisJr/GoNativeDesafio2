import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, ActivityIndicator, Text, FlatList, Linking,
} from 'react-native';
import api from '../../services/api';

import styles from './styles';

import Header from '../../components/header';
import IssuesItem from './issuesItem';

export default class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    repoName: '',
    issues: [],
    loading: false,
    error: '',
    refreshing: false,
    pressStatus: 'todas',
  };

  componentDidMount() {
    const { navigation } = this.props;

    if (navigation.getParam('repoName')) {
      this.setState({
        repoName: navigation.getParam('repoName'),
      });

      this.loadIssues();
    }
  }

  loadIssues = async (issueType = 'todas') => {
    this.setState({
      loading: true,
      pressStatus: issueType,
      refreshing: true,
    });
    try {
      const repoName = this.props.navigation.getParam('repoName');
      const { data } = await api.get(`/repos/${repoName}/issues`);
      switch (issueType) {
        case 'fechados':
          this.setState({
            issues: data.filter(issue => issue.state === 'closed'),
          });
          break;
        case 'ativos':
          this.setState({
            issues: data.filter(issue => issue.state === 'open'),
          });
          break;
        default:
          this.setState({
            issues: data,
          });
          break;
      }
    } catch (error) {
      console.tron.error(error);
    } finally {
      this.setState({
        loading: false,
        refreshing: false,
      });
    }
  };

  handleUrl = (url) => {
    Linking.openURL(url);
  };

  renderList = () => (
    <FlatList
      data={this.state.issues}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <IssuesItem issue={item} goToUrl={this.handleUrl} />}
    />
  );

  render() {
    const { loading, repoName, pressStatus } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          title={repoName}
          goBack
          goBackMethod={() => {
            navigation.navigate('Repositories');
          }}
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.loadIssues('todas')}>
            <Text style={pressStatus === 'todas' ? styles.buttonPress : styles.button}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.loadIssues('ativos')}>
            <Text style={pressStatus === 'ativos' ? styles.buttonPress : styles.button}>
              Abertos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.loadIssues('fechados')}>
            <Text style={pressStatus === 'fechados' ? styles.buttonPress : styles.button}>
              Fechados
            </Text>
          </TouchableOpacity>
        </View>
        {loading ? <ActivityIndicator /> : this.renderList()}
      </View>
    );
  }
}
