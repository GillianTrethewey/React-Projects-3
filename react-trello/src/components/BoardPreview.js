import React from 'react'
import PropTypes from 'prop-types'

class BoardPreview extends React.Component {
    render() {
        return (
            <div>
              <p>{this.props.board.title}</p>
            </div>
            
        )
    }
}

BoardPreview.propTypes = {
    board: PropTypes.object.isRequired
}
export default BoardPreview