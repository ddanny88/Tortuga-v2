import React from 'react';
import './loading.css';

const Loading = () => {
    return (
        <div className="LoadingComp">
        <h2>TORTUGA</h2>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading;