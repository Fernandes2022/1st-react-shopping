import React, {useEffect, useState, createContext} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState(loadCart());

  
  function saveCart (cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
   }
  
   function loadCart () {
    const storeCart = localStorage.getItem('cart');
  
    return storeCart ? JSON.parse(storeCart) : [];
   } 
  
   useEffect(() => {
     saveCart(cart);
   }, [cart])

  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id){
          return {
            ...item, amount: cartItem.amount + 1
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

  };
  
  const removeFromCart = (help) => {
      const newCart = cart.filter((item) => {
        return item.id !== help;
      });
      setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }

  const increaseCart = (id) => {
    const newAmount = cart.find((item) => {
      return item.id === id;
    });

    addToCart(newAmount, id);
  }

  const reduceCart = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if(cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item, amount: cartItem.amount - 1
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    } if(cartItem.amount < 2) {
      removeFromCart(id)
    }
  }


  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(total);
  });
  
  
  const [amount, setAmount] = useState(0);
  
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);

    setAmount(total);
  });


 
  return <CartContext.Provider value={{
    cart, addToCart, removeFromCart, clearCart, increaseCart, reduceCart, total, amount
    }}>
    {children}
  </CartContext.Provider>
}

export default CartProvider;