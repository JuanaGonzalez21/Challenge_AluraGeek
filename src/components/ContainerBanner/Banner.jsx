import bannerZonaGeek from '../../assets/img/banner.jpg'

const Banner = () => {
    return (
        <>
            <div className="card bg-dark text-white border-0">
                <img src={bannerZonaGeek} className="card-img img-fluid" alt="..." height="400px"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>
            </div>
        </>
    );
}

export default Banner;
