import React from "react";
import './Form.css';
function Form(props) {
    const wpApi=()=>{
        var number = document.getElementById("phone-input").value;
        // alert(number)
        window.location = "https://api.whatsapp.com/send?phone=91" + number;
    }

  return (
    <>
      <div className={`container my-5 `}>
       
          <h1
            className={`card2 my-5 py-4 `}
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Jump 2 WhatsApp Directly
          </h1>
        <div className="card1">
          <h1>Enter Phone Number</h1>
          <div className="input-group">
            <input type="tel" id="phone-input" className="m-input"></input>
            {/* <label for="phone-input">Phone</label> */}
          </div>
          <div className="input-group">
            <button className="btn1" onClick={wpApi}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
