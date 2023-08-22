import React from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AthletsComponent from '../components/AthletsComponent';
import PlayerComponent from '../components/PlayerComponent';

export default function HomePage() {
    return (
        <div className="flex flex-col">
            <div><AthletsComponent /></div>
            <div><PlayerComponent /></div>
        </div>
    )
}