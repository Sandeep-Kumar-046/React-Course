import { ProductContainer } from "./ProductContainer";
export function ProductGrid({products,loadCart}) {
    return (
        <div className="products-grid">
            {
                products.map((products) => {
                    return (
                        <ProductContainer products={products} key={products.id} loadCart={loadCart}/>
                    );
                })
            }
        </div>
    );
}