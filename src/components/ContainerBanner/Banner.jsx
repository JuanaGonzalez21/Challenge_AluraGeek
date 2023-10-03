import bannerZonaGeek from '../../assets/img/banner.jpg'
import "../..//assets/styles/Banner.css"

const Banner = () => {
    return (
        <>
            <div className="card text-white border-0">
                <img src={bannerZonaGeek} height="500px" className="card-img imgBanner " alt="Banner" />
                    <div className="card-img-overlay d-flex flex-column justify-content-around ms-3">
                        <div className="containerBanner d-flex flex-column ">
                        <h5 className="card-title display-3 text-dark fw-bold mb-0">Ofertas de Octubre</h5>
                        <p className="card-text text-dark">Productos seleccionados para ti</p>
                        </div>
                        
                        <button type="button" className="btn btn-outline-info btnBanner ">Ver Producto</button>
                    </div>
                    
            </div>
        </>
    );
}

export default Banner;
