//react import
import React, { useState } from "react";

//Components import
import ProdCard from "./ProdCard";

interface CardCarrouselProps {
    items: any[];
    ProdCardWidth: number;
    ProdCardHeight: number;
    gap: number;
}

export default function CardCarousel({items, ProdCardWidth, ProdCardHeight, gap}:CardCarrouselProps){
 {
    const [index, setIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);

React.useEffect(() => {
    const next =(index + 1) % items.length;
    const id = setTimeout(() => setIndex(next), 3000);
    return()=>clearTimeout(id);
}, [index]);

const handlePrevious = () => {
    if (index>0){
        setIndex((previous)=>previous -1);
        setTranslateX((previous)=>previous+ProdCardWidth+gap);
    }
};

const handleNext = () => {
    if (index <items.length - 1) {
        setIndex((previous)=>previous+1);
        setTranslateX((previous)=>previous-ProdCardWidth-gap);
    }
};

return (
    <div className="CardCarrousel">
        <button className="CardCarrousel-YellowButton" onClick={handlePrevious}>
            <span className="previous" aria-hidden="true"></span>
            <span className="YellowButton">{"<"}</span>
        </button>
        <div className="container">
        {items.map((item, i) =>(
        //HOW TO GET THE CARDS IN HERE IN STEAD OF THIS CRAP
        <ProdCard key={i} prodImg={"ThereShouldBeAnImageHere"} prodName={"ThisShouldBeAName"} prodPrice={"ThisShouldBeAPrice"} />
        ))}
        </div>
        <button className="CardCarrousel-YellowButton" onClick={handleNext}>
            <span className="next" aria-hidden="true"></span>
            <span className="YellowButton">{">"}</span>
        </button>
    </div>
);
}
}

{/* <ProdCard key={1} prodImg={"ThereShouldBeAnImageHere"} prodName={"ThisShouldBeAName"} prodPrice={"ThisShouldBeAPrice"} />
<ProdCard key={2} prodImg={"ThereShouldBeAnImageHere"} prodName={"ThisShouldBeAName"} prodPrice={"ThisShouldBeAPrice"} />
<ProdCard key={3} prodImg={"ThereShouldBeAnImageHere"} prodName={"ThisShouldBeAName"} prodPrice={"ThisShouldBeAPrice"} />
<ProdCard key={4} prodImg={"ThereShouldBeAnImageHere"} prodName={"ThisShouldBeAName"} prodPrice={"ThisShouldBeAPrice"} />
<ProdCard key={5} prodImg={"ThereShouldBeAnImageHere"} prodName={"ThisShouldBeAName"} prodPrice={"ThisShouldBeAPrice"} /> */}
