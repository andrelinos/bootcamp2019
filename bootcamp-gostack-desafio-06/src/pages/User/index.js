import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

// import Repo from '../Repo';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    page: 1,
    loadingStarred: false,
    refreshing: false,
    loading: false,
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    this.setState({ loading: true });

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }

  renderFooterLoading = () => {
    const { loadingStarred } = this.state;

    return loadingStarred ? <ActivityIndicator /> : null;
  };

  loadMore = async () => {
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    const { stars, page } = this.state;

    if (stars.length < 30 * page) return;

    this.setState({ loadingStarred: true });

    const newPage = page + 1;

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page: newPage },
    });

    this.setState({
      stars: [...stars, ...response.data],
      page: newPage,
      loadingStarred: false,
    });
  };

  refreshing = async () => {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    this.setState({ refreshing: true });

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page: 1 },
    });

    this.setState({
      stars: [...response.data],
      page: 1,
      refreshing: false,
    });
  };

  handleNavigate = repository => {
    const { navigation } = this.props;

    navigation.navigate('Repo', { repository });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator color="#0984e3" size="large" />
        ) : (
          <Stars
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.name}</Author>
                </Info>
              </Starred>
            )}
            LoadFooterComponent={this.renderFooterLoading}
            onRefresh={this.refreshList}
            refreshing={refreshing}
          />
        )}
      </Container>
    );
  }
}
