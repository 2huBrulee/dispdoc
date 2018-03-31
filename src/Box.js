import React from 'react';
import PropTypes from 'prop-types'
import './Box.scss'

const Box = ({selected=false,onClick=f=>f}) =>
    <div className={(selected) ? "box selected" : "box"}
        onClick={onClick}>
    </div>

Box.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Box