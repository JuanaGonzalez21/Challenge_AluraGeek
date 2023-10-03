import React, { useState } from 'react';
import '../../assets/styles/CardProducts.css'
import Data from '../Data/Data';


const Products = () => {

    const [loading, setLoading] = useState(false);


    const Loading = () => {
        return <>
            Cargando....
        </>
    }

    const ShowProducts = () => {
        return <>
            <Data />
        </>
    }
    return (
        <>
            <div className="container my-5 py-2 ">

                <div className="row d-flex flex-wrap">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Productos Geek para ti</h1>
                    </div>

                    <div>
                        {loading ? <Loading /> : <Data />}
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Products;
