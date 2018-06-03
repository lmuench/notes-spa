import React, { Component } from 'react';
import '../App.css';
import { LightLink } from 'react-light-router';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount = async () => {
    const notes = await this.getNotes();
    this.setState({ notes: notes });
  };

  getNotes = async () => {
    const response = await fetch(
      `http://localhost:5000/notebooks/${this.props.notebook}/notes`
    );
    if (response.status !== 200) return []; 
    const json = await response.json();
    return json;
  };

  noteTable = () => (
    <table>
      <tbody>
        <this.noteTableRows />
      </tbody>
    </table>
  );

  noteTableRows = () => (
    this.state.notes.map(note => (
      <tr key={note.id}>
        <td>
          <LightLink
            path={`/notebooks/${this.props.notebook}/notes/${note.id}`}
            style={{ cursor: 'pointer' }}
          >
            {note.subject}
          </LightLink>
        </td>
      </tr>
    ))
  );

  render = () => (
    <div>
      <this.noteTable />

      <LightLink
        path='/notebooks'
        style={{ paddingTop: '5px' }}
      >
        <button>Go back</button>
      </LightLink>
    </div>
  );
}

export default Notes;
