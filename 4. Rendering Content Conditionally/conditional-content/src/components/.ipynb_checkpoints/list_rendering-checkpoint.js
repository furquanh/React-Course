import { useState } from 'react';

export default function List({products}) {
    
    // Level 2
    /*
    const productElement = props.products.map(product => 
        (
        <li>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
        </li>
        )
    )
    */
    
    // Level 1
    /*
    for (const product of props.products) {
        productElement.push((
            <li>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
            </li>
        ));
    }
    */
    
    // Return for both Level 1 and Level 2
    /*
    return (
        
        productElement // JSX accepts array values as dynamically outputted values.
    ); 
    */
    
    // Level 3: entire thing inside return
    return (
        <ul>
        {products.map(product =>  (
            <li>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
           </li>
        ))}
        </ul>    
    )
}