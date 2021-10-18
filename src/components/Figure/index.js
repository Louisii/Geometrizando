import React from "react"
import Circle from "../Circle"
import Rectangle from "../Rectangle"
import Square from "../Square"
import Triangle from "../Triangle"

import PropTypes  from 'prop-types'

class Figure extends React.Component{

    render(){

        if(this.props.type === 'square'){
            return(
                <Square
                color={this.props.color}
                tittle={this.props.tittle}
                />
            )
        }
        
        if(this.props.type === 'circle'){
            return(
                <Circle 
                color={this.props.color}
                tittle={this.props.tittle}
                />
            )
        }

        if(this.props.type === 'triangle'){
            return(
                <Triangle
                color={this.props.color}
                tittle={this.props.tittle}
                />
            )
        }

        if(this.props.type === 'rectangle'){
            return(
                <Rectangle
                color={this.props.color}
                tittle={this.props.tittle}
                />
            )
        }
    }
}

Figure.propTypes = {
    color : PropTypes.string,
    tittle : PropTypes.string,
    type : PropTypes.oneOf(['square', 'circle', 'triangle', 'rectangle'])
}

export default Figure