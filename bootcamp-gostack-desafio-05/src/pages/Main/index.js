import React, { Component } from 'react';
import {
  FaGithubAlt,
  FaPlus,
  FaSpinner,
  FaEdit,
  FaWindowClose,
} from 'react-icons/fa';
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

  handleEdit = (e, index) => {
    console.log('Edit', index);
  };

  handleDelete = (e, index) => {
    console.log('Delete', index);
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: 1 });

    const { newRepo, repositories } = this.state;

    // if empty field
    if (newRepo === '') throw new Error('Informe um repositório.');

    // Verify if has repo
    const hasRepo = repositories.find(r => r.name === newRepo);
    if (hasRepo) throw new Error('Repositório duplicado!');

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
          Repositórios
        </h1>

        <Form newRepoError={newRepoError} onSubmit={this.handleSubmit}>
          <>
            <input
              type="text"
              placeholder="Adicionar repositório"
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
          <span>Digite um repositório válido!</span>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <RepoOpt>
                <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                  Detalhes
                </Link>
                <FaEdit
                  className="edit"
                  onClick={e => this.handleEdit(e, repository.name)}
                />
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
