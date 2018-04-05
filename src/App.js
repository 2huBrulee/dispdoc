import React, { Component } from 'react';
import axios from 'axios';
import logo from './teacher.svg';
import './App.css';
import data from "./data.json";
import BoxGrid from './BoxGrid';
import { ButtonToolbar, Button} from 'react-bootstrap';
import InformacionAcademica from './InformationAcademic';
import InformacionPersonal from './InformationPersonal';
import PhotoPanel from './PhotoPanel';
import { Grid, Col} from 'react-bootstrap'

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

        const { select } = this;
        const { rows,columns,selection,enabled } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" />
                        <div>Disponibilidad del docente</div></h1>
                </header>

                <Grid>
                    <Col md={9}>
                         <InformacionPersonal>
                        </InformacionPersonal>

                         <InformacionAcademica>
                         </InformacionAcademica>

                         <div>
                            <h1 className="App-sub-title">Disponibilidad de horario</h1>
                            <BoxGrid rows={rows} columns={columns} selection={selection} enabled={enabled} onSelect={select}/>
                        </div>
                        <div>
                            <button onClick={this.sendDisp}>Guardar</button>
                        </div>
                    </Col>
                    <Col md={3}>
                        <PhotoPanel/>
                    </Col>
                </Grid>
            </div>

    );
  }
}

export default App;
