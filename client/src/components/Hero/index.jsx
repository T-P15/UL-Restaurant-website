import React, {useState} from "react";
import { HeroContainer, HeroBg, HeroP, Heroh1, VideoBg, HeroText, HeroOrderBtn, OrderButton, ArrowForward, ArrowRight} from "./HeroElements";
import Video from '../../assets/Video.mp4'


const Hero = () => {

    const [hover, setHover] = useState(false)
    const onHover =() => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' /> 
            </HeroBg>
            <HeroText>
                <Heroh1>Let's Makan!</Heroh1>
                <HeroP> Come and try Uncle Lais authentic Malaysian cuisine transporting yourself to the streets of Malaysia as if you were really there!</HeroP>
                <HeroOrderBtn>
                    <OrderButton to="order" onMouseEnter={onHover} onMouseLeave={onHover}>Order Now {hover ? <ArrowForward /> : <ArrowRight/>} </OrderButton>
                </HeroOrderBtn>
            </HeroText>
        </HeroContainer>
    )
};

export default Hero;