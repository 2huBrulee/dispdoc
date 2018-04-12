import React, { Component } from 'react';
import axios from 'axios';
import logo from './teacher.svg';
import './App.css';
import data from "./data.json";
import { Button } from 'react-bootstrap';
import InformacionAcademica from './InformationAcademic';
import InformacionPersonal from './InformationPersonal';
import PhotoPanel from './PhotoPanel';
import PreferencesPanel from "./PreferencesPanel";
import { Grid, Col} from 'react-bootstrap'
import DisponibilidadHoraria from "./components/DisponibilidadHoraria";

class App extends Component {

    constructor(...props){
        super(...props)
        this.state = {
            rows : data[0].rows,
            columns : data[0].columns,
            selection: [],
            enabled: data[0].enabled,
            values: data[0].programas,
            coursesSelection: data[0].seleccion
        }
        for (var i=0;i<this.state.rows.length*this.state.columns.length;i++)
            this.state.selection.push(false);
        this.selectBox = this.selectBox.bind(this)
        this.selectAll = this.selectAll.bind(this)
        this.select = this.select.bind(this)
        this.sendDisp = this.sendDisp.bind(this)
        this.handleMS = this.handleMS.bind(this)
        this.getPDF = this.getPDF.bind(this)
    }

    componentWillMount(){
        axios.get('http://127.0.0.1:8000/disponibilidad/api/1').then(res =>{
            this.setState(prevState => ({
                selection: JSON.parse(res.data)
            }));
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
            axios.post('http://127.0.0.1:8000/disponibilidad/api/1',{selection:this.state.selection}).then(function (response) {
            })
    }

    getPDF = () => {
        axios.get('http://127.0.0.1:8000/docente/pdf/1').then( response=>{
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.pdf');
            document.body.appendChild(link);
            link.click();
        })
    }

    handleMS = (selectedOption,programa) =>{
        let selectedArray = selectedOption.split(',').map(n=>parseInt(n,10));
        this.setState(prevState => ({
            coursesSelection: prevState.coursesSelection.map((n,pos)=>
                (n.id_programa!==programa) ? {...n} :
                    Object.assign(n,{cursos:prevState.values[pos].cursos.filter(curso=>selectedArray.includes(curso.id_curso))})
            )}))
    }

  render() {
        const { select, handleMS, getPDF} = this;
        const { rows,columns,selection,enabled } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" />
                        <div>Disponibilidad del docente</div></h1>
                </header>
                <Grid>
                    <Col md={9}>
                        <InformacionPersonal/>
                        <InformacionAcademica/>
                    </Col>
                    <Col md={3}>
                        <PhotoPanel/>
                    </Col>
                    <Col md={9}>
                        <DisponibilidadHoraria rows={rows} columns={columns} selection={selection} enabled={enabled} onSelect={select}/>
                        <div>
                            <button onClick={this.sendDisp}>Guardar</button>
                        </div>
                    </Col>
                </Grid>
                <div>
                    <PreferencesPanel notSelectedArray={this.state.values} selectedArray={this.state.coursesSelection} changeSelection={handleMS}/>
                </div>
                <Button bsStyle="primary" onClick={getPDF}> Descargar PDF </Button>
            </div>
    );
  }
}

export default App;
