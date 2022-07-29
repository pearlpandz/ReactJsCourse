import React from 'react'

function Product({ data }) {
    const errorNow = () => {
        throw new Error('product is not found')
    }
    return (
        <div className='product'>
            <h4>{data.name ? data.name : errorNow() }</h4>
            <h6>{data.price}</h6>
        </div>
    )
}

export default Product