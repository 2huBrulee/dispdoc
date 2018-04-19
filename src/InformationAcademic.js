import React from 'react'
import {Panel, form} from 'react-bootstrap'
import {Grid, Col, Row} from 'react-bootstrap'
import TextandInput from './FieldGroup'

const InformacionAcademica = ({profesor})=>
    <div>
        <Panel bsStyle="primary">
            <Panel.Heading>Informacion Academica</Panel.Heading>

            <Panel.Body>

                    <Row className="show-grid">
                    <Col md={6}>
                        <TextandInput
                            nombreCampo="Codigo"
                            valorCampo={profesor.codigo}/>

                        <label>GRADOS</label>

                        <TextandInput
                            nombreCampo="Titulo Profesional"
                            valorCampo={profesor.Titulo}/>

                        <TextandInput
                            nombreCampo="Licenciatura"
                            valorCampo={profesor.Licenciatura}/>
                    </Col>

                    <Col md={6}>
                        <label>POSGRADOS</label>

                        <TextandInput
                            nombreCampo="Maestria"
                            valorCampo={profesor.Maestria}/>

                        <TextandInput
                            nombreCampo="Especialidad"
                            valorCampo={profesor.Especialidad}/>

                        <TextandInput
                            nombreCampo="Doctorado"
                            valorCampo={profesor.Doctorado}/>
                    </Col>
                    </Row>


            </Panel.Body>

        </Panel>

    </div>


export default InformacionAcademica