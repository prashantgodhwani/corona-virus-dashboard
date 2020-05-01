import React from 'react';

const Loader = () => {
  return(
    <div className="loading-area">
        <div className="loading-box"></div>
        <div className="loading-pic">
            <div className="loader-animation-outer">
                <div className="rotate-center">
                    <div className="scale-up-center">
                        <img src='/img/corona.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Loader;
