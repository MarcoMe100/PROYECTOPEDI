import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Api } from '../Services/api';


function ProductTypes() {
  const [productTypes, setProductTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  // Add state for shopping cart
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get(Api + 'tipoproductos/listar')
      .then(response => {
        setProductTypes(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleTypeClick = (typeCode) => {
    axios.get(Api + `productos/Buscaridtipo?TipoProducto=${typeCode}`)
      .then(response => {
        console.log(response.data.data);
        setProducts(response.data.data);
        setSelectedType(typeCode);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  const handleAddToCart = (product) => {
    console.log(product)
    // Check if item is already in cart
    let itemInCart = cartItems.find(item => item.Nombre === product.Nombre);
  
    if (itemInCart) {
      // If item is already in cart, update quantity
      setCartItems(cartItems.map(item =>
        item.Nombre === product.Nombre ? {...itemInCart, quantity: itemInCart.quantity +1} : item
      ));
    } else {
      // If item is not in cart yet, add it with quantity of 1 and price from product
      setCartItems([...cartItems,{...product ,quantity:1, Precio: product.Precio}]);
    }
  }
  
  const handleIncreaseQuantity = (product) => {
    setCartItems(cartItems.map(item =>
      item.Nombre === product.Nombre ? {...item, quantity: item.quantity + 1} : item
    ));
  }
  
  const handleDecreaseQuantity = (product) => {
    setCartItems(cartItems.map(item =>
      item.Nombre === product.Nombre ? {...item, quantity: Math.max(0, item.quantity - 1)} : item
    ));
  }
  
  const handleRemoveFromCart = (product) => {
  setCartItems(cartItems.filter(item => item.Nombre !== product.Nombre));
  }
  
  // Calculate cart total by summing the total for each item (quantity * price)
  const cartTotal = cartItems.reduce((total, item) => total + (item.quantity * item.Precio), 0);
  
  return (
   <div>
     <h2>Selecciona una categoría de producto:</h2>
     <div>
       {productTypes.map(type => (
         <button key={type.CodigoTipo} onClick={() => handleTypeClick(type.CodigoTipo)} value={type.CodigoTipo}>{type.NombreTipo}</button>
       ))}
     </div>
     {selectedType && (
       <div>
  
         <h2>Productos:</h2>
         <div>
           {products.map(product => (
             <>
               <button key={product.CodigoProducto} onClick={() => handleAddToCart(product)}>{product.Nombre}</button><br />
             </>
           ))}
         </div>
  
         {/* Display shopping cart */}
         <h2>Carrito de compras:</h2>
         <ul>
         {cartItems.map(item => (
            <li key={item.Codigo}>
              Código: {item.Codigo} - {item.Nombre} - Cantidad: {item.quantity} - Total: ${item.quantity * item.Precio}
              <button onClick={() =>handleDecreaseQuantity(item)}>-</button>
              <button onClick={() => handleIncreaseQuantity(item)}>+</button> 
              <button onClick={() =>handleRemoveFromCart(item)}>Remove</button> 
            </li> 
          ))}
         </ul>
  
         {/* Display cart total */}
         <h2>Total del carrito: ${cartTotal}</h2>
   
       </div>
     )}
   </div>
  );
  }
  
  export default ProductTypes;