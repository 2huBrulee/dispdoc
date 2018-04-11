import React from 'react'
import {form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {Grid, Col, Row} from 'react-bootstrap'
import './Group.css';

const TextandInput = ({nombreCampo, valorCampo}) =>
    <div className="separated">
        <form>
            <FormGroup controlId="formBasicText">

                        <Col md={6}>
                            <ControlLabel>{nombreCampo}</ControlLabel>
                        </Col>

                        <Col md={6}>
                            <FormControl
                                type="text"
                                value={valorCampo}
                            />
                        </Col>

            </FormGroup>
        </form>
    </div>

export default TextandInput