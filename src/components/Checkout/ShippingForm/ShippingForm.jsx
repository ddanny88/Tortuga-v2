import React, { useState } from 'react';
import ShippingIput from './ShippingInput/ShippingInput';
import ShippingButton from './ShippingButton/ShippingButton';
import { connect } from 'react-redux';
import './ShippingForm.css'
import { updateAddress, updateCity, updateState, updateZipcode, clearAddressInput } from '../../../ducks/reducers/userReducer';
import axios from 'axios'

const ShippingForm = (props) => {
    const [error, setError] = useState('');
    const { address, st, city, zipcode } = props;

    const submitAddress = async (e) => {
        e.preventDefault();
        let data = {
            address,
            st,
            city,
            zipcode
        }
        let response = await axios.post('/api/user/address', data);
        if (response.data.error) {
            setError(response.data.error);
        } else {
            props.clearAddressInput();
            setError(null);
        }
    }

    const handleShippingInput = (e) => {
       const { name, value } = e.target;
       name === 'address' && props.updateAddress(value);
       name === 'city' && props.updateCity(value);
       name === 'state' && props.updateState(value);
       name === 'zipcode' && props.updateZipcode(value);
    }

    return (
        <div className="Shipping">
            <h3 className="ship-heading">Shipping Address</h3>
           <form className="ShippingForm" onSubmit={submitAddress}>
                <ShippingIput
                    name="address"
                    value={address}
                    label="Address"  
                    handleChange={handleShippingInput}
                    placeholder="address"
                />
                <ShippingIput
                    name="city"
                    value={city}
                    handleChange={handleShippingInput}
                    label="City"
                    placeholder="city"
                />
                <ShippingIput
                    name="state"
                    value={st}
                    handleChange={handleShippingInput}
                    placeholder="state"
                    label="State"
                /> 
                <ShippingIput
                    name="zipcode"
                    value={zipcode}
                    handleChange={handleShippingInput}
                    placeholder="zipcode"
                    label="Zip Code"
                />  
                { error && <p className="addressError">{error}</p> }
                <ShippingButton />
           </form>
        </div>
    )
}

const mapStateToProps = state => {
    const { address, city, st, zipcode} = state.userReducer;
    return {
        address,
        city, 
        st,
        zipcode
    }
}

export default connect(mapStateToProps, { updateAddress, updateCity, updateState, updateZipcode, clearAddressInput })(ShippingForm); 