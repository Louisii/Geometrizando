import React from 'react'

import PropTypes  from 'prop-types'

class Square extends React.Component {

    render() {
        return(

            <div>

                <span>{this.props.tittle}</span>
                <div style={{backgroundColor: this.props.color}}  className='square'></div>

            </div>
        )
    }

}

Square.propTypes = {
    color : PropTypes.string,
    tittle : PropTypes.string
}

export default Square