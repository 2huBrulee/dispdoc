import React from 'react'
import {form, FormGroup, ControlLabel} from 'react-bootstrap'
import {Radio, Col} from 'react-bootstrap'
import './Group.css';

const TextandRadio = ({nombreCampo, valorCampo}) =>
    <div className="separated">
        <form>
            <FormGroup>

                <Col md={6}>
                    <ControlLabel>{nombreCampo}</ControlLabel>
                </Col>

                <Col md={6}>
                    <Radio name="radioGroup" inline>
                        Masculino
                    </Radio>{' '}
                    <Radio name="radioGroup" inline>
                        Femenino
                    </Radio>{' '}
                </Col>

            </FormGroup>
        </form>
    </div>

export default TextandRadio