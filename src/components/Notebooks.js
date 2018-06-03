import React, { Component } from 'react';
import '../App.css';

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
      <this.notebookTableRows />
    </table>
  );

  notebookTableRows = () => (
    this.state.notebooks.map(notebook => (
      <tr>
        <td>{notebook.title}</td>
      </tr>
    ))
  );

  render = () => (
    <this.notebookTable />
  );
}

export default Notebooks;
