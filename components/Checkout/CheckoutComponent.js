import { react, useState } from "react"
import ModalPaiement from "./ModalPaiement"

const products = [
  {
    id: 1,
    name: 'High Wall Tote',
    href: '#',
    price: '$210.00',
    color: 'White and black',
    size: '15L',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, white handles, and black drawstring top.',
  },
  // More products...
]



export default function CheckoutComponent({ setShowModal, showModal }) {
    return (
      <div className="bg-white">
        {/* Background color split screen for large screens */}
        <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
        <div className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-indigo-900" aria-hidden="true" />
  
        <header className="relative max-w-7xl mx-auto bg-white py-6 lg:bg-transparent lg:grid lg:grid-cols-2 lg:gap-x-16 lg:px-8 lg:pt-16 lg:pb-10">
          <div className="max-w-2xl mx-auto flex px-4 lg:max-w-lg lg:w-full lg:px-0">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                src="/image1.svg"
                alt=""
                className="h-8 w-auto lg:hidden"
              />
              <img
                src="/image1.svg"
                alt=""
                className="hidden lg:block h-8 w-auto"
              />
            </a>
          </div>
        </header>
  
        <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2">
          <h1 className="sr-only">Checkout</h1>
  
          <section
            aria-labelledby="summary-heading"
            className="bg-black text-indigo-300 pt-6 pb-12 md:px-10 lg:max-w-lg lg:w-full lg:mx-auto lg:px-0 lg:pt-0 lg:pb-24 lg:bg-transparent lg:row-start-1 lg:col-start-2"
          >
            <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
              <h2 id="summary-heading" className="sr-only">
                Résumé de réservation
              </h2>
  
              <dl>
                <dt className="text-sm font-medium">Total</dt>
                <dd className="mt-1 text-3xl font-extrabold text-white">200.00 EUR</dd>
              </dl>
  
              <ul role="list" className="text-sm font-medium divide-y divide-white divide-opacity-10">
                {products.map((product) => (
                  <li key={product.id} className="flex items-start py-6 space-x-4">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="flex-none w-20 h-20 rounded-md object-center object-cover"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-white">{product.name}</h3>
                      <p>{product.color}</p>
                      <p>{product.size}</p>
                    </div>
                    <p className="flex-none text-base font-medium text-white">200 EUR</p>
                  </li>
                ))}
              </ul>
  
              <dl className="text-sm font-medium space-y-6 border-t border-white border-opacity-10 pt-6">
                <div className="flex items-center justify-between">
                  <dt>Prix hors option</dt>
                  <dd>570.00 EUR</dd>
                </div>
  
                <div className="flex items-center justify-between">
                  <dt>Prix journalier</dt>
                  <dd>25.00 EUR</dd>
                </div>
  
                <div className="flex items-center justify-between">
                  <dt>Assurance</dt>
                  <dd>47.20 EUR</dd>
                </div>
  
                <div className="flex items-center justify-between border-t border-white border-opacity-10 text-white pt-6">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">200.00 EUR</dd>
                </div>
              </dl>
            </div>
          </section>
  
          <section
            aria-labelledby="payment-and-shipping-heading"
            className="py-16 lg:max-w-lg lg:w-full lg:mx-auto lg:pt-0 lg:pb-24 lg:row-start-1 lg:col-start-1"
          >
            <h2 id="payment-and-shipping-heading" className="sr-only">
              Détails de paiement
            </h2>
  
            <form>
              <div className="max-w-2xl mx-auto px-4 lg:max-w-none lg:px-0">
                <div>
                  <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                    Information
                  </h3>
  
                  <div className="mt-6">
                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email-address"
                        name="email-address"
                        autoComplete="email"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
  
                <div className="mt-10">
                  <h3 id="payment-heading" className="text-lg font-medium text-gray-900">
                    Information de paiement
                  </h3>
  
                  <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                    <div className="col-span-3 sm:col-span-4">
                      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                        Numéro de carte
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="card-number"
                          name="card-number"
                          autoComplete="cc-number"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div className="col-span-2 sm:col-span-3">
                      <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                        Date d'expiration (MM/YY)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="expiration-date"
                          id="expiration-date"
                          autoComplete="cc-exp"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                        CVC
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="cvc"
                          id="cvc"
                          autoComplete="csc"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="mt-10">
                  <h3 id="shipping-heading" className="text-lg font-medium text-gray-900">
                    Information de facturation
                  </h3>
  
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                    <div className="sm:col-span-3">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Addresse
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          autoComplete="street-address"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Ville
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="city"
                          name="city"
                          autoComplete="address-level2"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province (US)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="region"
                          name="region"
                          autoComplete="address-level1"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        Postal code
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="postal-code"
                          name="postal-code"
                          autoComplete="postal-code"
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
  

  
                <div className="mt-10 flex justify-end pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500" onClick={() => setShowModal(true)}
                  >
                    Pay now
                  </button>
                </div>
              </div>
            </form>
          </section>
        </main>
      </div>
    )
  }