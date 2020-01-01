import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Rotate,
  Owner,
  IssuesList,
  StateIssues,
  Page,
  PageTitle,
} from './styles';

export default class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repository: {},
      issues: [],
      state: 'open',
      page: 1,
      loading: 1,
    };
  }

  async componentDidMount() {
    const { match } = this.props;

    const { state, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    // Execute all promisses in the same time
    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state,
          page,
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: 0,
    });
  }

  handleInputChange = async e => {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const state = e.target.value;

    const { page } = this.state;

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state,
        page,
        per_page: 5,
        loading: 1,
      },
    });
    this.setState({
      page: 1, // return for first page when changed issue state
      state,
      issues: response.data,
      loading: 0,
    });
  };

  // Create pagination issues
  handlePage = async e => {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const pageTransition = e.target.value;
    const { state } = this.state;

    let { page } = this.state;

    if (pageTransition === 'next') {
      page += 1;
    } else {
      page -= 1;
    }

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state,
        page,
        per_page: 5,
      },
    });

    this.setState({
      state,
      page,
      issues: response.data,
    });
  };

  render() {
    const { repository, issues, loading, page } = this.state;

    if (loading) {
      return (
        <Loading>
          <Rotate>
            <FaSpinner color="#fff" size={60} />
          </Rotate>
        </Loading>
      );
    }
    console.log(issues.length);

    return (
      <Container>
        <Owner>
          <Link to="/">Back to repository list</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <StateIssues>
          <div>Issue State</div>
          <select onChange={this.handleInputChange}>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="all">All</option>
          </select>
        </StateIssues>
        <IssuesList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssuesList>
        <Page>
          {(page !== 1 || issues.length < 5) && (
            <button
              className="button-p"
              type="button"
              onClick={this.handlePage}
              value="last"
              disabled={page < 2}
            >
              Previous Page
            </button>
          )}
          <PageTitle>{page}</PageTitle>

          {issues.length >= 5 && (
            <button
              className="button-n"
              type="button"
              onClick={this.handlePage}
              value="next"
              //  disabled={page > issues.length}
            >
              Next Page
            </button>
          )}
        </Page>
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};
