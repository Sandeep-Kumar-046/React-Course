import { FormatMoney } from "../../utils/Money";
import { PaymentSummary } from "./PaymentSummary";
import { OrderSummary } from "./OrderSummary";
export function CheckoutGrid({ cart, deliveryOptions, paymentSummary,loadCart }) {
    return (
        <div className="checkout-grid">
            <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
            <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
    );
}