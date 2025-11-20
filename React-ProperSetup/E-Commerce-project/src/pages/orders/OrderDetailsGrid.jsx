import dayjs from "dayjs";
import axios from "axios";
import { Fragment } from "react";
import { Link } from 'react-router';
export function OrderDetailsGrid({ order, loadCart }) {
    return (
        <div className="order-details-grid">
            {/* {console.log(order)} */}
            {order.products.map((orderProduct) => {
                const addBackToCart = async () => {
                    await axios.post('/api/cart-items', {
                        productId: orderProduct.product.id,
                        quantity: 1
                    })
                    orderProduct.quantity=orderProduct.quantity-1;
                    await loadCart();
                };
                return (
                    <Fragment key={orderProduct.product.id}>
                        <div className="product-image-container">
                            <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">
                            <div className="product-name">
                                {orderProduct.product.name}
                            </div>
                            <div className="product-delivery-date">
                                Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                            </div>
                            <div className="product-quantity">
                                Quantity: {orderProduct.quantity}
                            </div>
                            <button className="buy-again-button button-primary" onClick={addBackToCart}>
                                <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                <span className="buy-again-message">Add to Cart</span>
                            </button>
                        </div>

                        <div className="product-actions">
                            <Link to={`/tracking-page/${order.id}/${orderProduct.productId}`}>
                                <button className="track-package-button button-secondary">
                                    Track package
                                </button>
                            </Link>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
}