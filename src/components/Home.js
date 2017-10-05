import React, { Component } from 'react'

import Banner from './Banner'
import ArtisteList from './ArtisteList'

const API = 'http://localhost:3004/artistes'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            artistes: []
        }
    }

    componentDidMount() {
        fetch(API, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({ artistes: json })
            })
    }

    render() {
        return (
            <div>
                <Banner />
                <ArtisteList data={this.state.artistes} />
            </div>
        )
    }
}

export default Home