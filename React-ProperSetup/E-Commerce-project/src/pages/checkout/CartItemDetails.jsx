import axios from "axios";
import { FormatMoney } from "../../utils/Money";
import { DeliveryOption } from "./DeliveryOption";
import { useState } from "react";
export function CartItemDetails({ cartItems, deliveryOptions, loadCart }) {
    const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
    const [quantity, setQuantity] = useState(cartItems.quantity);
    const updateQuantity = async () => {
  if (!isUpdatingQuantity) {
    setIsUpdatingQuantity(true);
    return;
  }

  const cartItemId = cartItems.id ?? cartItems.cartItemId ?? cartItems.productId;
  try {
    const res = await axios.put(`/api/cart-items/${cartItemId}`, { quantity: Number(quantity) });
    // if API returns updated item, use it to update UI immediately
    const updated = res?.data;
    if (updated && typeof updated.quantity !== 'undefined') {
      setQuantity(updated.quantity);
    }
    await loadCart(); // still refresh parent
  } catch (err) {
    console.error('Failed to update quantity', err);
  } finally {
    setIsUpdatingQuantity(false);
  }
};
    const updateQuantityInput = (event) => {
        setQuantity(event.target.value);
    };

    const handleQuantityKeyDown = (event) => {
        const keyPressed = event.key;

        if (keyPressed === 'Enter') {
            event.preventDefault(); // very important — prevents default form submit
            updateQuantity();
        } else if (keyPressed === 'Escape') {
            setQuantity(cartItems.quantity);
            setIsUpdatingQuantity(false);
        }
    };
    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItems.productId}`);
        loadCart();
    }
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
                            Quantity: {
                                isUpdatingQuantity ? <input type="text" className="quantity-textbox"
                                    value={quantity} onChange={updateQuantityInput} onKeyDown={handleQuantityKeyDown} />
                                    : <span className="quantity-label">{cartItems.quantity}</span>}
                        </span>
                        <span className="update-quantity-link link-primary" onClick={updateQuantity}>
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                            Delete
                        </span>
                    </div>
                </div>
                <DeliveryOption deliveryOptions={deliveryOptions} cartItems={cartItems} loadCart={loadCart} />
            </div>
        </>
    );
}