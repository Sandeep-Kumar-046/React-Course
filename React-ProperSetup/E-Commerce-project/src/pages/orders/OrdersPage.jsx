import './OrdersPage.css';
import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';
import { Header } from '../../components/Header';
import { OrdersGrid } from './OrdersGrid';
export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const getProducts=async()=>{
            const response=await axios.get('/api/orders?expand=products')
            setOrders(response.data);
        }
        getProducts();
    }, []);
    return (
        <>
            <link rel="icon" href="home-favicon.png" />
            <title>Orders Page</title>
            <Header cart={cart} />
            <div className="orders-page">
                <div className="page-title">Your Orders</div>
                <OrdersGrid orders={orders}/>
            </div>
        </>
    );
}
export default OrdersPage