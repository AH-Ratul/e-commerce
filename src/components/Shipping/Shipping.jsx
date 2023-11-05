import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shipping = () => {
    const data = useLoaderData();

    const deletedb = () => {
        localStorage.removeItem('Items')
    }
    return (
        <div className='mt-20'>
            <h1>hello</h1>
            <button onClick={deletedb}>delete</button>
        </div>
    );
};

export default Shipping;