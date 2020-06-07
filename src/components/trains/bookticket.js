import React, { Component } from 'react'

export default class bookticket extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div>
                book ticket page
        <h3>{this.props.match.params.trainnumber}</h3>
        <h4>{this.props.match.params.trainname}</h4>
        <h4>{this.props.match.params.traveldate}</h4>
            </div>
        )
    }
}
