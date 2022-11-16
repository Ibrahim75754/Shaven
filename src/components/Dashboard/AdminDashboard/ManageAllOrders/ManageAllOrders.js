import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageAllOrders = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rocky-cliffs-81248.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    let Id = 1;

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this order file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://rocky-cliffs-81248.herokuapp.com/orders/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount) {
                                swal("Delete Successful", {
                                    icon: "success",
                                });
                                const remaining = products.filter(product => product._id !== id);
                                setProducts(remaining);
                            }
                        })

                } else {
                    swal("Order file is safe!");
                }
            });

    }
    return (
        <div>
            <h1>Manage All Orders</h1>
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">serial</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr key={index}>
                                <th scope="row">{Id++}</th>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.productId}</td>
                                <td>{product.phone}</td>
                                <td>{product.address}</td>
                                <td><button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;