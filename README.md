# Product List with Pagination and Search

This project is a React-based product listing application that allows users to view, search products. The application includes features like pagination and searching by product name.

## Features

- **Product Listing**: Display products in a grid layout using the `ProductCard` component.
- **Pagination**: Supports pagination to display a limited number of products per page.
- **Search by Name**: Users can search products by their name.
- **Category Filter**: Users can filter products by category.

## Problem Solving Approach

### 1. **Pagination**
   To implement pagination, I calculated the range of products to be displayed on each page. I used `useState` to track the current page and the `itemsPerPage` to determine how many products should be displayed per page.

   - **Steps Taken**:
     - Defined the number of items to display per page (`itemsPerPage`).
     - Created state for the `currentPage` using `useState`.
     - Calculated the starting and ending indices for the products to be displayed on the current page.
     - Used the `Pagination` component to handle the pagination controls and page changes.

### 2. **Search by Product Name**
   To implement product search functionality, I added an input field for searching products by name. On each search, I filtered the product list based on the entered search term.

   - **Steps Taken**:
     - Added a state variable for the search term.
     - Used the `onSearch` function to filter products based on the search term and update the displayed products accordingly.


### 3. **Category Filter**
   To allow users to filter products by category, I added a dropdown select field that lets users choose a category. The product list is filtered based on the selected category.

   - **Steps Taken**:
     - Added a `currentCategory` state to track the selected category.
     - Implemented a dropdown that lists available categories and filters products accordingly when a category is selected.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework used to style the application.
- **Open Food Facts API**: External API used to fetch product data by barcode.
