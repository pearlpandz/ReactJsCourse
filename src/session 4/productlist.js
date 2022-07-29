import React from 'react'
import ErrorBoundary from './errorBoundary'
import Product from './product'

function Productlist() {

    const products = [
        {
            name: 'test 1',
            price: 120
        },
        {
            label: 'test 2',
            price: 150
        },
        {
            name: 'test 3',
            price: 1200
        }
    ]

  return (
    <>
    <div>Productlist</div>
    {
        products.map((product, index) => (
            <ErrorBoundary key={index}>
                <Product key={index} data={product} />
            </ErrorBoundary>
        ))
    }
    </>
  )
}

export default Productlist