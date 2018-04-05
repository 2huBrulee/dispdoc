import React from 'react'
import PropTypes from 'prop-types'
import {Panel} from 'react-bootstrap'
import MultipleDropdowns from './MultipleDropdowns'

const PreferencesPanel = ({notSelectedArray=[],selectedArray=[],addMore=f=>f,Hover=[],changeSelection=f=>f}) =>
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Preferencia de Cursos</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <MultipleDropdowns notSelectedArray={notSelectedArray} selectedArray={selectedArray} addMore={addMore} Hover={Hover} changeSelection={changeSelection}></MultipleDropdowns>
        </Panel.Body>
    </Panel>

PreferencesPanel.propTypes = {

}

export default PreferencesPanel





