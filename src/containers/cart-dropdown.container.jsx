import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

import compose from "./compose";

import CartDropdown from "../components/cart-dropdown/cart-dropdown.component.jsx";

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartDropdownContainer = ({ data: { cartItems }, toggleCartHidden }) => (
  <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
);

export default compose(
  graphql(GET_CART_ITEMS),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartDropdownContainer);
