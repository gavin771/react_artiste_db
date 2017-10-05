import React, { Component } from 'react'

import ArtisteHeader from './ArtisteHeader.js'

const API = 'http://localhost:3004/artistes'

class SingleArtiste extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artiste: {}
        }
    }

    componentDidMount() {
        let id = this.props.match.params.artisteId
        fetch(`${API}/${id}`, {
            method: 'GET'

        })
            .then(response => response.json())
            .then(json => {
                this.setState({ artiste: json })
                console.log(this.state)
            })
    }

    render() {
        return (
            <div>
                <ArtisteHeader data={}/>
            </div>
        )
    }
}

export default SingleArtiste