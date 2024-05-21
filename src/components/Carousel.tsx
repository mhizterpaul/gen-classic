import { useState } from 'react';
import {Props as CardProps} from './utilities/Card'
import Card from './utilities/Card'
import { IoArrowForwardCircleOutline,
    IoArrowForwardCircle,
    IoArrowBackCircleOutline,
    IoArrowBackCircle
 } from "react-icons/io5";
import useMeasure from '../customHooks/useMeasure';
import {useRef, useEffect} from 'react';

type Props = {
    cards: CardProps[]
}

const Carousel: React.FC<Props> = (props: Props)=>{

    const arrow = " text-2xl text-white ";
    const [viewed, setViewed]= useState(0);
    const [forwardActive, setForwardActive] = useState(true);
    const [backActive, setBackActive] = useState(false);
    const carouselRef = useRef<HTMLDivElement>(null);
    const {width, observer} = useMeasure();
    

    function handleClick (direction: 'forward'|'back'){

        if(!width) return;

        const viewableCards = width/(props.cards[0].size[0] + 8);

        if(viewed - props.cards.length -1 === viewableCards && direction === 'forward') setForwardActive(false);
        if(viewed === viewableCards && direction === 'back') setBackActive(false);
        if(viewed === 0 && direction === 'forward') setBackActive(true);
        if(viewed === props.cards.length - 1 && direction === 'back') setForwardActive(true);
        if( direction === "forward" && viewed < props.cards.length) setViewed(prev => prev + viewableCards);
        if(direction === 'back' && viewed > 0) setViewed(prev => prev - viewableCards); 
    }

    useEffect (() => {
        if(carouselRef.current) observer.observe(carouselRef.current)
        
            return () => {
            if(carouselRef.current) observer.unobserve(carouselRef.current)
        }
    }, [])

    return (
        <div>
            <div ref={carouselRef} className= " flex gap-x-2 ">
                {props.cards.map((card, index) => {
                    return <Card key={index} {...card} />
                })}
            </div>
            <div className=" flex justify-center gap-x-4 ">
                <div  onClick={()=> handleClick("back")}>
                    { !backActive ? <IoArrowBackCircleOutline  className={` ${arrow} `}/>
                    : <IoArrowBackCircle className={` ${arrow} `}/>}
                </div>
                <div  onClick={()=> handleClick("forward")}>
                    {!forwardActive ? <IoArrowForwardCircleOutline className= {` ${arrow} `}/>
                    : <IoArrowForwardCircle className={` ${arrow} `}/>}
                </div>
            </div>
        </div>
    )
}

export default Carousel