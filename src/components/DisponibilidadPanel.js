import React from 'react'
import PropTypes from 'prop-types'
import {Panel} from 'react-bootstrap'
import DisponibilidadHoraria from './DisponibilidadHoraria'

const DisponibilidadPanel = ({rows=[],columns=[],selection=[],enabled=[],onSelect= f=>f,editable=false,changeEdit=f=>f,...props}) =>
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Disponibilidad Horaria</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <DisponibilidadHoraria rows={rows} columns={columns} selection={selection} enabled={enabled}
                                   onSelect={onSelect} editable={editable} changeEdit={changeEdit} {...props}/>
        </Panel.Body>
    </Panel>

export default DisponibilidadPanel

DisponibilidadPanel.propTypes = {
  columns: PropTypes.array,
  enabled: PropTypes.array,
  onSelect: PropTypes.func,
  rows: PropTypes.array,
  selection: PropTypes.array
}