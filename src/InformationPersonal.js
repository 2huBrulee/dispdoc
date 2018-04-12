import React from 'react'
import {Panel, form} from 'react-bootstrap'
import {Grid, Col, Row} from 'react-bootstrap'
import TextandInput from './FieldGroup'
import TextandRadio from './TxtandRadioGroup'

const InformacionPersonal = ({profesor})=>
    <div>
        <Panel>
            <Panel.Heading>Informacion Personal</Panel.Heading>

            <Panel.Body>
                    <Row className="show-grid">
                        <Col md={6}>
                            <TextandInput
                                nombreCampo="Nombres"
                                valorCampo={profesor.nom_docente}/>

                            <TextandInput
                                nombreCampo="Apellidos"
                                valorCampo={profesor.ape_docente}/>

                            <TextandRadio
                                nombreCampo="Sexo"
                                valorCampo={profesor.genero}/>

                            <TextandInput
                                nombreCampo="Correo"
                                valorCampo={profesor.email_docente}/>
                        </Col>

                        <Col md={6}>

                            <TextandInput
                                nombreCampo="Fecha Nacimiento"
                                valorCampo={profesor.fecha_nac}/>

                            <TextandInput
                                nombreCampo="Lugar de Nacimiento"
                                valorCampo={profesor.pais}/>

                            <TextandInput
                                nombreCampo="Direccion"
                                valorCampo={profesor.direccion}/>

                            <TextandInput
                                nombreCampo="Celular"
                                valorCampo={profesor.celular_docente}/>

                        </Col>
                    </Row>


            </Panel.Body>

        </Panel>

    </div>


export default InformacionPersonal