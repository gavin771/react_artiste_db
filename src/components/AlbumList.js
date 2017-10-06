import React from 'react'

const AlbumList = (props) => {

    const showList = ({ albums }) => {
        if (albums) {
            return albums.map((i, idx) => {
                return (
                    <img key={idx} alt="" src={`/images/albums/${i.cover}.jpg`} />
                )
            })
        }
    }
    return (
        <div className="album_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList