import React from 'react';

import HeroSlider from '../HeroSlider/HeroSlider';
import MissionSt from '../MissionSt/MissionSt';
import PromoOne from '../PromoOne/PromoOne';
import PromoTwo from '../PromoTwo/PromoTwo';
import Featured from '../Featured/Featured';



const AppWrapper = () => {
    return (
        <div>
            <HeroSlider />
            <MissionSt />
            <PromoOne />
            <PromoTwo />
            <Featured />
        </div>
    )
}

export default AppWrapper;