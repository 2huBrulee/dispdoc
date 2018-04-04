import React, { Component } from 'react';
import axios from 'axios';
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

    componentWillMount(){
        axios.get('http://stif.com/sel.json').then(res =>{
            const selection = res.data;
            this.setState({selection});
        })
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

    sendDisp(){
        axios.post('http://127.0.0.1:8000/disponibilidad/api',{teacher:"1",selection:this.state.selection}).then(function (response) {
            console.log('salvado')
        })
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
          <div>
              <button onClick={this.sendDisp}>
                  Guardar
              </button>
          </div>
      </div>
    );
  }
}

export default App;
