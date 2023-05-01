//react import
import { useState } from "react";

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
        <button className="CardCarrousel-btn" onClick={handlePrevious}>
            {"<"}
        </button>
        <div
        className="CardCarrousel-container"
        style={{
            width: '${ProdCardWidth}px',
            height: '${ProdCardHeight}px',
            transform: 'translateX(${translateX}px)',
        }}
        >
            {items.map((item, i) =>(
                //HOW TO GET THE CARDS IN HERE IN STEAD OF THIS CRAP
                <ProdCard key={i} prodImg="{prodImg}" prodName="{prodName}" prodPrice="{prodPrice}" />
            ))}
        </div>
        <button className="CardCarrousel-btn" onClick={handleNext}>
            {">"}
        </button>
    </div>
);
}
}