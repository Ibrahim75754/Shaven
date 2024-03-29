import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';

const ProductsUpdate = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [img, setImg] = useState(null);
    useEffect(() => {
        fetch(`https://rocky-cliffs-81248.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data =>
                setProduct(data));
    }, [id]);

    //Update part

    const changeName = e => {
        const updateName = e.target.value;

        const updateProduct = { ...product };
        updateProduct.name = updateName;

        setProduct(updateProduct);
    }
    const changeDes = e => {
        const updatedes = e.target.value;

        const updateProduct = { ...product };
        updateProduct.description = updatedes;

        setProduct(updateProduct);

    }
    const changePrice = e => {
        const updatePrice = e.target.value;
        const updateProduct = { ...product };
        updateProduct.price = updatePrice;

        setProduct(updateProduct);

    }


    const handleUpdate = e => {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('img', img);

        fetch(`https://rocky-cliffs-81248.herokuapp.com/products/update/${id}`, {
            method: 'PUT',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Good job!", "Data Update successful!", "success");
                }
            })
        e.preventDefault();

    }
    return (
        <div>
            <h1>Update Product</h1>
            <div>
                <form onSubmit={handleUpdate} className="d-flex flex-column justify-content-center align-items-center">

                    <input className="w-50 mb-3" type="name" onChange={changeName} value={product?.name || ''} />
                    <textarea className="w-50 mb-3" onChange={changeDes} type="text" value={product?.description || ''} />
                    <input className="w-50 mb-3" onChange={changePrice} type="number" value={product?.price || ''} />
                    <input
                        accept="image/*"
                        type="file"
                        onChange={e => setImg(e.target.files[0])}
                    />
                    <input className="w-50 mb-3" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default ProductsUpdate;