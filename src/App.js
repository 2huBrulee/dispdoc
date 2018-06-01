import React, { Component } from 'react';
import axios from 'axios';
import logo from './teacher.svg';
import './App.css';
import data from "./data.json";
import {ControlLabel,FormControl,FormGroup, Grid, Col } from 'react-bootstrap';
import InformacionAcademica from './InformationAcademic';
import InformacionPersonal from './InformationPersonal';
import PhotoPanel from './components/PhotoPanel';
import PreferencesPanel from "./components/PreferencesPanel";
import DisponibilidadPanel from './components/DisponibilidadPanel';
import PDFPanel from './components/PDFPanel';
import {Tab, Tabs} from 'react-bootstrap';

class App extends Component {
    constructor(...props){
        super(...props)
        this.state = {
            rows: data[0].rows,
            columns: data[0].columns,
            selection: [],
            enabled: data[0].enabled,
            values: data[0].programas,
            courseHistory: [],
            coursesSelection: data[0].seleccion,
            profesor: data[0].profesor,
            dhenabled: false,
            msenabled: false,
            ciclo_actual: 1,
        }

        for (let i=0;i<this.state.rows.length*this.state.columns.length;i++)
            this.state.selection.push(false)

        this.selectBox = this.selectBox.bind(this)
        this.selectAll = this.selectAll.bind(this)
        this.select = this.select.bind(this)
        this.sendDisp = this.sendDisp.bind(this)
        this.handleMS = this.handleMS.bind(this)
        this.getPDF = this.getPDF.bind(this)
        this.changeDHEditable = this.changeDHEditable.bind(this)
        this.expandDong = this.expandDong.bind(this)
        this.sendMS = this.sendMS.bind(this)
        this.changeMSEditable = this.changeMSEditable.bind(this)
    }

    expandDong = (prevState,newData) => {
        console.log(newData)
        let coursesS = newData.map((n,i)=> {
            var newP =Object.assign({},n);
            newP.cursos=[]
            return newP
        })
        return coursesS
    }

    componentDidMount(){
        axios.get('https://apidisponibilidad.herokuapp.com/docente/docente/1').then(res=>{
            this.setState(prevState => ({profesor:res.data}))
        }).then(
            axios.get('https://apidisponibilidad.herokuapp.com/curso/curso').then(resi =>{
                console.log(resi.data)
                axios.get('https://apidisponibilidad.herokuapp.com/curso/docente/1').then(res4 =>{
                    let selectedArray = res4.data.map(n=>n.id_curso)
                    this.setState(prevState => {
                        console.log(prevState.coursesSelection)
                        return {values: resi.data,
                            coursesSelection: this.expandDong(prevState,resi.data).map((n,pos)=>
                                Object.assign(n,{cursos:resi.data[pos].cursos.filter(curso=>selectedArray.includes(curso.id_curso))})
                            )}})
                })
                //this.setState(prevState => ({values: resi.data, coursesSelection:this.expandDong(prevState,resi.data)}));
            }).then(
                axios.get('https://apidisponibilidad.herokuapp.com/disponibilidad/api/1').then(res2 =>{
                    this.setState(prevState => ({
                        selection: JSON.parse(res2.data)
                    }));
                }).then(
                    axios.get('https://apidisponibilidad.herokuapp.com/docente/docente/1').then(res3 =>{
                        this.setState(prevState => ({
                            profesor: res3.data
                        }))})).then(
                            axios.get('https://apidisponibilidad.herokuapp.com/docente/docente/1').then(resina =>{
                                this.setState(prevState => ({
                                   courseHistory:resina.data
                                }))
                                })
                )
            ));
    }

    changeDHEditable = () => {
        if (this.state.dhenabled) {
            axios.get('https://apidisponibilidad.herokuapp.com/disponibilidad/api/1').then(res =>{
                this.setState(prevState => ({
                    selection: JSON.parse(res.data),
                    dhenabled: !prevState.dhenabled
                }));
            }).catch(rej => {
                console.log('EL BACK NO ESTA ACTIVADO')
                this.setState(prevState => ({
                    dhenabled: !prevState.dhenabled
            })
                )})
        }
        else
            this.setState(prevState => ({
                dhenabled: !prevState.dhenabled
        }))
    }

