import './Particles.scss';
import React from 'react'

let sizes = ['sm','sm-md','md','lg'];
let colors = ['pink', 'purple', 'blue', 'light-pink', 'grey'];

function Particles(props) {
    const { clusters } = props;
    const cols = clusters.length;

    return (
    <>
        <div className='particle-row'>
            {(()=> {
                let row = [];
                for (let i = 0; i < cols; i++) {
                    row.push(
                        <div className='cluster' key={i}>
                            {clusters.map(function(item, i){
                                return <span className={`${sizes[randomIndex(sizes.length)]} ${colors[randomIndex(colors.length)]}`} style={{ "--i": i+1 }} key={i}></span>;
                            })}
                        </div>
                    );
                }
                return row;
            })()}
        </div>
    </>
    )
}

function randomIndex(max) {
    return Math.floor(Math.random()* max);
}

export default Particles
