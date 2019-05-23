import React from 'react';
import ShippingIput from './ShippingInput/ShippingInput';
import ShippingButton from './ShippingButton/ShippingButton';


import './ShippingForm.css'

const ShippingForm = (props) => {



    const submitAddress = (e) => {
        e.preventDefault();
        console.log('address sent')
    }



    return (
        <div className="Shipping">
            <h3 className="ship-heading">Shipping Address</h3>
           <form className="ShippingForm" onSubmit={submitAddress}>
                <ShippingIput
                    name="address"
                    label="Address"  
                />
                <ShippingIput
                    name="city"
                    label="City"
                />
                <ShippingIput
                    name="state"
                    label="State"
                /> 
                <ShippingIput
                    name="zipcode"
                    label="Zip Code"
                />  

                <ShippingButton />
           </form>
        </div>
    )
}




export default ShippingForm;