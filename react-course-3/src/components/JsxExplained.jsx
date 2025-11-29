import React from 'react'   

const JsxExplained = () => {
    const productData = [
        {
            name: "Wireless Headphones",
            productionDate: "2024-03-15",
            brand: "Sony",
            rating: "★★★★☆",
        },
        {
            name: "Smart Watch",
            productionDate: "2024-06-20",
            brand: "Apple",
            rating: "★★★★★",
        },
        {
            name: "Laptop Computer",
            productionDate: "2024-01-10",
            brand: "Dell",
            rating: "★★★★☆",
        }
    ];

    return (
        <div className="w-full min-h-screen text-black p-4 flex flex-col">
            <h1 className='text-2xl font-bold my-3'>Products</h1>
            <ul>
                {productData.map((product, index) => {
                    return (
                        <li key={index} className=' py-2'>
                            <h2>{product.name} - {product.brand} - {product.rating}</h2>
                            <p className='text-sm text-gray-600'>Produced on: {product.productionDate}</p>
                            <hr className='bg-gray-600 w-full my-3' />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default JsxExplained