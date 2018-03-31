import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxGrid from './BoxGrid';

class App extends Component {

    constructor(...props){
        super(...props)
        this.state = {
            rows : [
                "8 - 9",
                "9 - 10",
                "10 - 11",
                "11 - 12"
            ],
            columns : [
                "lunes",
                "martes",
                "miercoles"
            ],
            selection: []
        }
        for (var i=0;i<this.state.rows.length*this.state.columns.length;i++)
            this.state.selection.push(false);
        this.selectBox = this.selectBox.bind(this)
    }

    selectBox(n){
        this.setState(prevState => ({
            selection: prevState.selection.map((nu,iki) =>
                (iki!==n) ? nu : !nu
            )
        }))
    }


  render() {
        const { selectBox } = this
      const { rows,columns,selection } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
          <div>
              <BoxGrid rows={rows} columns={columns} selection={selection} onSelect={selectBox}/>
          </div>
      </div>
    );
  }
}

export default App;
