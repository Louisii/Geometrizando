import React from "react"

import PropTypes  from 'prop-types'

class Rectangle extends React.Component{

    render(){

        return(

            <div>

                <span>{this.props.tittle}</span>
                <div style={{backgroundColor: this.props.color}}  className='rectangle'></div>

            </div>
        )

        
    }
}

Rectangle.propTypes = {
    color : PropTypes.string,
    tittle : PropTypes.string
}

export default Rectangle