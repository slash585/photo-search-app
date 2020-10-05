import React from 'react'
import Images from './images'
import './image-list.css'

const ImageList = ({images})=>{

    const preparedImages = images.map(image => {
        return(
            <Images key={image.id} image={image}/>
        )
    })

    return(
        <div className="image-list-container">
            {preparedImages}
        </div>
    )
}

export default ImageList