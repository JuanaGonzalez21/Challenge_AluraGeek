import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import '../../assets/styles/CardProducts.css'
import Category from '../Category/Category'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let component = true;

    useEffect(() => {
        const obtenerProductos = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products");
            console.log(response)
            if (component) {
                setData(await response.clone().json);
                setFilter(await response.json());
                setLoading(false)
                console.log(filter)
            }

            return () => {
                component = false
            }
        }

        // getProducts();
    }, []);


    const Loading = () => {
        return <>
            Cargando....
        </>
    }

    const ShowProducts = () => {
        return <>
            <div className="d-flex justify-content-between pb-4 ">
                <h2>Figuras de colección</h2>
                <button className='btn button'>
                    Ver todo
                    <ion-icon size="small" name="arrow-forward-outline" ></ion-icon>
                </button>

            </div>
            <Category />
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
                        <div className="row containerBanner">
                            {loading ? <Loading /> : <ShowProducts />}
                            <div className="col-xs-5 col-sm-6 col-lg-3 pb-3 ">
                                <div className="card" width="10rem">
                                    <img src={img1} className="card-img-top imgCard" alt="..." height="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-6 col-lg-3 pb-3">
                                <div className="card" width="10rem">
                                    <img src={img2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-6 col-lg-3 pb-3">
                                <div className="card" width="10rem">
                                    <img src={img3} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-6 col-lg-3 pb-3">
                                <div className="card" width="10rem">
                                    <img src={img4} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
