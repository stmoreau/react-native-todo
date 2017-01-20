import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {styles} from './styles'

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  handleChange(text){
    this.setState({newTodo: text})
  }
  handlePress(e){
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput  style={styles.input} onChangeText={this.handleChange.bind(this)} value={this.state.newTodo} />
          <TouchableOpacity style={styles.button} onPress={this.handlePress.bind(this)}>
            <Text style={styles.buttonText}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
            {this.state.todos.map((todo, i) => (
              <View style={styles.todo} key={i}>
                <Text style={styles.todoText}>{todo}</Text>
              </View>
            ))}
        </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('Todo', () => Todo);
