import React, { Component } from 'react';
import '../App.css';
import { LightLink } from 'react-light-router';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        subject: '',
        content: ''
      }
    };
  }

  componentDidMount = async () => {
    const note = await this.getNote();
    this.setState({ note: note });
  };

  getNote = async () => {
    const response = await fetch(
      `http://localhost:5000/notebooks/${this.props.notebook}/notes/${this.props.note}`
    );
    if (response.status !== 200) return { subject: '', content: '' };
    const json = await response.json();
    return json;
  };

  noteTable = () => (
    <table>
      <tbody>
        <tr>
          <td>{this.state.note.subject}</td>
        </tr>
        <tr>
          <td>{this.state.note.content}</td>
        </tr>
      </tbody>
    </table>
  );

  render = () => (
    <div>
      <this.noteTable />

      <LightLink
        path={`/notebooks/${this.props.notebook}/notes`}
        style={{ paddingTop: '5px' }}
      >
        <button>Go back</button>
      </LightLink>
    </div>
  );
}

export default Note;
