import React, { Component } from 'react';
import './App.css';
import { LightLink, LightRouter } from 'react-light-router';
import Notebooks from './components/Notebooks';
import Notebook from './components/Notebook';
import Notes from './components/Notes';
import Note from './components/Note';

const routes = [{
  path: '/notebooks',
  component: Notebooks,
  effects: [() => console.log('/notebooks')]
}, {
  path: '/notebooks/:notebook',
  component: Notebook,
  effects: [() => console.log('/notebooks/:notebook')],
  propsFromPath: [{
    prop: 'notebook',
    segment: ':notebook'
  }]
}, {
  path: '/notebooks/:notebook/notes',
  component: Notes,
  effects: [() => console.log('/notebooks/:notebook/notes')],
  propsFromPath: [{
    prop: 'notebook',
    segment: ':notebook'
  }]
}, {
  path: '/notebooks/:notebook/notes/:note',
  component: Note,
  effects: [() => console.log('/notebooks/:notebook/notes/:note')],
  propsFromPath: [{
    prop: 'notebook',
    segment: ':notebook'
  }, {
    prop: 'note',
    segment: ':note'
  }]
}];

const defaultRoute = {
  component: Notebooks,
  effects: [() => console.log('default route')]
};

const App = () => (
  <div>
    <LightRouter routes={routes} defaultRoute={defaultRoute} />
  </div>
);


export default App;
