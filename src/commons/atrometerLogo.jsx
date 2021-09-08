import React from 'react';
const AtrometerLogo = () => {
    return (  
        <div className="atrometer-logo">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/atrometerLogo.svg"}
            alt="Atrometer logo"
          />
          <p>
            سامانه هوشمند قرائت <span>آب،برق،گاز</span>
          </p>
        </div>
      </div>
    );
}
 
export default AtrometerLogo;