export function FormatMoney(priceCents)
{
    return `$${(priceCents / 100).toFixed(2)}`;
}