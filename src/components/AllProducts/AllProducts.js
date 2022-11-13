import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://agile-everglades-07523.herokuapp.com/products')
            .then(res => res.json())
            .then(data =>
                setProducts(data));
    }, []);
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <h1 className="text-color">Our All Products</h1>
                <p className="pb-3">Deep Impact Shaving Foam.Enriched with Black Carbon, it prepares your skin for a comfortable shave and provides a smooth razor glide, giving you a clean skin feeling to make a deep impact! Deep Impact Shaving Foam.</p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map((product, index) => <div key={index} className="col text-start">
                            <div className="card h-100 border-0 card-custom">
                                <div className="card-img">
                                    <img src={`data:image/png;base64,${product.img}`} className="card-img-top img-height p-3" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description.split(' ').slice(0, 20).toString().replace(/,/g, ' ')}...</p>
                                    <div className="d-flex justify-content-between">
                                        <h4 className="text-color">{product.price} BDT</h4>
                                        <Link to={`/home/${product._id}`}><button className='btn btn-purchase'>Purchase</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;