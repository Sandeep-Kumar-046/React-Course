import axios from 'axios';
import { useEffect,useState } from 'react';
import './HomePage.css';
import { ProductGrid } from './ProductsGrid';
import { Header } from '../../components/Header';
export function HomePage({cart, loadCart}) {
    const [products,setProducts]=useState([]); 
    useEffect(()=>{
        const getHomeData=async ()=>{
            const response=await axios.get('/api/products')
            setProducts(response.data);
        }
        getHomeData();
    },[]);
    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" href="home-favicon.png" />
            <Header cart={cart} />
            <div className="home-page">
                <ProductGrid products={products} key={products.id} loadCart={loadCart}/>
            </div>
        </>
    );
}

export default HomePage