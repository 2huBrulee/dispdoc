import React from 'react'
import PropTypes from 'prop-types'
import BoxGrid from './BoxGrid'
import HoursButtons from './HoursButtons'

const DisponibilidadHoraria = ({rows=[],columns=[],selection=[],enabled=[],onSelect= f=>f,saveChanges=f=>f,editable=false,changeEdit=f=>f,...props}) =>
    <div>
        <BoxGrid rows={rows} columns={columns} selection={selection} enabled={enabled} onSelect={onSelect} />
        <HoursButtons changeEdit={changeEdit} editing={editable} saveChanges={saveChanges}/>
    </div>

export default DisponibilidadHoraria

DisponibilidadHoraria.propTypes = {
  columns: PropTypes.array,
  enabled: PropTypes.array,
  onSelect: PropTypes.func,
  rows: PropTypes.array,
  saveChanges: PropTypes.func,
  selection: PropTypes.array
}