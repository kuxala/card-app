import React from "react";


export default function Form({userName, setUserName, cardName, setCardName, 
    dateMM, setDateMM, dateYY, setDateYY, cvv, setCvv, card, setCard, handleButtonClick}){
    
    
    const nameChange = (event) => {
        setUserName(event.target.value);
    };

    const cardChange = (event) => {
        setCardName(event.target.value);
    };

    const dateMMChange = (event) => {
        setDateMM(event.target.value);
    };

    const dateYYChange = (event) => {
        setDateYY(event.target.value);
    };
    
    
    const cvvChange = (event) => {
        setCvv(event.target.value);
    };

   
    const active =  (
                <div className="right-col">
                    <div className="info">
                        <label>
                            <p className="header-text">CARDHOLDER NAME</p>
                            <input type="text" placeholder="e.g. JANE APPLESEED" className="inputs" required
                            value={userName} onChange={nameChange}  />
                        </label>
                        <label>
                            <p className="header-text">CARD NUMBER</p>
                            <input type="text" placeholder="e.g. 1234 5678 9123 0000" className="inputs" required value={cardName}  onChange={cardChange} maxlength="16"/>
                        </label>
                        <div className="card-dates">
                            <label className="date-gap">
                                <p className="header-text">exp.date(MM/yy)</p>
                                <input type="text" placeholder="MM" className="mm" required value={dateMM} onChange={dateMMChange} maxlength="2" min="1" max="12"/>
                                <input type="text" placeholder="YY" className="yy" required value={dateYY} onChange={dateYYChange} maxlength="2" min="18" max="30"/>
                            </label>
                            <label>
                                <p className="header-text">CARD NUMBER</p>
                                <input type="text" placeholder="e.g. 123" className="cvv" required value={cvv} onChange={cvvChange} maxlength="3"/>
                            </label>
                        </div>
                        <button className="confirm" onClick={handleButtonClick} ><a href="#"  >Confirm</a></button>
                        
                    </div>
                   
                </div>
    )


    const finish =   (
        <div className="thankyou">
            <div className="bigg-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_0_524)"/>
                <path d="M28 39.9199L36.0801 48L52.0801 32" stroke="white" stroke-width="3"/>
                <defs>
                <linearGradient id="paint0_linear_0_524" x1="-23.0143" y1="11.5071" x2="1.03143e-06" y2="91.5071" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6348FE"/>
                <stop offset="1" stop-color="#610595"/>
                </linearGradient>
                </defs>
                </svg>
            </div>

            <h1 className="thankyou-h1">THANK YOU</h1>
            <p className="thankyou-p">We've added your card details</p>
            <button className="continue"><a href="#">Continue</a></button>
        </div>
    )



    

    if (card){
        return finish;
    }else{
        return active;
    }






    // console.log("######################################");
    // console.log("Username: ", userName);
    // console.log("Cardname: ", cardName);
    // console.log("DateMM : ", dateMM);
    // console.log("DateYY: ", dateYY);
    // console.log("Cvv: ", cvv);
    // console.log("######################################");
}