import axios from 'axios';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import { ErrorPage } from './components/ErrorPage';
import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
window.axios = axios;
function App() {
  const [deliveryOptions, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  const [cart, setCart] = useState([]);
  const loadCart = async () =>{
    const response=await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }
  useEffect(() => {
    loadCart();
  }, []);
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
  }, [cart]);


  
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
        <Route path="checkout" element={<CheckoutPage
          cart={cart}
          deliveryOptions={deliveryOptions}
          paymentSummary={paymentSummary}
          loadCart={loadCart}
        />} />
        <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />
        <Route path="tracking-page/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<ErrorPage cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
