import React from 'react';
import Card from '../Card/Card'
import '../../assets/styles/Products.css'
import { Link } from 'react-router-dom';

const Category = (props) => {

    const { nombre, id } = props.datos
    const { datosProducto } = props
    return (
        <>


            <div className='d-flex justify-content-between mx-4 pb-4' >
                <h2>{nombre}</h2>
                <a to='' className='btn button d-flex align-items-center'>
                    Ver todo
                    <ion-icon size="small" name="arrow-forward-outline" ></ion-icon>
                </a>

            </div>
            <div className='d-flex flex-wrap cardProduct justify-content-around pb-4 pb-3 '>
                <Card producto={datosProducto} />
            </div>




        </>
    );
}

export default Category;

