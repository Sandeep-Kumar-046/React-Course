import axios from 'axios';
import { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router';
import './HomePage.css';
import { ProductGrid } from './ProductsGrid';
import { Header } from '../../components/Header';
export function HomePage({cart, loadCart}) {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');
    const [products,setProducts]=useState([]); 
    useEffect(()=>{
        const getHomeData=async ()=>{
            const urlPath = search ? `/api/products?search=${search}` : '/api/products';
            const response = await axios.get(urlPath);
            setProducts(response.data);
        }
        getHomeData();
    },[search]);
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