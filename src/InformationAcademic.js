import React from 'react'
import {Panel, form} from 'react-bootstrap'
import {Grid, Col, Row} from 'react-bootstrap'
import TextandInput from './FieldGroup'

const InformacionAcademica = ({profesor})=>
    <div>
        <Panel>
            <Panel.Heading>Informacion Academica</Panel.Heading>

            <Panel.Body>


                    <Row className="show-grid">
                    <Col md={6}>
                        <TextandInput
                            nombreCampo="Codigo"
                            valorCampo="Codigo de Prueba"/>

                        <label>GRADOS</label>

                        <TextandInput
                            nombreCampo="Titulo Profesional"
                            valorCampo="Titulo de Prueba"/>

                        <TextandInput
                            nombreCampo="Licenciatura"
                            valorCampo="Licenciatura de Prueba"/>
                    </Col>

                    <Col md={6}>
                        <label>POSGRADOS</label>

                        <TextandInput
                            nombreCampo="Maestria"
                            valorCampo="Maestria de Prueba"/>

                        <TextandInput
                            nombreCampo="Especialidad"
                            valorCampo="Especialidad de Prueba"/>

                        <TextandInput
                            nombreCampo="Doctorado"
                            valorCampo="Doctorado de Prueba"/>
                    </Col>
                    </Row>


            </Panel.Body>

        </Panel>

    </div>


export default InformacionAcademica