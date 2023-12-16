import Card from "./card/Card";
import Form from "./form/Form";
import {useState} from "react";


function Main(){

    const[userName, setUserName] = useState("");
    const[cardName, setCardName] = useState("");
    const[dateMM, setDateMM] = useState("");
    const[dateYY, setDateYY] = useState("");
    const[cvv, setCvv] = useState("");
    const[card, setCard] = useState(false);

    const handleButtonClick = () => {
        // Update the state when the button is clicked
        setCard(true);
    };
    
    return (
        <>
            <main className="wrapper">
                <Card userName={userName} cardName={cardName} dateMM={dateMM} dateYY={dateYY} cvv={cvv} card={card} setCard={setCard}/>
                
                <Form
                userName={userName} setUserName={setUserName} 
                cardName={cardName} setCardName={setCardName} 
                dateMM={dateMM} setDateMM={setDateMM}
                dateYY={dateYY} setDateYY={setDateYY}
                cvv={cvv} setCvv={setCvv}  
                card={card} setCard={setCard}
                handleButtonClick={handleButtonClick}
                />
                 
            </main>

        </>
    )
}

export default Main;