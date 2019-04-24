import React from 'react';

import HeroSlider from '../HeroSlider/HeroSlider';
import MissionSt from '../MissionSt/MissionSt';
import PromoOne from '../PromoOne/PromoOne';
import PromoTwo from '../PromoTwo/PromoTwo';


const AppWrapper = () => {
    return (
        <div>
            <HeroSlider />
            <MissionSt />
            <PromoOne />
            <PromoTwo />
        </div>
    )
}

export default AppWrapper;