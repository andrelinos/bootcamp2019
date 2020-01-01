import React, { Component } from 'react';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      value: 'America/Chicago',
      isLoaded: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { value } = this.state;

    this.fetchData(value);
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      value,
    });

    this.fetchData(value);
  }

  render() {
    const { isLoaded, value, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <select onChange={this.handleChange} value={value}>
          <option value="America/Chicago">Chicago</option>
          <option value="America/Sao_Paulo">São Paulo</option>
        </select>
        {JSON.stringify(items)}
      </div>
    );
  }

  fetchData(value) {
    fetch(
      `https://api.timezonedb.com/v2.1/get-time-zone?key=J9X3EOT2EM8U&format=json&by=zone&zone=${value}`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }
}

export default Data;
