import './Gallery.scss';
import React from 'react'

export default function Gallery() {
    return (
        <>
        <div className='photo-gallery'> 
            {(()=> {
                    let imgs = [];
                    for (let i = 1; i < 8; i++) {
                        imgs.push(
                            <div className='pics' key={i}>
                                <img src={require(`../media/about/about-${i}.png`)}/>
                            </div>
                        );
                    }
                    return imgs;
                })()}
        </div>
        </>
    )
}
