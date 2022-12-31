import './Gallery.scss';
import React from 'react'

const importAll = r => r.keys().map(r);
const images = importAll(require.context('../media/about', false, /\.*$/));

export default function Gallery() {
    return (
        <>
        <div className='photo-gallery'> 
            {(()=> {
                let imgs = [];
                images.forEach((img, i) => {
                    imgs.push(
                        <div className='pics' key={i}>
                            <img src={img}/>
                        </div>
                    );
                });
                return imgs;
            })()}
        </div>
        </>
    )
}
