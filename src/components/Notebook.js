import React, { Component } from 'react';
import '../App.css';
import { LightLink } from 'react-light-router';

class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notebook: {
        title: ''
      }
    };
  }

  componentDidMount = async () => {
    const notebook = await this.getNotebook();
    this.setState({ notebook: notebook });
  };

  getNotebook = async () => {
    const response = await fetch(
      `http://localhost:5000/notebooks/${this.props.notebook}`
    );
    if (response.status !== 200) return { title: '' };
    const json = await response.json();
    return json;
  };

  notebookTable = () => (
    <table>
      <tbody>
        <tr>
          <td>{this.state.notebook.title}</td>
        </tr>
      </tbody>
    </table>
  );

  render = () => (
    <div>
      <this.notebookTable />

      <LightLink
        path='/notebooks'
        style={{ paddingTop: '5px' }}
      >
        <button>Go back</button>
      </LightLink>
    </div>
  );
}

export default Notebook;
