import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'react-bootstrap'

const HoursButtons = ({saveChanges=f=>f, editing=false, changeEdit=f=>f, ...props}) =>
    <div>
        <Button bsStyle="primary" onClick={changeEdit}>{editing?'Cancelar':'Editar'}</Button>
        <Button bsStyle="primary" disabled={!editing} onClick={saveChanges}>Guardar</Button>
    </div>

export default HoursButtons

HoursButtons.propTypes = {
  editing: PropTypes.bool,
  saveChanges: PropTypes.func
}