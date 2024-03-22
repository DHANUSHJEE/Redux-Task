React Redux Shopping Cart Component :

This React component, Cart, is designed to display a shopping cart interface where users can view items, adjust quantities, and remove items from their cart. It leverages React Redux for managing state.


Features :

* Display a list of items in the cart, including details like item name, description, brand, stock, rating, and thumbnail image.
* Users can adjust the quantity of each item in the cart by incrementing or decrementing the quantity using "+" and "-" buttons.
* Users can remove items from the cart by clicking the "Remove" button associated with each item.
* Display the total quantity of items in the cart.
* Display the total price of all items in the cart.
* Provide a "Proceed to Pay" button for users to navigate to the payment page or perform other checkout-related actions.
  
Usage :

* To use this component in your React Redux application:

* Copy the Cart.jsx file into your project.

* Import the Cart component into your desired parent component.

* Connect the Cart component to the Redux store using the connect function from react-redux.

* Dispatch actions to update the Redux store state for managing the cart items and quantities.

Deployed Url : https://stunning-smakager-702be7.netlify.app/