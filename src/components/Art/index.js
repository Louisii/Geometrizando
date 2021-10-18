import React from "react"

class Art extends React.Component{

    render(){

        return(

            <div>

                <div className='art'>
                    {this.props.children}
                </div>
                

            </div>
        )

        
    }
}

export default Art