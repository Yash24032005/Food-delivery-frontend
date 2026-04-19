const BASE_URL = "http://localhost:5000/api";

const getToken = () => localStorage.getItem("token");

// AUTH
export const loginUser = (data) =>
  fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const registerUser = (data) =>
  fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(res => res.json());

// FOOD
export const getFoods = () =>
  fetch(`${BASE_URL}/food`).then(res => res.json());

export const addFood = (data) =>
  fetch(`${BASE_URL}/food/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken()
    },
    body: JSON.stringify(data)
  });

// CART
export const getCart = () =>
  fetch(`${BASE_URL}/cart`, {
    headers: { "Authorization": getToken() }
  }).then(res => res.json());

export const addToCart = (item) =>
  fetch(`${BASE_URL}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken()
    },
    body: JSON.stringify(item)
  });

// ORDER
export const placeOrder = (data) =>
  fetch(`${BASE_URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken()
    },
    body: JSON.stringify(data)
  });

export const getOrders = () =>
  fetch(`${BASE_URL}/order`, {
    headers: { "Authorization": getToken() }
  }).then(res => res.json());