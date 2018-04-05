import React from 'react'
import PropTypes from 'prop-types'
import {DropdownButton,MenuItem} from 'react-bootstrap'

const ArrayDropdown =({content=[],title='Cursos',onSelect=f=>f}) =>
    <DropdownButton
        bsStyle='Primary'
        title={title}
        id={`dropdown-basic`}
    >
        {content.map((n,j)=>
            <MenuItem key={j} eventKey={j} onSelect={onSelect}>{n}</MenuItem>
        )}
    </DropdownButton>

ArrayDropdown.propTypes={
    content:PropTypes.array,
    title:PropTypes.string
}

export default ArrayDropdown