import React from "react";
import "./App.css";

const FlashCard = ({ question, answer }) => {
    return (
        <div className="flashcard">
            <p className="flashcard-text">{question}</p>
            <p className="flashcard-text">{answer}</p>
        </div>
    );
};

export default FlashCard;
