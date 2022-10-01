import React, { Component } from 'react'
import './AddTask.css'


class AddTask extends Component {
    state = {
        text: '',
        checked: false,
    } 
    render() { 
        return (
            <div className="form">
                <input type="text" placeholder="dodaj zadanie" value={this.state.text}/>
                <input type="checkbox" checked={this.state.checked} id="important"/>
                <label htmlFor="important">Priorytet</label>
                <br />
                <label htmlFor="date">Do kiedy zrobić</label>
                <input type="date" value="2022-10-01" min="2021-12-30" max="2023-01-01"/>
                <br/>
                <button>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;