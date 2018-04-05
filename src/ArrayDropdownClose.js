import React from 'react'
import PropTypes from 'prop-types'
import {Popover,Button,OverlayTrigger} from 'react-bootstrap'
import ArrayDropdown from './ArrayDropdown'

const popoverHoverFocus = (
    <Popover id="popover-trigger-hover-focus" title="Popover bottom">
        <strong>Eliminar Curso</strong>
        <Button> X </Button>
    </Popover>
);

const ArrayDropdownClose = ({content=[],hasHover=false,onSelect=f=>f}) =>
    <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="top"
        overlay={(hasHover) ? popoverHoverFocus : null}
    >
        <ArrayDropdown content={content} onSelect={onSelect}/>
    </OverlayTrigger>

ArrayDropdownClose.propTypes={

}

export default ArrayDropdownClose