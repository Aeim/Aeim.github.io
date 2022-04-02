import React from 'react'
import content from '../content'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Typical from 'react-typical'

function Header() {
  return (
    <div
        className='min-h-screen flex items-center justify-center'
        style={{
        background: '#091c29',
        }}
    >
        <div>
            <div>
                <LazyLoadImage src={content.header.img} effect="blur" placeholder={process.env.PUBLIC_URL + '/logo512.png'}/>
            </div>
            <div className='text-white'>
                <h2 className='text-3xl font-bold text-center'>
                    {content.header.text[0]}<br/>
                    {content.header.text[1]}
                </h2>
                <h1 className='font-bold text-2xl text-gray-500'>
                    {content.header.text[2]}{' '}
                    <Typical
                        steps={content.header.typical}
                        loop={Infinity}
                        className='inline-block'
                    />
                </h1>
                <button className='bg-indigo-500 px-10 py-3 text-xl uppercase mt-10 rounded-lg'>
                    {content.header.btnText}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header