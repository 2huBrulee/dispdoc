import React from 'react'
import PropTypes from 'prop-types'
import {Panel} from 'react-bootstrap'
import MultipleMS from './MultipleMS'
import HoursButtons from "./HoursButtons";

const PreferencesPanel = ({notSelectedArray=[],selectedArray=[],changeSelection=f=>f,sendMS=f=>f,changeEdit=f=>f,msedit,...props}) =>
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Preferencia de Cursos</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            {console.log(selectedArray)}
            <MultipleMS types={notSelectedArray} value={selectedArray.sort((a,b) => (-1)*(b.id_tip_grado-a.id_tip_grado))} msedit={msedit} handleSelectChange={changeSelection} {...props} />
            <HoursButtons saveChanges={sendMS} editing={msedit} changeEdit={changeEdit}/>
        </Panel.Body>
    </Panel>

PreferencesPanel.propTypes = {
  changeSelection: PropTypes.func,
  notSelectedArray: PropTypes.array,
  saveChanges: PropTypes.func,
  selectedArray: PropTypes.array
}

export default PreferencesPanel





