import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageAllPackage.css';
const ManageAllPackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://nameless-plains-10260.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);
    let id = 1;

    const handleDelete = id => {
        const areUsure = window.confirm('Are You Sure, Want To Delete?');
        if (areUsure) {
            fetch(`http://nameless-plains-10260.herokuapp.com/packages/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // //console.log(data);
                    if (data.deletedCount) {
                        alert('Delete Successful');
                        const remaining = packages.filter(pac => pac._id !== id);
                        setPackages(remaining);
                    }
                })
        }
    }
    return (
        <div>
            <div className="container-fluid">
                <h1 className="text-center mb-4"> All packages List:</h1>
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col">Serial</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                packages.map(pac => <tr>
                                    <th scope="row">{id++}</th>
                                    <td><img className="" src={pac.img} alt="" /></td>
                                    <td>{pac.name}</td>
                                    <td>{pac.description.slice(0, 100)}...</td>
                                    <td>{pac.price} BDT</td>
                                    <td>{pac.duration}</td>
                                    <td><Link to={`packages/update/${pac._id}`}><button className="btn btn-success mb-2">Update</button></Link><br /><button onClick={() => handleDelete(pac._id)} className="btn btn-danger">Delete</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>


            </div>
        </div >
    );
};

export default ManageAllPackage;