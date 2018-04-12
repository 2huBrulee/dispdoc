import React from 'react'
import PropTypes from 'prop-types'
import {Panel} from 'react-bootstrap'
import BoxGrid from "./BoxGrid";

const DisponibilidadHoraria = ({rows=[],columns=[],selection=[],enabled=[],onSelect=f=>f,...props}) =>
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Disponibilidad Horaria</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <BoxGrid rows={rows} columns={columns} selection={selection} enabled={enabled} onSelect={onSelect}/>
        </Panel.Body>
    </Panel>

export default DisponibilidadHoraria

DisponibilidadHoraria.propTypes = {
  columns: PropTypes.array,
  enabled: PropTypes.array,
  onSelect: PropTypes.func,
  rows: PropTypes.array,
  selection: PropTypes.array
}