import { faker } from "@faker-js/faker";

export const yearlyRevenue = [
  {
    year: 2018,
    target: 250,
    actual: 260,
  },
  {
    year: 2019,
    target: 250,
    actual: 200,
  },
  {
    year: 2020,
    target: 250,
    actual: 180,
  },
  {
    year: 2021,
    target: 250,
    actual: 260,
  },
  {
    year: 2022,
    target: 250,
    actual: 290,
  },
];

export const adminColorLight = {
  primary: "#E0E0E0",
  secondary: "white",
  background: "#f0f0f0",
  shadow: "#ccc",
  text: "black",
  //  chartColor1: "#52514f", //Gray
  //  chartColor2: "#034c9d", //Heavy Blue
  chartColor1: "#ff6384", //Light Pink
  chartColor2: "#35a2eb", //Light Blue
  chartColor3: "#1d9e63", //Green
  chartColor4: "#ff6700", //Orange
  chartColor5: "#cd3c99", //Pirple
  chartColor6: "#f3d522", //Yellow
  chartColor7: "#35a2eb", //Light Blue
  chartColor8: "#ff6384", //Light Pink
};
export const adminColorDark = {
  primary: "",
  secondary: "",
  background: "#252930",
  text: "white",
};
export const orderStatus = {
  prepare: "Preparing",
  delivery: "Delevering",
  received: "Received",
};

// Create fake order item function
function fakeOrderItem(no, id, user, date, subtotal, bonus, total, status) {
  return {
    no,
    id,
    user,
    date,
    subtotal,
    bonus,
    total,
    status,
    purchasedList: [
      { id: 1, productId: "uysdiu223d", coupon: "abc", quantity: 2 },
      { id: 2, productId: "uysdi2u223", coupon: "def", quantity: 1 },
      { id: 3, productId: "uysd4u2223", coupon: "123", quantity: 3 },
      { id: 4, productId: "uysd2u2223", coupon: "abc", quantity: 1 },
    ],
  };
}
let i = 1;
// Init the rows by order list formular, fixed to other table in the future
export const rows = [
  fakeOrderItem(
    i,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    -20,
    2380,
    orderStatus.delivery
  ),
  fakeOrderItem(
    ++i,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    -20,
    2380,
    orderStatus.prepare
  ),
  fakeOrderItem(
    ++i,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    -20,
    2380,
    orderStatus.delivery
  ),
  fakeOrderItem(
    ++i,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    -20,
    2380,
    orderStatus.received
  ),
  fakeOrderItem(
    ++i,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    -20,
    2380,
    orderStatus.received
  ),
  fakeOrderItem(
    ++i,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    -20,
    2380,
    orderStatus.received
  ),
  fakeOrderItem(
    ++i,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    -20,
    2380,
    orderStatus.received
  ),
  fakeOrderItem(
    ++i,
    faker.random.alphaNumeric(10, {
      casing: "mixed",
    }),
    "phat",
    faker.date.past(2).toLocaleString(),
    2400,
    -20,
    2380,
    orderStatus.received
  ),
];

export const cellHead = {
  order: ["#", "ID", "USER", "DATE", "SUBTOTAL", "BONUS", "TOTAL", "STATUS"],
  purchased: [
    "#",
    "Product",
    "Quantity",
    "Price",
    "Subtotal",
    "Coupon",
    "Bonus",
    "Total",
  ],
};

export const couponList = [
  { id: 1, name: "abc", type: "direct", value: 20 },
  { id: 2, name: "def", type: "percent", value: 20 },
  { id: 3, name: "123", type: "percent", value: 20 },
  { id: 4, name: "456", type: "percent", value: 20 },
];
