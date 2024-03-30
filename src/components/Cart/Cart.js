import React, { useState } from 'react';
import './Cart.scss';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import Modal from '../Modal/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../../redux/cartReducer';
import { resetCart } from '../../redux/cartReducer';
import { makeRequest } from '../../makeRequest';
import { loadStripe } from "@stripe/stripe-js";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { updateQuantity } from '../../redux/cartReducer';


export const Cart = ({ onClose }) => {

    const products = useSelector(state => state.cart.products)
    const [cartProducts, setCartProducts] = useState(products);

    const dispatch = useDispatch()

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    }


    const decreaseQuantity = (id) => {
        const updatedProducts = cartProducts.map((item) => {
            if (item.id === id) {
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return null;
                }
            }
            return item;
        }).filter(Boolean);
        setCartProducts(updatedProducts);
        dispatch(updateQuantity(updatedProducts));
    };


    const increaseQuantity = (id) => {
        const updatedProducts = cartProducts.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })
        setCartProducts(updatedProducts)
        dispatch(updateQuantity(updatedProducts))
    }


    const stripePromise = loadStripe(
        "pk_test_51OydEWSFwqGGW5ZSwVL7lfX3mNIM5vqorgN0nHYTtfJaHfx6tGZL0Wn4lLSEM7C6drBvN4N1z7ntXwqtTfoRHsBo00kkjkC6Dp"
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Modal isOpen={true} onClose={onClose}>
            <div className='cart'>
                <div className='close-btn' onClick={onClose}>
                    <CloseTwoToneIcon />
                </div>
                <h1>Products in your cart</h1>

                {products.length > 0 ? (
                    products.map((item) => (
                        <div className='item' key={item.id}>
                            {item.img && <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt='' />}
                            <div className='details'>
                                <h2>{item.title} | {item.size} </h2>
                                <h4>₹ {item.price}</h4>
                                <p>{item.desc?.substring(0, 60)}</p>
                                <div className='price'>
                                    <RemoveIcon className='icon' onClick={() => decreaseQuantity(item.id)} />
                                    <span className='qty'>{item.quantity}</span>
                                    <AddIcon className='icon' onClick={() => increaseQuantity(item.id)} />
                                </div>
                            </div>
                            <DeleteOutlineTwoToneIcon className='delete' onClick={() => dispatch(removeItem(item.id))} />
                        </div>
                    ))
                ) : ('')}


                <div>
                    <div className='total'>
                        <span>Subtotal<i className='italic'> (Inclusive Of All Taxes)</i></span>
                        <span>MRP {totalPrice()}</span>
                    </div>
                    <button className='btn' onClick={handlePayment}>Proceed to Checkout</button>
                    <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
                </div>

            </div>
        </Modal>
    );
};
