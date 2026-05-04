# ShopX – E-commerce Product Page with Cart

A fully functional front-end e-commerce web application built using HTML, Tailwind CSS, CSS, and JavaScript.
This project simulates a real shopping experience similar to major e-commerce platforms, including product browsing, search, cart management, and checkout flow.

---

## Features

* Sticky navbar and category bar
* Live search functionality
* Product listing with:

  * Images
  * Ratings
  * Review count
  * Discount pricing
  * Deal / Best Seller badges
* Category filtering (Electronics, Fashion)
* Product detail page
* Cart page with structured layout
* Remove items from cart
* Subtotal calculation
* “Proceed to Buy” functionality
* Cart persistence using LocalStorage

---

## Project Structure

```
ecommerce-project/
│── index.html        # Home page (product listing)
│── product.html      # Product details page
│── cart.html         # Cart page
│── style.css         # Custom styling
│── script.js         # Application logic
│── products.js       # Product data
```

---

## Technologies Used

* HTML5
* CSS3
* Tailwind CSS
* JavaScript (Vanilla JS)
* LocalStorage

---

## How to Run the Project
https://shop-x-two.vercel.app/
---

## Inputs

* User search input through the search bar
* Category selection using navigation buttons
* Add to cart actions
* Remove item actions in cart
* Order button interaction

---

## Outputs

* Filtered product list based on search or category
* Product detail page rendering
* Dynamic cart item display
* Total price calculation
* Cart data stored and retrieved using LocalStorage
* Order confirmation message

---

## How It Works

* Product data is stored in `products.js`
* JavaScript dynamically renders products and UI components
* Cart data is stored in LocalStorage for persistence
* Navigation between pages is handled using `location.href`
* Search functionality filters products in real time

---

## UI Highlights

* Clean and structured layout
* Sticky navigation for better usability
* Responsive product grid
* Card-based product display
* Highlighted pricing and deals

---

## Summary

This project demonstrates:

* Frontend development skills
* DOM manipulation
* State management using LocalStorage
* Implementation of real-world e-commerce features
