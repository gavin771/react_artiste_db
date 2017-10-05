import React from 'react'
import { Link } from 'react-router-dom'

const ArtisteList = (props) => {

    const list = ({ data }) => {
        if (!data) {
            return;
        }
        return data.map((artiste) => {

            const styles = {
                background: `url("/images/covers/${artiste.cover}.jpg") no-repeat`
            }
            return (
                <Link key={artiste.id} to={`/artiste/${artiste.id}`} className="artiste_link" style={styles}>
                    <div>{artiste.name}</div>
                </Link>
            )
        })
    }

    return (
        <div className="artiste_list">
            <h4>Browse the artistes</h4>
            {list(props)}
        </div>
    )
}

export default ArtisteList