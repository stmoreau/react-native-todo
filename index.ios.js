import React, { Component } from 'react';
import Todo from './src/app/Todo';
import {
  AppRegistry
} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <Todo />
    );
  }
}

AppRegistry.registerComponent('Todo', () => Main);
