import React from "react";
import './style.css';

function ExpressionPra() {
    
    const name = "Vashim";
    const currentDate = new Date();
    
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = currentDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    
    return(
        <>
        <p className="name">Created By - {name} </p>
        <p style={{color:"Blue",fontSize:"20px",margin:"100px 100px"}} >Current Date - {formattedDate} </p>
        </>
    )
}

export default ExpressionPra;