import { React, useState } from 'react';
import CheckoutComponent from '../components/Checkout/CheckoutComponent';
import ModalPaiement from '../components/Checkout/ModalPaiement';

const Checkout = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
           <CheckoutComponent showModal={showModal} setShowModal={setShowModal}/>
           {showModal && <ModalPaiement setShowModal={setShowModal}/>}

        </div>
    );
};

export default Checkout;