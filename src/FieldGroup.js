import React from 'react'
import {form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {Grid, Col, Row} from 'react-bootstrap'
import './Group.css';

const TextandInput = ({nombreCampo, valorCampo}) =>
    <div className="separated">
        <form>
            <FormGroup controlId="formBasicText">
                        <Col md={4}>
                            <ControlLabel>{nombreCampo}</ControlLabel>
                        </Col>

                        <Col md={8}>
                            <FormControl className="color-fondo"
                                type="text"
                                //value={valorCampo}
                                value = {(valorCampo != null)? valorCampo : "No disponible"}
                                disabled="true"
                            />
                        </Col>

            </FormGroup>
        </form>
    </div>

export default TextandInput