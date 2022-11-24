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
  primary: "#919090",
  secondary: "#d9d9d9",
  // background: "#f7cbf0",
  background: "#dec9d2",
  header: "",
  itemBackground: "white",
  shadow: "#9b4cd4",
  textColor: "black",
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
  apple: "#52514f",
  samsung: "#034c9d",
  xiaomi: "#ff6700",
  oppo: "#1d9e63",
  vivo: "#cd3c99",
  // nokia: "#f3d522",
  nokia: "#b18e41",

  // highlight1: "#0842A0",
  highlight1: "#ff6800",
  highlight2: "#2e6713",
};
export const adminColorDark = {
  primary: "#E0E0E0",
  secondary: "#343942",
  background: "#212529",
  itemBackground: "#63686c",
  shadow: "#212529",
  textColor: "#f8f9fa",
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
  apple: "#52514f",
  samsung: "#034c9d",
  xiaomi: "#ff6700",
  oppo: "#1d9e63",
  vivo: "#cd3c99",
  // nokia: "#f3d522",
  nokia: "#b18e41",
  // highlight1: "#78acff",
  highlight1: "orange",
  highlight2: "#93ff60",
};
export const orderStatus = {
  prepare: "Preparing",
  delivery: "Delevering",
  received: "Received",
};

export const phoneColor = [
  { name: "trắng", code: "white" },
  { name: "đen", code: "black" },
  { name: "đỏ", code: "red" },
  { name: "lam", code: "blue" },
  { name: "lục", code: "green" },
  { name: "vàng", code: "yellow" },
];

// Create fake order item function
function FakeOrderItem(no, id, user, orderDate, completeDate, total, status) {
  return {
    no,
    id,
    user,
    orderDate,
    completeDate,
    total,
    status,
    purchasedList: [
      { id: 1, productId: "1", quantity: 2 },
      { id: 2, productId: "2", quantity: 1 },
      { id: 3, productId: "3", quantity: 3 },
      { id: 4, productId: "4", quantity: 1 },
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
      faker.date.past(2).toLocaleString(),
      2450,
      orderStatus.delivery
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2200,
      orderStatus.prepare
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2410,
      orderStatus.delivery
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2120,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2420,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2402,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2440,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2400,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2400,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2400,
      orderStatus.received
    ),
    FakeOrderItem(
      ++i,
      faker.random.alphaNumeric(10, {
        casing: "mixed",
      }),
      "phat",
      faker.date.past(2).toLocaleString(),
      faker.date.past(2).toLocaleString(),
      2400,
      orderStatus.received
    ),
  ],
};
export const tableHead = {
  order: [
    "NO",
    "ID",
    "USER",
    "ORDER DATE",
    "COMPLETE DATE",
    "TOTAL",
    "STATUS",
    "ACTION",
  ],
  purchased: ["No", "Product", "Quantity", "Price", "Total"],
  product: [
    "NO",
    "ITEM ID",
    "NAME",
    "BRAND",
    "COLOR",
    "PRICE",
    "MEMORY",
    "STOCK",
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
