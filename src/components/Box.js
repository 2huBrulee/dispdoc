import React from 'react'
import PropTypes from 'prop-types'

const Box = ({selected=false,enabled=false,onClick=f=>f}) =>
    <div className={((!enabled) ? "box disabled" : ((selected ) ? "box selected" : "box"))}
        onClick={onClick}>
    </div>

Box.propTypes = {
    enabled: PropTypes.bool,
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Box