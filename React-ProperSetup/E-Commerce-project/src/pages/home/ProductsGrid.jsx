import { FormatMoney } from "../../utils/Money";
import { ProductContainer } from "./ProductContainer";
export function ProductGrid({products}) {
    return (
        <div className="products-grid">
            {
                products.map((products) => {
                    return (
                        <ProductContainer products={products}/>
                    );
                })
            }
        </div>
    );
}