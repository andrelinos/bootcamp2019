import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List, RepoOpt } from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRepo: '',
      loading: 0, // 0=False | 1=True
      repositories: [],
      newRepoError: false,
    };
  }

  // Carregar os dados do local Storage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados no local Storage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleDelete = (e, index) => {
    console.log('Delete', index);
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: 1 });

    const { newRepo, repositories } = this.state;

    // if empty field
    if (newRepo === '')
      throw new Error('Type a repo name to add for repository list.');

    // Verify if has repo
    const hasRepo = repositories.find(r => r.name === newRepo);
    if (hasRepo) throw new Error('Duplicate repository!');

    try {
      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      if (data === newRepo) return;

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: 0,
        newRepoError: false,
      });
    } catch (err) {
      this.setState({
        newRepo: '',
        loading: 0,
        newRepoError: true,
      });
    }
  };

  render() {
    const { newRepo, repositories, loading, newRepoError } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositories
        </h1>

        <Form newRepoError={newRepoError} onSubmit={this.handleSubmit}>
          <>
            <input
              type="text"
              placeholder="Type a repository name to add..."
              value={newRepo}
              onChange={this.handleInputChange}
            />

            <SubmitButton loading={loading}>
              {loading ? (
                <FaSpinner color="#fff" size={14} />
              ) : (
                <FaPlus color="#fff" size={14} />
              )}
            </SubmitButton>
          </>
          <span>Type a valid repository!</span>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <RepoOpt>
                <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                  Details
                </Link>
                <FaWindowClose
                  className="delete"
                  onClick={e => this.handleDelete(e, repository.name)}
                />
              </RepoOpt>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