    changeMSEditable = () => {
        if (this.state.msenabled) {
            axios.get('https://apidisponibilidad.herokuapp.com/curso/docente/1').then(res4 =>{
                let selectedArray = res4.data.map(n=>n.id_curso)
                this.setState(prevState => {
                    console.log(prevState.coursesSelection)
                    return {msenabled:!prevState.msenabled,
                        coursesSelection: this.expandDong(prevState,prevState.values).map((n,pos)=>
                            Object.assign(n,{cursos:this.state.values[pos].cursos.filter(curso=>selectedArray.includes(curso.id_curso))})
                        )}})
            })
        }
        else
            this.setState(prevState => ({
                msenabled: !prevState.msenabled
        }))
    }


    select(n,isEnabled,isSelectAll){
        if (isSelectAll && this.state.dhenabled) this.selectAll(n)
        else if (isEnabled && this.state.dhenabled)  this.selectBox(n)

    }

    siguienteCiclo = () => {
        this.setState(prevState => ({
            ciclo_actual:prevState.ciclo_actual+1
        }))
    }

    anteriorCiclo = () => {
        this.setState(prevState => ({
            ciclo_actual:prevState.ciclo_actual-1
        }))
    }

    selectAll(n){
        this.setState(prevState => ({
                selection: prevState.selection.map((nu,iki) =>
                    ((iki>=n*14 && iki<(n+1)*14) && !!this.state.enabled[iki]) ? true : nu
                )
            }))
    }

    selectBox = n => {
        this.setState(prevState => ({
            selection: prevState.selection.map((nu,iki) =>
                (iki!==n) ? nu : !nu
            )
        }))
    }

    sendDisp = () => {
        axios.post('https://apidisponibilidad.herokuapp.com/disponibilidad/api/1',{selection:this.state.selection}).then(res =>
            this.setState(prevState => ({
                dhenabled: !prevState.dhenabled
            })
        ))

    }

    sendMS = () => {
        axios.post('https://apidisponibilidad.herokuapp.com/curso/docente/1',{coursesSelection:this.state.coursesSelection}).then(res =>
            this.setState(prevState => ({
                msenabled: !prevState.msenabled
            })
        ))

    }

    getPDF = () => {
        axios.get('https://apidisponibilidad.herokuapp.com/docente/pdf/1').then( response=>{
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${this.state.profesor.apell_pat}.pdf`);
            document.body.appendChild(link);
            link.click();
        })
    }

    handleMS = (selectedOption,programa) =>{
         console.log(selectedOption,programa)
        let selectedArray = selectedOption.split(',').map(n=>parseInt(n,10));
        this.setState(prevState => ({
            coursesSelection: prevState.coursesSelection.map((n,pos)=>{
                console.log(n.id_programa)
                return (n.id_programa!==programa) ? {...n} :
                    Object.assign(n,{cursos:prevState.values[pos].cursos.filter(curso=>selectedArray.includes(curso.id_curso))})}
            )}))
        console.log(this.state.coursesSelection)
    }

    render() {
        const { select, handleMS, getPDF,sendDisp,changeDHEditable,changeMSEditable,sendMS } = this;
        const { rows,columns,selection,enabled,values,coursesSelection, profesor, dhenabled, msenabled } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" />
                        <div>Disponibilidad del docente</div></h1>
                </header>
                <Grid>
                    <Col md={9}>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Informacion Personal">
                                <InformacionPersonal profesor={profesor}/>
                            </Tab>
                            <Tab eventKey={2} title="Informacion Academica">
                                <InformacionAcademica profesor={profesor}/>
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col md={3}>
                        <PhotoPanel/>
                    </Col>
                    <Col md={9}>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Ciclos</ControlLabel>
                            <FormControl componentClass="select" placeholder="seleccionar ciclo">
                                <option value="select">select</option>
                            </FormControl>
                        </FormGroup>
                        <DisponibilidadPanel rows={rows} columns={columns} selection={selection}
                                             enabled={enabled} onSelect={select} saveChanges={sendDisp}
                                             editable={dhenabled} changeEdit={changeDHEditable}/>

                        <PreferencesPanel notSelectedArray={values} selectedArray={coursesSelection} msedit={msenabled}
                                          changeSelection={handleMS} sendMS={sendMS} changeEdit={changeMSEditable} />
                        <PDFPanel getPDF={getPDF} />
                    </Col>
                </Grid>
            </div>

    );
  }
}

export default App;
