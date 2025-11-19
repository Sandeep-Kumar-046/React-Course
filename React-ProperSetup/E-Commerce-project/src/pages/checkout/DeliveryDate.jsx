import dayjs from "dayjs";
export function DeliveryDate(selectDeliveryOption) {
    return (
        <>
            <div className="delivery-date">
                Delivery date:
                {
                    dayjs(selectDeliveryOption.estimatedDeliveryTimesMs).format('dddd, MMMM D')
                }
            </div>
        </>
    );
}