import React from 'react'
import './style.scss'

function Section1() {
    return (
        <>
                <div className='sec-1'>
                    <div className='left'>
                        <h1>A Bootstrap 5 template for modern businesses</h1>
                        <p className='sec-1-text'>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                        <div className='buttons'>
                            <button type="button" class="btn btn-primary btn-lg">Get Started</button>
                            <button type="button" class="btn btn-secondary btn-lg">Learn More</button>
                        </div>
                    </div>
                    <div className='right'>
                    <img src='https://dummyimage.com/600x400/343a40/6c757d'/>
                    </div>
                </div>
        </>
    )
}

export default Section1