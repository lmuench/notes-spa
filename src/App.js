import React, { Component } from 'react';
import './App.css';
import { LightLink, LightRouter } from 'react-light-router';
import Notebooks from './components/Notebooks';
import Notebook from './components/Notebook';
import Notes from './components/Notes';
import Note from './components/Note';

const routes = [{
  path: '/notebooks',
  component: Notebooks
}, {
  path: '/notebooks/:notebook',
  component: Notebook,
  propsFromPath: [{
    prop: 'notebook',
    segment: ':notebook'
  }]
}, {
  path: '/notebooks/:notebook/notes',
  component: Notes
}, {
  path: '/notebooks/:notebook/notes/:note',
  component: Note,
  propsFromPath: [{
    prop: 'notebook',
    segment: ':notebook'
  }, {
    prop: 'note',
    segment: ':note'
  }]
}];

const defaultRoute = {
  component: () => <div>Not found!</div>
};

const App = () => (
  <div>
    <LightRouter routes={routes} defaultRoute={defaultRoute} />
  </div>
);


export default App;
