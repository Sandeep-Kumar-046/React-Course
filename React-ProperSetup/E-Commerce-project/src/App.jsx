import axios from 'axios';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import { ErrorPage } from './components/ErrorPage';
import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';

function App() {
  const [deliveryOptions, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const getDeliveryData = async () => {
      const response = await axios.get(('/api/delivery-options?expand=estimatedDeliveryTime'))
      setDeliveryOption(response.data);
    }
    getDeliveryData();
    const getPayemntSummary = async() => {
      const response = await axios.get(('/api/payment-summary'))
      setPaymentSummary(response.data);
    }
    getPayemntSummary();
  }, []);


  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      })
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage
          cart={cart}
          deliveryOptions={deliveryOptions}
          paymentSummary={paymentSummary}
        />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking-page/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<ErrorPage cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
