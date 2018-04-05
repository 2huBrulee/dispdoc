import React, { Component } from 'react';
import axios from 'axios';
import logo from './teacher.svg';
import './App.css';
import data from "./data.json";
import { Button } from 'react-bootstrap';
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
        this.sendDisp = this.sendDisp.bind(this)
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
        const data = {
            teacher: "3",
                selection:this.state.selection,
        };
        axios.post('http://127.0.0.1:8000/disponibilidad/api',data).then(function (response) {
            console.log('salvado en la base de datos')
        })
    }


  render() {
        const { select } = this
      const { rows,columns,selection,enabled } = this.state
    return (

      <div className="App">
        <header className="App-header">
            <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" />
                <div>Disponibilidad del docente</div></h1>
        </header>
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#home">React-Bootstrap</a>
                  </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                  <NavItem eventKey={1} href="#">
                      Link
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                      Link
                  </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}>Action</MenuItem>
                      <MenuItem eventKey={3.2}>Another action</MenuItem>
                      <MenuItem eventKey={3.3}>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
              </Nav>
          </Navbar>;
          <div>
              <h1 className="App-sub-title">Disponibilidad de horario</h1>
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
