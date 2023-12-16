



export default function Card({userName, cardName, dateMM, dateYY, cvv, card, setCard, handleButtonClick}){
    
    

    
    function formatCreditCardNumber(input) {
        // Remove any existing spaces and non-numeric characters
        const cleanInput = input.replace(/[^\d]/g, '');
      
        // Insert spaces every 4 characters without using regex
        let formattedNumber = '';
        for (let i = 0; i < cleanInput.length; i++) {
          if (i > 0 && i % 4 === 0) {
            formattedNumber += ' ';
          }
          formattedNumber += cleanInput.charAt(i);
        }
        return formattedNumber;
      }

    let newCardName = cardName;
    const formattedCreditCardNumber = formatCreditCardNumber(newCardName);
    
    
    
    
    const finished =  (
        <div className="left-col">
            <div className="card-align">
                <div className="card-back">
                    <div className="black-border"></div>
                    <div className="gray-border"><p>{cvv}</p></div>
                </div>

                <div className="card-front">
                    <div className="circles">
                        <div className="big-circle"></div>
                        <div className="small-circle"></div>
                    </div>
                    <div className="digits">{formattedCreditCardNumber}</div>
                    <div className="bottom-text">
                        <div className="name">{userName}</div>
                        <div className="date">{dateMM}/{dateYY}</div>
                    </div>
                </div>
            </div>
        </div>
)


    
    const active =  (
        <div className="left-col">
            <div className="card-align">
                <div className="card-back">
                    <div className="black-border"></div>
                    <div className="gray-border"><p>000</p></div>
                </div>

                <div className="card-front">
                    <div className="circles">
                        <div className="big-circle"></div>
                        <div className="small-circle"></div>
                    </div>
                    <div className="digits">0000 0000 0000 0000</div>
                    <div className="bottom-text">
                        <div className="name">JANE APPLESEED</div>
                        <div className="date">00/00</div>
                    </div>
                </div>
            </div>
    </div>
)



if (card) {
    return finished;
}else{
    return active;
}           



}
