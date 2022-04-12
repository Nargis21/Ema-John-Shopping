import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault()
        const shippingInfo = { name, email, address, phone }
        console.log(shippingInfo)
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Info</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} type="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="text" required />
                    </div>
                    <input style={{ marginBottom: '20px' }} className='form-submit' type="submit" value="Shipping Add" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;