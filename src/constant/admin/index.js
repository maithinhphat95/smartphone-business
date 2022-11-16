import { faker } from "@faker-js/faker";
export const yearAxis = [2018, 2019, 2020, 2021, 2022];
export const monthAxis = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
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
  chartColor1: "#ff6384", //Light Pink
  chartColor2: "#35a2eb", //Light Blue
  chartColor3: "#1d9e63", //Green
  chartColor4: "#ff6700", //Orange
  chartColor5: "#cd3c99", //Pirple
  chartColor6: "#f3d522", //Yellow
  chartColor7: "#35a2eb", //Light Blue
  chartColor8: "#ff6384", //Light Pink
  chartColor9: "#52514f", //Gray
  chartColor10: "#034c9d", //Heavy Blue
};
export const adminColorDark = {
  primary: "#E0E0E0",
  secondary: "white",
  background: "#9999",
  shadow: "#cccc",
  text: "#ffff",
  chartColor1: "#ff6384", //Light Pink
  chartColor2: "#35a2eb", //Light Blue
  chartColor3: "#1d9e63", //Green
  chartColor4: "#ff6700", //Orange
  chartColor5: "#cd3c99", //Pirple
  chartColor6: "#f3d522", //Yellow
  chartColor7: "#35a2eb", //Light Blue
  chartColor8: "#ff6384", //Light Pink
  chartColor9: "#52514f", //Gray
  chartColor10: "#034c9d", //Heavy Blue
};
export const orderStatus = {
  prepare: "Preparing",
  delivery: "Delevering",
  received: "Received",
};

// Create fake order item function
function FakeOrderItem(no, id, user, date, subtotal, bonus, total, status) {
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
      { id: 1, productId: "1", coupon: "abc", quantity: 2 },
      { id: 2, productId: "2", coupon: "def", quantity: 1 },
      { id: 3, productId: "3", coupon: "123", quantity: 3 },
      { id: 4, productId: "4", coupon: "abc", quantity: 1 },
    ],
  };
}
let i = 1;
// Init the rows by order list formular, fixed to other table in the future
export const tableRows = {
  order: [
    FakeOrderItem(
      i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      2450,
      -20,
      2380,
      orderStatus.delivery
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      2200,
      -20,
      2380,
      orderStatus.prepare
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      2410,
      -20,
      2380,
      orderStatus.delivery
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      2120,
      -20,
      2480,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      2420,
      -20,
      2280,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      2402,
      -20,
      2220,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      2440,
      -10,
      2380,
      orderStatus.received
    ),
    FakeOrderItem(
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
    FakeOrderItem(
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
    FakeOrderItem(
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
    FakeOrderItem(
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
  ],
  product: [
    {
      id: "1",
      name: "Iphone 13 Pro Max",
      picture:
        "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1051159192.jpeg",
      color: ["red", "green"],
      priceOld: 24000000,
      priceNew: 20000000,
      memory: 250,
      stock: 10,
      sold: 20,
    },
    {
      id: "2",
      name: "Iphone 13 Pro Max",
      picture:
        "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1051159192.jpeg",
      color: ["red", "green"],
      priceOld: 24000000,
      priceNew: 20000000,
      memory: 128,
      stock: 10,
      sold: 20,
    },
  ],
};
export const tableHead = {
  order: ["NO", "ID", "USER", "DATE", "SUBTOTAL", "BONUS", "TOTAL", "STATUS"],
  purchased: [
    "No",
    "Product",
    "Quantity",
    "Price",
    "Subtotal",
    "Coupon",
    "Bonus",
    "Total",
  ],
  product: [
    "NO",
    "ID",
    "NAME",
    "COLOR",
    "PRICE",
    "MEMORY",
    "STOCKING",
    "SOLD",
    "ACTION",
  ],
};

export const couponList = [
  { id: 1, name: "abc", type: "direct", value: 20 },
  { id: 2, name: "def", type: "percent", value: 20 },
  { id: 3, name: "123", type: "percent", value: 20 },
  { id: 4, name: "456", type: "percent", value: 20 },
];

export const productList = [
  {
    id: "1",
    name: "Iphone 13 Pro Max",
    color: "green",
    picture:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1051159192.jpeg",
    price: 1000,
  },
  {
    id: "2",
    name: "Iphone 14 Pro Max",
    color: "purple",
    picture:
      "https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/iPhone_14_Pro_Max-Pur1.jpg",
    price: 1000,
  },
  {
    id: "3",
    name: "Iphone 12 Pro Max",
    color: "yellow",
    picture:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_26647/iphone-12-pro-m_main_368_450.png.webp",
    price: 1000,
  },
  {
    id: "4",
    name: "Iphone 11",
    color: "purple green",
    picture:
      "https://cdn.tgdd.vn/Products/Images/42/210644/iphone-11-xanhla-200x200.jpg",
    price: 1000,
  },
];
