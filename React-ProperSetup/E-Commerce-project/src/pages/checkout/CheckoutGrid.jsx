import { FormatMoney } from "../../utils/Money";
import { PaymentSummary } from "./PaymentSummary";
import { OrderSummary } from "./OrderSummary";
export function CheckoutGrid({ cart, deliveryOptions, paymentSummary }) {
    return (
        <div className="checkout-grid">
            <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />
            <PaymentSummary paymentSummary={paymentSummary} />
        </div>
    );
}