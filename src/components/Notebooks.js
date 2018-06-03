import React, { Component } from 'react';
import '../App.css';
import { LightLink } from 'react-light-router';

class Notebooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notebooks: []
    };
  }

  componentDidMount = async () => {
    const notebooks = await this.getNotebooks();
    this.setState({ notebooks: notebooks });
  };

  getNotebooks = async () => {
    const response = await fetch('http://localhost:5000/notebooks');
    const json = await response.json();
    return json;
  };

  notebookTable = () => (
    <table>
      <tbody>
        <this.notebookTableRows />
      </tbody>
    </table>
  );

  notebookTableRows = () => (
    this.state.notebooks.map(notebook => (
      <tr key={notebook.id}>
        <td>
          <LightLink
            path={`/notebooks/${notebook.id}`}
            style={{ cursor: 'pointer' }}
          >
            {notebook.title}
          </LightLink>
        </td>
      </tr>
    ))
  );

  render = () => (
    <this.notebookTable />
  );
}

export default Notebooks;
