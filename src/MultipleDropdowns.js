import React from 'react'
import PropTypes from 'prop-types'
import {ButtonToolbar,Button} from 'react-bootstrap'
import ArrayDropdownClose from "./ArrayDropdownClose";


const MultipleDropdowns = ({notSelectedArray=[],selectedArray=[],addMore=f=>f,Hover=[],changeSelection=f=>f}) =>
    <div>
    <div>
        XDDDD
    </div>
    <ButtonToolbar>
        <Button onClick={addMore}> +++ </Button>
        <ArrayDropdownClose content={notSelectedArray} hasHover={Hover[0]} onSelect={changeSelection}/>
        {selectedArray.map((n,i)=>
            <ArrayDropdownClose content={notSelectedArray} hasHover={false} onSelect={changeSelection}/>
        )}
    </ButtonToolbar>
    </div>

MultipleDropdowns.propTypes = {

}

export default MultipleDropdowns

