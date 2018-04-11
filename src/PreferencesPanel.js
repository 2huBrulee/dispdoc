import React from 'react'
import PropTypes from 'prop-types'
import {Panel} from 'react-bootstrap'
import MultipleMS from './components/MultipleMS'

const PreferencesPanel = ({notSelectedArray=[],selectedArray=[],changeSelection=f=>f,...props}) =>
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Preferencia de Cursos</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            {console.log("ESCOGEG",selectedArray)}
            <MultipleMS types={notSelectedArray} value={selectedArray} handleSelectChange={changeSelection} {...props} />
        </Panel.Body>
    </Panel>

PreferencesPanel.propTypes = {

}

export default PreferencesPanel





