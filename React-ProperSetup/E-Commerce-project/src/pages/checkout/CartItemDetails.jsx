import { FormatMoney } from "../../utils/Money";
import { DeliveryOption } from "./DeliveryOption";
export function CartItemDetails({cartItems,deliveryOptions,loadCart}) {
    return (
        <>
            <div className="cart-item-details-grid">
                <img className="product-image"
                    src={cartItems.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {cartItems.product.name}
                    </div>
                    <div className="product-price">
                        {FormatMoney(cartItems.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                        <span>
                            Quantity: <span className="quantity-label">{cartItems.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                            Delete
                        </span>
                    </div>
                </div>
                <DeliveryOption deliveryOptions={deliveryOptions} cartItems={cartItems} loadCart={loadCart}/>
            </div>
        </>
    );
}