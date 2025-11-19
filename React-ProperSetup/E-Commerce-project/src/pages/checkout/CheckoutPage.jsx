import './CheckoutPage.css';
import { CheckoutHeader } from './CheckoutHeader';
import { CheckoutGrid } from './CheckoutGrid';
export function CheckoutPage({ cart, deliveryOptions, paymentSummary, }) {
    return (
        <>
            <title>Checkout Page</title>
            <link rel="icon" href="home-favicon.png" />
            <CheckoutHeader cart={cart}></CheckoutHeader>
            <div className="checkout-page">
                <div className="page-title">Review your order</div>
                <CheckoutGrid
                    cart={cart}
                    deliveryOptions={deliveryOptions}
                    paymentSummary={paymentSummary}
                />
            </div>
        </>
    );
}