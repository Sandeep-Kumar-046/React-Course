import { DeliveryDate } from "./DeliveryDate";
import { CartItemDetails } from "./CartItemDetails";
export function OrderSummary({ cart, deliveryOptions,loadCart }) {
    return (
        <div className="order-summary">
            {cart.map((cartItems) => {
                const selectDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === cartItems.deliveryOptionId;
                });
                return (
                    <div key={cartItems.productId} className="cart-item-container">
                        <DeliveryDate selectDeliveryOption={selectDeliveryOption}/>
                        <CartItemDetails cartItems={cartItems} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
                    </div>
                );
            })}
        </div>
    );
}