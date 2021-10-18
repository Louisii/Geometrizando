import React from "react"

import PropTypes  from 'prop-types'

class Triangle extends React.Component{

    render(){

        return(

            <div>

                <span>{this.props.tittle}</span>
                <div style={{backgroundColor: this.props.color}}  className='triangle'></div>

            </div>
        )

        
    }
}

Triangle.propTypes = {
    color : PropTypes.string,
    tittle : PropTypes.string
}

export default Triangle