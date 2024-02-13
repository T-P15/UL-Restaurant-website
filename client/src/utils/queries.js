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