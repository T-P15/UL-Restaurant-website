import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { Link as LinkRouter} from 'react-router-dom'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const HeroText = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #000;
border: 1px solid black;
opacity: 0.8;
`;

export const Heroh1 = styled.h1`
 color: #fff;
 font-size: 48px;
 text-align: center;

 @media screen and (max-width: 768px) {
    font-size: 40px;
 }
 @media screen and (max-width: 480px) {
    font-size: 32px;
 }
`;
export const VideoBg = styled.video`
 width: 100%;
 height: 100%;
 -o-object-fit: cover;
 object-fit: cover;
 
`;
export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px) {
    font-size: 24px;
 }
 @media screen and (max-width: 480px) {
    font-size: 18px;
 }
`;

export const HeroOrderBtn = styled.div`
 margin-top: 32px;
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
 margin-left: 8px;
 font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
 font-size: 20px;
`;

export const OrderButton = styled(LinkRouter)`
    border-radius: 50px;
    background: #c30010;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #00FF00;
        color: #fff;
    }
`;
