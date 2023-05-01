//react import
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';

//Components import
import {CarouselProductCard, CarouselProductCardProps} from "./CarouselProductCard";

interface CardCarrouselProps {
    items: CarouselProductCardProps[];
    ProdCardWidth: number;
    ProdCardHeight: number;
    gap: number;
}

export default function CardCarousel({items, ProdCardWidth, ProdCardHeight, gap}:CardCarrouselProps){
 {

    return (
        <Carousel variant="dark">
            {items.map((item, i) =>(
            <Carousel.Item>
            <CarouselProductCard key={i} prodImg={item.prodImg} prodName={item.prodName} prodPrice={item.prodPrice} />
            </Carousel.Item>
            ))}
        </Carousel>
    );
    }
}
