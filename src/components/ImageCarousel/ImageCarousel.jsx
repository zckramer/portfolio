import React from "react";
import './ImageCarousel.css'

export default function ImageCarousel (props) {
    function handleOnClick (image) {
        console.log(image.key)    
    }

    return(
        <div className="Image-Carousel">
            {props.images.map((image, index) => {
                return <img 
                        key={index} 
                        src={image} 
                        alt="placekitten" 
                        className="Image-Carousel_Image_Front" 
                        onClick={()=>handleOnClick(image)}

                        />
            })}
            
        </div>
    )
}