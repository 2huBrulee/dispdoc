import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data.json";
import BoxGrid from './BoxGrid';

class App extends Component {

    constructor(...props){
        super(...props)
        this.state = {
            rows : data[0].rows,
            columns : data[0].columns,
            selection: [],
            enabled: data[0].enabled
        }
        for (var i=0;i<this.state.rows.length*this.state.columns.length;i++)
            this.state.selection.push(false);
        this.selectBox = this.selectBox.bind(this)
        this.selectAll = this.selectAll.bind(this)
        this.select = this.select.bind(this)
    }

    select(n,isEnabled,isSelectAll){
        if (isEnabled)  this.selectBox(n)
        if (isSelectAll) this.selectAll(n)
    }

    selectAll(n){
        this.setState(prevState => ({
                selection: prevState.selection.map((nu,iki) =>
                    ((iki>=n*14 && iki<(n+1)*14) && !!this.state.enabled[iki]) ? true : nu
                )
            }))
    }

    selectBox(n){
        this.setState(prevState => ({
            selection: prevState.selection.map((nu,iki) =>
                (iki!==n) ? nu : !nu
            )
        }))
    }


  render() {
        const { select } = this
      const { rows,columns,selection,enabled } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
          <div>
              <BoxGrid rows={rows} columns={columns} selection={selection} enabled={enabled} onSelect={select}/>
          </div>
      </div>
    );
  }
}

export default App;
