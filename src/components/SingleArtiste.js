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
                <ArtisteHeader  />
                <div className="artiste_bio">
                    <div className="avatar">
                        <span style={{ background: `url("/images/covers/${this.state.artiste.cover}.jpg") no-repeat` }}></span>
                    </div>
                    <h3>{this.state.artiste.name}</h3>
                    <div className="bio_text">
                        {this.state.artiste.bio}
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleArtiste