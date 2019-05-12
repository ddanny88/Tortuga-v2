import React from 'react';
import './loading.css';

const Loading = () => {
    return (
        <div className="LoadingComp">
        <p>( logo here )</p>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading;