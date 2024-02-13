import React from "react";
import { GET_FOOD } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import {FoodContainer,
  FoodCard,
  FoodName,
  FoodPrice,
  FoodDescription,
  BuyButton
} from "./FoodElements"

const FoodItems = () => {
    const { loading, data } = useQuery(GET_FOOD);
    const allFood = data?.allFood || [];

    if (loading) return <p>Loading...</p>;

    return (
      <FoodContainer>
        {allFood.map((menuitem) => (
          <FoodCard key={menuitem.id}>
            <FoodName>{menuitem.name}</FoodName>
            <FoodPrice>{menuitem.price}</FoodPrice>
            <FoodDescription>{menuitem.description}</FoodDescription>
            <BuyButton>Buy Now</BuyButton>
          </FoodCard>
        ))}
      </FoodContainer>
    );
  };

export default FoodItems;