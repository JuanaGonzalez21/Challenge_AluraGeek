import React, { useState } from 'react';
import Category from '../Category/Category';
import { v4 as uuid } from 'uuid';

const Data = () => {

    const [categoria, setCategoria] = useState([
        {
            id: "FigurasAccion",
            nombre: "Figuras de Accion"
        }, {
            id: "LibrosComics",
            nombre: "Libros y Comics"
        }, {
            id: "Ropa",
            nombre: "Ropa y Accesorios"
        }
    ]);

    const [producto, setProducto] = useState([
        {
            id: uuid(),
            nombre: "Baby Yoda",
            foto: "https://images.pexels.com/photos/5558237/pexels-photo-5558237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            descripcion: "Figura Coleccionable",
            valor: "$20",
            categoria: "FigurasAccion"
        }
        , {
            id: uuid(),
            nombre: "Hellboy",
            foto: "https://images.pexels.com/photos/4067485/pexels-photo-4067485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            descripcion: "Figura Coleccionable",
            valor: "$40",
            categoria: "FigurasAccion"
        }
        , {
            id: uuid(),
            nombre: "Wall-y",
            foto: "https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            descripcion: "Figura Coleccionable",
            valor: "$20",
            categoria: "FigurasAccion"
        }
        , {
            id: uuid(),
            nombre: "Star Words",
            foto: "https://images.pexels.com/photos/16108107/pexels-photo-16108107/free-photo-of-blanco-y-negro-juguete-figura-de-accion-juguetes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            descripcion: "Figura Coleccionable",
            valor: "$20",
            categoria: "FigurasAccion"
        }
        , {
            id: uuid(),
            nombre: "DoomsDay",
            foto: "https://images.pexels.com/photos/7809122/pexels-photo-7809122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            descripcion: "Comic",
            valor: "$20",
            categoria: "LibrosComics"
        },
        {
            id: uuid(),
            nombre: "Iron Man",
            foto: "https://images.pexels.com/photos/7768661/pexels-photo-7768661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            descripcion: "Comic",
            valor: "$20",
            categoria: "LibrosComics"
        },
        {
            id: uuid(),
            nombre: "Shine",
            foto: "https://images.pexels.com/photos/9807577/pexels-photo-9807577.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            descripcion: "Libro Ciencia Ficción",
            valor: "$20",
            categoria: "LibrosComics"
        },
        {
            id: uuid(),
            nombre: "Silver Surfer",
            foto: "https://images.pexels.com/photos/8811521/pexels-photo-8811521.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            descripcion: "Comic",
            valor: "$20",
            categoria: "LibrosComics"
        },
        {
            id: uuid(),
            nombre: "Dizfras Spiderman",
            foto: "https://images.pexels.com/photos/8421980/pexels-photo-8421980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            descripcion: "Disfraz niño Spiderman",
            valor: "$20",
            categoria: "Ropa"
        },
        {
            id: uuid(),
            nombre: "Mascara",
            foto: "https://images.pexels.com/photos/1097460/pexels-photo-1097460.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            descripcion: "Mascara adulto",
            valor: "$20",
            categoria: "Ropa"
        },
        {
            id: uuid(),
            nombre: "Capa Niño",
            foto: "https://images.pexels.com/photos/6800574/pexels-photo-6800574.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            descripcion: "Capa dizfras",
            valor: "$20",
            categoria: "Ropa"
        },
        {
            id: uuid(),
            nombre: "Dizfras Esqueleto",
            foto: "https://images.pexels.com/photos/9740508/pexels-photo-9740508.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            descripcion: "Dizfras para niño",
            valor: "$20",
            categoria: "Ropa"
        }
    ]);

    return (
        <div className='categoriasProductos'>
            {
                categoria.map((categories) =>
                    <Category
                        key={categories.id}
                        datos={categories}
                        datosProducto={producto.filter(productos => productos.categoria === categories.id)} />

                )
            }

        </div>
    );
}

export default Data;
