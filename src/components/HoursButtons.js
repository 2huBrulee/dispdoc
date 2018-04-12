import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'

const HoursButtons = ({saveChanges=f=>f, editing=false,...props}) =>
    <div>
        <Button bsStyle="primary">{editing?'Cancelar':'Editar'}</Button>
        <Button bsStyle="primary" onClick={saveChanges}>Guardar</Button>
    </div>

export default HoursButtons

HoursButtons.propTypes = {
  editing: PropTypes.bool,
  saveChanges: PropTypes.func
}