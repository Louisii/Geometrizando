import React from 'react'

import PropTypes  from 'prop-types'

class Circle extends React.Component {

    render(){
        return(

            <div>

                <span>{this.props.tittle}</span>
                <div style={{backgroundColor: this.props.color}}  className='circle'></div>

            </div>
        )
    }
}

Circle.propTypes = {
    color : PropTypes.string,
    tittle : PropTypes.string
}

export default Circle