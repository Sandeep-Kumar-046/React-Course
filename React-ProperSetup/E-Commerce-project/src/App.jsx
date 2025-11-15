import {HomePage} from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/tracking/TrackingPage';
import { ErrorPage } from './components/ErrorPage';
import './App.css';
import { Routes,Route } from 'react-router';

function App() {
  return (
    <>
        <Routes>
            <Route index element={<HomePage/>} />
            <Route path="checkout" element={<CheckoutPage/>} />
            <Route path="orders" element={<OrdersPage/>}/>
            <Route path="tracking-page" element={<TrackingPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </>
  )
}

export default App
