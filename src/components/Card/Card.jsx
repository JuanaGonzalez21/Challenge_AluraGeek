import React from 'react';

const Card = (props) => {

    const { producto } = props
   
    

    return (
        <>

            {
                producto.map((productos) => {

                    return <>
                        <div className="card containerBanner mb-4 " key={productos.id} >
                            <img className="card-img-top" src={productos.foto} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{productos.nombre}</h5>
                                    <p className="card-text">{productos.descripcion}</p>
                                    <a href="#" className="btn btn-primary">Ver más...</a>
                                </div>
                        </div>
                    </>
                })

            }

        </>
    );
}

export default Card;
