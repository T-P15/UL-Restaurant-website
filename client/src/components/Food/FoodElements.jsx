import styled from 'styled-components'

export const FoodContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 3rem;
margin-top: 3rem;

@media screen and (min-width: 280px) and (max-width: 720px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: repeat(2, 1fr);
    }
`;

export const FoodCard = styled.div`
display: flex;
flex-direction: column;
gap: 0.6rem;
justify-content: center;
align-items: center;
`;

export const FoodName = styled.h2`
color: #de0a26;
`;

export const FoodPrice = styled.h3`
color: #fc4958;
`;

export const FoodDescription = styled.p`
text-align: center;
font-size: 1.1rem;
line-height: 2rem;
letter-spacing: 0.1rem;
`;

export const BuyButton = styled.button`
border: none;
padding: 1rem 4rem;
font-size: 1.4rem;
color: white;
border-radius: 4rem;
transition: 0.5s ease-in-out;
cursor: pointer;
background: linear-gradient(to right, #fc4958, #e85d04);
text-transform: uppercase;
&:hover {
  background: linear-gradient(to right, #e85d04, #fc4958);
}
`