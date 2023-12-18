import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { CartIconCotainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconCotainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconCotainer>
  );
};

export default CartIcon;
