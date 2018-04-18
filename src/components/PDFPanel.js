import React from 'react'
import PropTypes from 'prop-types'
import {Button, Panel} from 'react-bootstrap'

const PDFPanel = ({getPDF=f=>f,...props}) =>
    <Panel bsStyle="primary">
        <Panel.Body>
            <Button bsStyle="primary" onClick={getPDF}> Descargar PDF </Button>
        </Panel.Body>
    </Panel>

export default PDFPanel

PDFPanel.propTypes = {
  getPDF: PropTypes.func
}