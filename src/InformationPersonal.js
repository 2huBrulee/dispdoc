import React from 'react'
import {Panel, form} from 'react-bootstrap'
import {Grid, Col, Row} from 'react-bootstrap'
import TextandInput from './FieldGroup'
import TextandRadio from './TxtandRadioGroup'

const InformacionPersonal = ({})=>
    <div>
        <Panel>
            <Panel.Heading>Informacion Personal</Panel.Heading>

            <Panel.Body>


                    <Row className="show-grid">
                        <Col md={6}>
                            <TextandInput
                                nombreCampo="Nombres"
                                valorCampo="Nombres de Prueba"/>

                            <TextandInput
                                nombreCampo="Apellidos"
                                valorCampo="Apellidos de Prueba"/>

                            <TextandRadio
                                nombreCampo="Sexo"
                                valorCampo="True"/>

                            <TextandInput
                                nombreCampo="Correo"
                                valorCampo="Correo de Prueba"/>
                        </Col>

                        <Col md={6}>

                            <TextandInput
                                nombreCampo="Fecha Nacimiento"
                                valorCampo="Fecha de Prueba"/>

                            <TextandInput
                                nombreCampo="Lugar de Nacimiento"
                                valorCampo="Lugar de Prueba"/>

                            <TextandInput
                                nombreCampo="Direccion"
                                valorCampo="Direccion de Prueba"/>

                            <TextandInput
                                nombreCampo="Celular"
                                valorCampo="Celular de Prueba"/>

                        </Col>
                    </Row>


            </Panel.Body>

        </Panel>

    </div>


export default InformacionPersonal