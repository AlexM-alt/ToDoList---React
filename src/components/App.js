import React, { Component } from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css';

class App extends Component {

  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        text: 'zagrać wreszcie w Wiedźmina 3',
        date: '2023-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      { id: 1, text: "zrobić dobry uczynej", date: '2023-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "pomalować dom po sylwestrze", date: '2023-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: "schudnąć 30 kilogramów", date: '2023-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2023-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: "jeszcze raz pomalować dom", date: '2023-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: "fryzjer!!!", date: '2023-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: "nie odbierać poleconego od komornika", date: '2023-11-12', important: false, active: true, finishDate: null },
      { id: 8, text: "kupić 2 butelki litrowe", date: '2023-09-11', important: false, active: false, finishDate: null },
    ]
  }

  deleteTask = (id) => {
    console.log("delete elementu id:" + id)
    // const tasks = [...this.state.tasks]
    // const index = tasks.findIndex(task => task.id === id)
    // tasks.splice(index, 1)

    // this.setState({
    //   tasks
    // })


    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
    
  }

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu id: " + id)
    const tasks = Array.from(this.state.tasks)
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({ 
      tasks 
    })
  }

  addTask = (text, date, important) => {
    //console.log("dodany obiekt")
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter)

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }

  render(){
    return (
      <div className="App">

        <h1>ToDoApp</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }

}

export default App;
