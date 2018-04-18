import React from 'react'
import PropTypes from 'prop-types'
import {Panel} from 'react-bootstrap'

const PhotoPanel = ({photo="https://78.media.tumblr.com/1eef02b917d63d9a83f90e3268dc80fd/tumblr_omaxwowb5N1s02j7ro1_400.png"}) =>
    <Panel bsStyle="primary">
        <Panel.Heading>
            <Panel.Title componentClass="h3">Fotografia</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
            <div>
                <img align="centered" width="75%" src={photo} alt={'NO FOTO'}/>
            </div>
        </Panel.Body>
    </Panel>


export default PhotoPanel

PhotoPanel.propTypes = {
    photo: PropTypes.string
}