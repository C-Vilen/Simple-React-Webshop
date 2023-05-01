// import
import Carousel from 'react-bootstrap/Carousel';

//Components import
import {CarouselProductCard, CarouselProductCardProps} from "./CarouselProductCard";

interface CardCarrouselProps {
    items: CarouselProductCardProps[];
}

export default function CardCarousel({items}:CardCarrouselProps){
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
