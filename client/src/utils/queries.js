import {gql} from '@apollo/client';

export const GET_FOOD = gql`
 query Menuitem {
  allFood {
   name 
   description
   price
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($menuItems: [MenuitemInput]) {
    checkout(menuItems: $menuItems) {
      session
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        menuitems {
          _id
          name
          description
          price
          category
        }
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_MENUITEMS = gql`
  query getmenuItems($category: ID) {
    menuItems(category: $category) {
      _id
      name
      description
      price
      category {
        _id
      }
    }
  }
`;