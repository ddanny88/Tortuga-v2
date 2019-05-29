import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReviewOrder.css'
import axios from 'axios';
import ReviewItem from './ReviewItem/ReviewItem';
import uuid from 'uuid/v4';
import ReviewUserInfo from './ReviewUserInfo/ReviewUserInfo';
import ReviewAddressInfo from './ReviewAddress/ReviewAddressInfo';
import Payment from './Payment/Payment';
import ReviewTotal from './ReviewTotal/ReviewTotal';



const ReviewOrder = (props) => {
    const [userInfo, setUserInfo] = useState({});
    const [addressInfo, setAddressInfo] = useState({});
    const [cartInfo, setCartInfo] = useState({});
    const [subtotal, setSubtotal] = useState('0.00');
    const [tax, setTax] = useState('0.00');
    const [total, setTotal] = useState('0.00');

    useEffect(() => {
        const getUserInfo = async() => {
            let response = await axios.get('/api/get/user');
            setAddressInfo(response.data.address);
            setCartInfo(response.data.cart);
            setUserInfo(response.data.user);
        }
        getUserInfo();
    }, [])

    useEffect(() => {
        getSubtotal();
    });
    useEffect(() => {
        let tax = calcTax(subtotal);
        setTax(tax);
    });
    useEffect(() => {
        setTotal(subtotal + tax);
    });
    const getSubtotal = async() => {
        let response = await axios.get('/api/cart/subtotal')
        setSubtotal(response.data);
    }
    const calcItemTotal = (val) => {
        return val.quantity * val.price;
    }

    const calcTax = subtotal => {
        return  parseInt((subtotal * 0.0825));
    }


    return (
        <div>
            <div className="payment-heading">
           <Link to="/user/cart/checkout"><i className="fas fa-angle-left"></i></Link>
           <h2 className="payme">Place Order</h2>
           </div>
        <div className="Review">
           <div className="Review-Cart">
            { cartInfo.length > 0 ? cartInfo.map( item => (
                <ReviewItem 
                    key={uuid()}
                    img={item.img}
                    quantity={item.quantity}
                    name={item.name}
                    size={item.size}
                    itemTotal={calcItemTotal}
                    item={item}
                />
            ))
                : 
                null
            }
           </div>

           <ReviewTotal subtotal={subtotal} tax={tax} total={total}/>

           <div className="Review-User-info">
            { userInfo ? 
                    <ReviewUserInfo 
                        firstName={userInfo.firstName}
                        lastName={userInfo.lastName}
                        email={userInfo.email}
                    /> 
                    : 
                    null
                }
           </div>

           <div className="Review-Address-info">
                { addressInfo ? 
                    <ReviewAddressInfo 
                        address={addressInfo.address}
                        city={addressInfo.city}
                        st={addressInfo.st}
                        zipcode={addressInfo.zipcode}
                    /> 
                    : 
                    null
                }
           </div>
                <Payment />
        </div>
        </div>
    )
}

export default ReviewOrder;



// const mapStateToProp = state => {
//     const { firstName, lastName, email, city, st, zipcode, address } = state.userReducer;
//     return { 
//         firstName,
//         lastName,
//         email,
//         city,
//         st,
//         zipcode,
//         address
//     }
// }