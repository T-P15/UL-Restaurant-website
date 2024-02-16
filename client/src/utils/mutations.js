import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $mobile: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      mobile: $mobile
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($menuitem: MenuitemInput!) {
    addOrder(menuitem: $menuitem) {
      menuitem {
        _id
        name
        description
        price
        category {
          _id
          name
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($mobile: String) {
    updateUser(mobile: $mobile) {
      _id
      firstName
      lastName
      mobile
      orders {
        _id
        menuitem {
          _id
          name
          description
          price
          category {
            _id
            name
          }
        }
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($_id: ID!){
    deleteUser (_id: $_id) {
      _id
      firstName
    }
  }
`;