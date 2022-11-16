import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-cliffs-81248.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    let id = 1;

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://rocky-cliffs-81248.herokuapp.com/products/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal("Delete successfull", {
                                    icon: "success",
                                });
                                const remaining = products.filter(product => product._id !== id);
                                setProducts(remaining);
                            }
                        })

                } else {
                    swal("Your imaginary file is safe!");
                }
            });
        // const areUsure = window.confirm('Are You Sure, Want To Delete?');
        // if (areUsure) {
        //     fetch(`https://rocky-cliffs-81248.herokuapp.com/products/${id}`, {
        //         method: 'DELETE'
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             if (data.deletedCount) {
        //                 alert('Delete Successful');
        //                 const remaining = products.filter(product => product._id !== id);
        //                 setProducts(remaining);
        //             }
        //         })
        // }
    }
    return (
        <div>
            <h1>Manage All Products</h1>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">Serial</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={index}>
                                <th scope="row">{id++}</th>
                                <td><img style={{ width: "100px", height: "100px" }} src={`data:image/png;base64,${product.img}`} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price} BDT</td>
                                <td><Link to={`manageAllProducts/${product._id}`}><button className="btn btn-success mb-2">Update</button></Link><br /><button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllProducts;