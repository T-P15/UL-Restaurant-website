import React from "react";
import { GET_FOOD } from "../../utils/queries";
import { useQuery } from "@apollo/client";
//import {Section} from "./FoodElements"

const FoodItems = () => {
    const { loading, data } = useQuery(GET_FOOD);
    const allFood = data?.allFood || [];

    if (loading) return <p>Loading...</p>;

    return (
      <FoodContainer>
        {allFood.map((menuitem) => (
          <div key={menuitem.id}>
            <h2>{menuitem.name}</h2>
            <h3>{menuitem.price}</h3>
            <p>{menuitem.description}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </FoodContainer>
    );
  };

export default FoodItems;