import React from 'react';
import { useState, useEffect } from 'react';

const ImageCarousel = (props) => {
    const [imageFromCarousel, setImageFromCarousel] = useState(props.images[0])   
    
    let carouselIndex = 0;
    
    const images = props.images;

    function carouselIncrement () {
        carouselIndex >= props.images.length - 1 ? carouselIndex = 0 : carouselIndex = carouselIndex + 1;
    }

    useEffect(() => {
        setInterval(()=> {
            carouselIncrement();
            setImageFromCarousel(images[carouselIndex])
            console.log("tick! ", carouselIndex)
        }, 4000);
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div 
            className='Image-Carousel'
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-evenly',
                width:'70%',
                height: '70%'
            }}
        >
        <img 
            className='Image-Carousel__Image' 
            src={imageFromCarousel} 
            alt='product cooking and the purchased product' 
            style={{
                position:'relative',
                width:'60%'
            }}
        />
        <div 
            className='Image-Carousel__Caption'
            style={{
                position:'absolute',
                bottom:'-10%',
                left: '20%',
                marginLeft:'auto',
                marginRight:'auto'
            }}
        >
                <p>{props.caption}</p>
        </div>
        <div 
            className='Image-Carousel__Image-Description'
            style={{
                position:'block',
                right:'0%',
                maxWidth:'40%'

            }}
        >
            {props.children}
        </div>
    </div>
    )
}

export default ImageCarousel;