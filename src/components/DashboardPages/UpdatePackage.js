import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdatePackage = () => {
    const { id } = useParams();

    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch(`http://nameless-plains-10260.herokuapp.com/packages/update/${id}`)
            .then(res => res.json())
            .then(data =>
                setPackages(data));
    }, []);

    //Update part
    const chaneImg = e => {
        const updateImg = e.target.value;
        const update = { img: updateImg, name: packages.name, description: packages.description, price: packages.price, duration: packages.duration };
        setPackages(update);
    }
    const chaneName = e => {
        const updateName = e.target.value;
        const update = { img: packages.img, name: updateName, description: packages.description, price: packages.price, duration: packages.duration };
        setPackages(update);

    }
    const chaneDes = e => {
        const updatedes = e.target.value;
        const update = { img: packages.img, name: packages.name, description: updatedes, price: packages.price, duration: packages.duration };
        setPackages(update);
    }
    const chanePrice = e => {
        const updatePrice = e.target.value;
        const update = { img: packages.img, name: packages.name, description: packages.description, price: updatePrice, duration: packages.duration };
        setPackages(update);
    }
    const chaneDuration = e => {
        const updateDuration = e.target.value;
        const update = { img: packages.img, name: packages.name, description: packages.description, price: packages.price, duration: updateDuration };
        setPackages(update);
    }
    const handleUpdatePackage = e => {
        fetch(`http://nameless-plains-10260.herokuapp.com/packages/update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(packages)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('update successful')
                }
            })
        e.preventDefault();

    }
    return (
        <div>
            <div className="container py-5">
                <h1 className="text-center mb-5 text-warning">Update A Package</h1>
                <div>
                    <form onSubmit={handleUpdatePackage} className="d-flex flex-column justify-content-center align-items-center">
                        <input className="w-50 mb-3" type="text" onChange={chaneImg} value={packages?.img || ''} />
                        <input className="w-50 mb-3" type="name" onChange={chaneName} value={packages?.name || ''} />
                        <textarea className="w-50 mb-3" onChange={chaneDes} type="text" value={packages?.description || ''} />
                        <input className="w-50 mb-3" onChange={chanePrice} type="number" value={packages?.price || ''} />
                        <input className="w-50 mb-3" onChange={chaneDuration} type="tex" value={packages?.duration || ''} />
                        <input className="w-50 mb-3" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePackage;