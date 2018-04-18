import React from 'react'
import PropTypes from 'prop-types'
import {Panel} from 'react-bootstrap'
import MultipleMS from './MultipleMS'
import HoursButtons from "./HoursButtons";

const PreferencesPanel = ({notSelectedArray=[],selectedArray=[],changeSelection=f=>f,saveChanges=f=>f,...props}) =>
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Preferencia de Cursos</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <MultipleMS types={notSelectedArray} value={selectedArray} handleSelectChange={changeSelection} {...props} />
            <HoursButtons saveChanges={saveChanges}/>
        </Panel.Body>
    </Panel>

PreferencesPanel.propTypes = {
  changeSelection: PropTypes.func,
  notSelectedArray: PropTypes.array,
  saveChanges: PropTypes.func,
  selectedArray: PropTypes.array
}

export default PreferencesPanel





