const data = [
  {
    id: 1,
    name: "Tom",
    items: 5,
    item_name: "item name",
    amount: "Rs 200.50",
    total_price: "Rs 200.50",
    status: "Order Received",
    address: "address 1",
  },
  {
    id: 2,
    name: "John",
    item_name: "item name",
    items: 6,
    amount: "Rs 200.00",
    total_price: "Rs 200.50",
    status: "Order Received",
    address: "address 1",
  },
  {
    id: 3,
    name: "Morgan",
    item_name: "item name",
    items: 7,
    amount: "Rs 200.00",
    total_price: "Rs 200.50",
    status: "Order Received",
    address: "address 1",
  },
  {
    id: 4,
    name: "Jessy",
    item_name: "item name",
    items: 2,
    amount: "Rs 200.00",
    total_price: "Rs 200.50",
    status: "Order Received",
    address: "address 1",
  },
  {
    id: 5,
    name: "Lisa",
    item_name: "item name",
    items: 7,
    amount: "Rs 200.00",
    total_price: "Rs 200.50",
    status: "Order Received",
    address: "address 1",
  },
  {
    id: 6,
    name: "Jessica",
    item_name: "item name",
    items: 7,
    total_price: "Rs 200.50",
    amount: "Rs 200.00",
    status: "Order Received",
    address: "address 1",
  },
  {
    id: 7,
    name: "Minu",
    item_name: "item name",
    items: 7,
    amount: "Rs 200.00",
    total_price: "Rs 200.50",
    status: "Order Received",
    address: "address 1",
  },
  {
    id: 8,
    name: "Deepa",
    item_name: "item name",
    items: 7,
    total_price: "Rs 200.50",
    amount: "Rs 200.00",
    status: "Order Received",
    address: "address 1",
  },
];

export const getOrderList = () => data;

export const getOrderDetails = (id) => {
  if (!id) return {};
  return data.find((d) => d.id == id) || {};
};
