import { IcMadeOrder, IcReturns, IcSecure, IcShipping } from "@assets/svgs";

export const listAddOns = [
  "Removable Covers",
  "Matching Ottoman",
  "Extra Cushions",
];

export const listFeature = [
  {
    ic: <IcReturns />,
    title: "Returns & Refunds",
    sub: "accepted within 30 days.",
    tolip: "Returns & Refunds accepted within 30 days.",
    content:
      "<strong>HANDDN accepts product returns/refunds.</strong> If you have an issue with your order, please reach out to our customer support team via email address support@handdn.com to start a request.<br/><br/><strong>Term of exchange:</strong> 30 days from the date you receive the product or as soon as you discover the error when receiving the goods.<br/><br/><strong>Below are the conditions under which a return will proceed:</strong><br/><strong>Conditions apply:</strong>Applicable to all products due to defects from the manufacturer HANDDN or if the product you received does not match the product you ordered in the order information (HANDDN always ensures the product you receive is the most accurate from the color and other specifications at least 90% compared to photos are posted – due to force majeure due to the actual material and light, the actual product has a deviation of less than 10%).<br/><br/><strong>Assuming the product is made right to the order and without any defects, our returns, refunds and remake policy differs depending on each case:</strong> Straps in unused condition (no bending/crease, buckle tongue must not be put through the strap hole) can be returned for a full refund (less shipping fees) within 14 days of order receive.",
  },
  {
    ic: <IcShipping />,
    title: "DHL Shipping",
    sub: "Freeshipping all order over <strong>$450</strong>.",
    tolip: "Free shipping all order over $450.",
    content:
      "With HANDDN, all orders will be dispatched from our warehouse located in Vietnam. Our standard processing time is within 3-5 business days, but for <strong>bespoke watch straps</strong>, it may take 3-7 business days. During peak season, 3-5 business days may be delayed due to the high volume of orders.<br/><br/>We use <strong> DHL Express, UPS, FedEx, </strong>or<strong> Singapore Post </strong>to ship all international orders from Vietnam. These carriers usually deliver within a week, and in some cases, faster than domestic delivery. To make express shipping more affordable for our customers, we subsidize a portion of the shipping cost and don’t charge extra for additional products. The shipping cost depends on the value of your order, and we are not responsible for any customs or taxes that may be imposed on the order. If a customer wants to return their order due to customs or taxes, they will have to pay any additional shipping costs that may arise.",
  },
  {
    ic: <IcSecure />,
    title: "Secure Checkout",
    sub: "verified by PayPal.",
    tolip: "Secure checkout | Verified by PayPal.",
  },
  {
    ic: <IcMadeOrder />,
    title: "Made to Order",
    sub: "100% Hand-crafted.",
    tolip: "Made to Order | 100% Hand-crafted.",
    content:
      "All of our products are made-to-order, which means that once you confirm your order, we immediately begin the fulfillment process. From start to finish, every stage of production - including leather cutting, shaping, sewing, and edge painting - is meticulously executed by hand through the skilled craftsmanship of our artisans. This ensures each item is a unique, premium quality product tailored to your specifications.",
  },
];
