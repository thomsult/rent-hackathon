import { React, useState, useEffect } from 'react';
import CheckoutComponent from '../components/Checkout/CheckoutComponent';
import ModalPaiement from '../components/Checkout/ModalPaiement';
import axios from 'axios'

const Checkout = () => {
// useEffect (() => {
//     axios
//     .get


// }, [])

    const [showModal, setShowModal] = useState(false)
    return (
        <div>
           <CheckoutComponent showModal={showModal} setShowModal={setShowModal}/>
           {showModal && <ModalPaiement setShowModal={setShowModal}/>}

        </div>
    );
};

export default Checkout;