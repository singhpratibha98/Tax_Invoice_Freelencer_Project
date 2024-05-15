import "./App.css";
// import Content from "./Components/Content";
import Form from "./Components/Form";
import { useState,useEffect} from "react";


function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <>
      <div>
        
        {/* {showInvoice ? ( */}
          <div className="App">

            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div>
                <h3>Branch Address :</h3>
                <p>
                  MAA SERVICES (68530)
                  <br />
                  NEAR BANA MORE,BUS STOP,PS-KHIZERSARAI,
                  <br /> GAYA - 824233,
                  <br />
                  PH. - 9113478767 Bihar [State Code : 10]
                </p>
              </div>
              <div>
                <h3>MAA SERVICES (68530)</h3>
                <p>
                  MAA SERVICES,NEAR BANA MORE,BUS
                  <br /> STOP,PS-KHIZERSARAI GAYA-824233(BIHAR) Bihar <br />
                  [State Code : 10]
                </p>
              </div>
              <div>
                <h3>Original For Recipient</h3>
                <img
                  style={{ height: "100px", width: "200px" }}
                  src="https://zeevector.com/wp-content/uploads/2020/05/Bajaj-Bikes-Logo-PNG.png"
                />
              </div>
            </div> */}

            <Form />

            
          </div>

        {/* ) : ( */}
          <>
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1 style={{ display: "flex", justifyContent: "center" }}>
                Tax Invoice
              </h1>
              <button
                onClick={() => setShowInvoice(true)}
                style={{
                  width: "300px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "10px",
                  fontWeight: "bolder",
                  fontSize:"30px"
                }}
              >
                Admin
              </button>

            </div> */}
          </>
        {/* )} */}
      </div>
    </>
  );
}

export default App;
