

import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { removeFromCart, increaseQuantity, decreaseQuantity, saveAllBlogs } from '../features/CreateSlice';
import { ProductContext } from './Product';


const Cart = () => {
    const { data } = useContext(ProductContext);
    // console.log(data);

    const opReducer = useSelector((state) => state.opReducer);
    // Assuming your cart state is stored in Redux store under the key 'opReducer'
    const dispatch = useDispatch();
    //using  react hooks to handle states and functions

    useEffect(() => {
        dispatch(saveAllBlogs(data.products));
    }, [dispatch, data.products]);

    //handleAdd function for button to increase the quantity
    const handleAdd = (id, quantity) => {
        dispatch(increaseQuantity({ id }));
    };
    //handleReduce function for button to increase the quantity
    const handleReduce = (id, quantity) => {
        dispatch(decreaseQuantity({ id }));
    };
    //handleRemove function for button to remove the function from the cart
    const handleRemove = (id) => {
        dispatch(removeFromCart({ id }));
    };

    const totalQty = useSelector((state) =>
        state.opReducer.reduce((total, item) => total + (item.quantity || 1), 0)
    );
    // Using useSelector to extract data from the Redux store state

    const totalPrice = useSelector((state) =>
        state.opReducer.reduce(
            (total, item) => total + item.price * (item.quantity || 1),
            0
        )
    );

    // console.log(opReducer);
    return (
        <>
            <Navbar totalQty={totalQty} />
            <div className="container-fluid h-10 sticky-top-5">
                <ul>
                    <li>
                        <h2 className="">Cart</h2>
                    </li>
                    <li className="qty">
                        <b>Total Qty:</b> {totalQty}
                    </li>
                    <li className="price">
                        <b>Total Price:</b> ${totalPrice}
                    </li>
                    <li>
                        <button className="btn btn-primary">
                            <span className="d-none d-lg-block">Proceed to Pay</span>
                            <span className="d-block d-lg-none">Pay</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="container mt-5">
                {opReducer.map((item) => (
                    <div className="card p-5 mb-5 " key={item.id}>
                        <div className="row">
                            <div className="col-md-4 col-sm-12">
                                <img
                                    src={item.thumbnail}
                                    className="card-img-top h-50 mt-5"
                                    alt="..."
                                />
                            </div>
                            <div className="card-body col-md-8 col-sm-12">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <h4 className="card-title">{item.title}</h4>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">
                                            <b>Brand:</b> {item.brand}
                                        </p>
                                        <p className="card-text">
                                            <span className="stock"> In Stock: {item.stock}</span>
                                        </p>
                                        <p className="card-text">
                                            {" "}
                                            <b>Rating: {item.rating}</b>
                                        </p>
                                        <div className="stars" id="stars">
                                            <span className="star1" data-value="1">
                                                &#9733;
                                            </span>
                                            <span className="star2" data-value="2">
                                                &#9733;
                                            </span>
                                            <span className="star3" data-value="3">
                                                &#9733;
                                            </span>
                                            <span className="star4" data-value="4">
                                                &#9733;
                                            </span>
                                            <span className="star5" data-value="5">
                                                &#9733;
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 text-end mb-5 ">
                                        <h5>${item.price}</h5>
                                        <button
                                            className="btn btn-secondary me-2"
                                            onClick={() => handleReduce(item.id)}
                                        >
                                            -
                                        </button>
                                        {item.quantity || 1}
                                        <button
                                            className="btn btn-secondary ms-2"
                                            onClick={() => {
                                                handleAdd(item.id);
                                            }}
                                        >
                                            +
                                        </button>
                                        <div className="d-flex justify-content-end mt-5">
                                            <button
                                                className="btn remove"
                                                onClick={() => {
                                                    handleRemove(item.id);
                                                }}
                                            >
                                                REMOVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <h6>Discount: </h6>
                                    <h6>{item.discountPercentage} %</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="d-block d-sm-none">Total :</h6>
                                    <h6 className="d-block d-sm-none">
                                        {" "}
                                        ${item.price * (item.quantity || 1)}.00
                                    </h6>
                                    <h3 className="d-none d-sm-block">Total :</h3>
                                    <h3 className="d-none d-sm-block">
                                        {" "}
                                        ${item.price * (item.quantity || 1)}.00
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Cart;