import React from "react";
import App from "../App.css";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Form = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [printing, setPrinting] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [footer, setFooter] = useState(false);
  const [header, setHeader] = useState(false);
  const [name, setName] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [adhar, setAdhar] = useState("");
  const [address, setAddress] = useState("");
  const [invoice, setInvoice] = useState("");
  const [nameoutput, setnameoutput] = useState();
  const [Date, setDate] = useState("");
  const [DateOutput, setDataOutput] = useState();
  const [Chassis, setchassis] = useState("");
  const [chassisOutput, setChassisOutput] = useState();
  const [engine, setEngine] = useState("");
  const [color, setColor] = useState("");
  const [hyphocated, setHypocated] = useState("");
  const [model, setModel] = useState();
  const [modelInput, setModelInput] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [modelOutput, setmodelOutput] = useState();
  const [Amount, setAmount] = useState();
  const [AmountOutput, setamountOutput] = useState();
  const [sgstAmount, setSgstAmount] = useState();
  const [cgstAmount, setcgstAmount] = useState();
  const [sgstRate] = useState(14);
  const [cgstRate] = useState(14);
  const [unitPrice, setUnitPrice] = useState("");
  const [taxableAmount, setTaxableAmount] = useState("");
  const [discount, setdiscount] = useState();
  const [amountInWord, setAmountInWord] = useState();
  const [mandatoryFieldFilled, setMandatoryFieldFilled] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [otherValue, setOtherValue] = useState("");

  // ----------------- List of options in Hypocated field ----------------//

  const options = [
    "CASH",
    "INDUSIND BANK LTD.",
    "BAJAJ AUTO FINANCE LTD.",
    "SHRIRAM FINANCE LTD.",
    "IDFC FIRST BANK LTD",
    "CHOLA MANDALAM INVESTMENT & FINANCE CO LTD.",
    "OTHER",
  ];

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedOption(value);
    if (value === "OTHER") {
      setOtherValue("");
    }
    setHypocated(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        e.target.value?.trim() !== ""
    );
  };

  const handleOtherChange1 = (e) => {
    setOtherValue(e.target.value);
    setHypocated(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        e.target.value?.trim() !== ""
    );
  };

  // --------list of model and discription of bike---------------//

  const [bikeModel] = useState([
    { model: "00DH50", description: "PULSAR 125 NEON CBS" },
    { model: "00DH41", description: "PULSAR 125 CAR SD" },
    { model: "00DH43", description: "PULSAR 125 CAR SP" },
    { model: "00DH42", description: "PULSAR 150 SD" },
    { model: "00JR30", description: "PULSAR N 150 SD" },
    { model: "00JR31", description: "PULSAR N 150 TD" },
    { model: "00JR37", description: "PULSAR N 160 TWIN ABS" },
    { model: "00DH44", description: "PULSAR 150 TD" },
    { model: "00DY10", description: "CT 125 X" },
    { model: "00JK36", description: "PLATINA 110 DABS" },
    { model: "00JK35", description: "PLATINA 110 D" },
    { model: "00PF35", description: "PLATINA 100 ES" },
    { model: "00DY08", description: "CT 110 X ES" },
  ]);

  const handleModelChange = (e) => {
    const model = e.target.value;
    setModel(model);
    if (model === "other") {
      setModelInput("");
    } else {
      const selectedBike = bikeModel.find((bike) => bike.model === model);
      setDescription(selectedBike ? selectedBike.description : "");
    }
  };

  const handleModelInputChange = (e) => {
    setModelInput(e.target.value);
    setModel("other");
  };

  const handleDesriptionChange = (e) => {
    setDescriptionInput(e.target.value);
    setDescription(e.target.value);
  };

  //----------Function to handle row click-----------//

  const handleRowClick = (serialNumber) => {
    setSelectedRow(serialNumber);
  };

  // ------- - --React to print ---------//

  const ComponentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentRef.current,
  });

  const handlePrintAsync = () => {
    return new Promise((resolve) => {
      handlePrint();
      resolve();
    });
  };

  const handleDownloadPDF = () => {
   
    setFooter(true);
    // setHeader(true);
    

    // setPrinting(true); //////////
    setDisabledButton(true);

    setTimeout(() => {
      if (handlePrint) {
        handlePrintAsync().then(() => {
          setFooter(false);
          setDisabledButton(false);
          // setHeader(false);
          //  setPrinting(false);
        });
      }

      // window.print();
      // setPrinting(false);
      // setPrinting(true);
      // setDisabledButton(false);
      // setFooter(true);
      // setHeader(true);
    }, 1000);
  };

  const onhandleSubmit = (e) => {
    e.preventDefault();
  };

  //----------form mandatory part showing------------//

  const onNameChange = (e) => {
    setName(e.target.value);
    setMandatoryFieldFilled(
      e.target.value?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onParentChange = (e) => {
    setParentName(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        e.target.value?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        e.target.value?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onAdharChange = (e) => {
    setAdhar(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        e.target.value?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        e.target.value?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onInvoiceChange = (e) => {
    setInvoice(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        e.target.value?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onDateChange = (e) => {
    setDate(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        e.target.value?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onchassisChange = (e) => {
    setchassis(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        e.target.value?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onEngineChange = (e) => {
    setEngine(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        e.target.value?.trim() !== "" &&
        color?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onColorChange = (e) => {
    setColor(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        e.target.value?.trim() !== "" &&
        hyphocated?.trim() !== ""
    );
  };

  const onHypocatedChange = (e) => {
    setHypocated(e.target.value);
    setMandatoryFieldFilled(
      name?.trim() !== "" &&
        parentName?.trim() !== "" &&
        phone?.trim() !== "" &&
        adhar?.trim() !== "" &&
        address?.trim() !== "" &&
        invoice?.trim() !== "" &&
        Date?.trim() !== "" &&
        Chassis?.trim() !== "" &&
        engine?.trim() !== "" &&
        color?.trim() !== "" &&
        e.target.value?.trim() !== ""
    );
  };

  // ----------------for table calculation-----------//

  const handleData = () => {
    setnameoutput(name);
    setDataOutput(Date);
    setChassisOutput(Chassis);
    setmodelOutput(model);
    setamountOutput(Amount);

    const amount = parseFloat(Amount);
    const discountValue = parseFloat(discount);
    // const sgst = (amount * sgstRate) / 100;
    // const cgst = (amount * cgstRate) / 100;
    // const totalTax = sgst + cgst;
    // const taxable = amount - totalTax;

    const taxable = (amount / 128) * 100;
    const sgst = (taxable * sgstRate) / 100;
    const cgst = (taxable * cgstRate) / 100;

    // let taxable = amount;
    // let unitPriceAfterDiscount = amount;

    // if (!isNaN(discountValue)){
    //   taxable = amount -discountValue;
    //   unitPriceAfterDiscount = amount - discountValue;

    // }

    // const totalTax = sgst +cgst;
    // taxable+=totalTax;

    setSgstAmount(sgst.toFixed(2));
    setcgstAmount(cgst.toFixed(2));
    setTaxableAmount(taxable.toFixed(2));
    setUnitPrice(taxable.toFixed(2));
    setAmountInWord(convertToWord(Amount));
  };

  //------------converting number to words-----------//

  const convertToWord = (num) => {
    const ones = [
      "",
      "ONE",
      "TWO",
      "THREE",
      "FOUR",
      "FIVE",
      "SIX",
      "SEVEN",
      "EIGHT",
      "NINE",
    ];
    const teens = [
      "",
      "ELEVEN",
      "TWELVE",
      "THIRTEEN",
      "FOURTEEN",
      "FIFTEEN",
      "SIXTEEN",
      "SEVENTEEN",
      "EIGHTEEN",
      "NINETEEN",
    ];
    const tens = [
      "",
      "TEN",
      "TWENTY",
      "THIRTY",
      "FORTY",
      "FIFTY",
      "SIXTY",
      "SEVENTY",
      "EIGHTY",
      "NINETY",
    ];
    const thousands = ["", "THOUSAND", "MILLION", "BILLION", "TRILLION"];

    if (num === 0) return "zer0";
    let parts = [];
    let count = 0;
    while (num > 0) {
      if (num % 1000 !== 0) {
        parts.unshift(thousands[count]);
        parts.unshift(convertLessThanThousand(num % 1000));
      }
      num = Math.floor(num / 1000);
      count++;
    }
    const words = parts.join(" ").trim();
    return `Rs. ${words} ONLY.`;
  };

  const convertLessThanThousand = (num) => {
    const ones = [
      "",
      "ONE",
      "TWO",
      "THREE",
      "FOUR",
      "FIVE",
      "SIX",
      "SEVEN",
      "EIGHT",
      "NINE",
    ];

    const teens = [
      "",
      "ELEVEN",
      "TWELVE",
      "THIRTEEN",
      "FOURTEEN",
      "FIFTEEN",
      "SIXTEEN",
      "SEVENTEEN",
      "EIGHTEEN",
      "NINETEEN",
    ];
    const tens = [
      "",
      "TEN",
      "TWENTY",
      "THIRTY",
      "FORTY",
      "FIFTY",
      "SIXTY",
      "SEVENTY",
      "EIGHTY",
      "NINETY",
    ];
    if (num === 0) {
      return "";
    } else if (num < 10) {
      return ones[num];
    } else if (num < 20) {
      return teens[num - 10];
    } else if (num < 100) {
      return tens[Math.floor(num / 10)] + "  " + ones[num % 10];
    } else {
      return (
        ones[Math.floor(num / 100)] +
        " HUNDRED " +
        convertLessThanThousand(num % 100)
      );
    }
  };

  const onModelChange = (e) => {
    setModel(e.target.value);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setdiscount(e.target.value);
  };

  return (
    <div ref={ComponentRef} style={{ paddingLeft: "5px", paddingRight: "5px" }}>
      <div
        style={{
          maxWidth: "1000px",
          marginRight: "auto",
          marginLeft: "auto",
          padding: "30px",
        }}
      >
        {/* {header && ( */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                // alignItems: "center",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%",
                marginTop: "-20px",
              }}
            >
              <div style={{ textAlign: "left", marginLeft: "10px" }}>
                <h3 style={{ marginBottom: "-15px" }}>Branch Address :</h3>
                <p>
                  MAA SERVICES (68530)
                  <br />
                  NEAR BANA MORE,BUS STOP,PS-KHIZERSARAI,
                  <br /> GAYA - 824233,
                  <br />
                  PH - 9113478767 Bihar [State Code : 10]
                </p>
              </div>
              <div style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "-15px" }}>MAA SERVICES (68530)</h3>
                <p>
                  MAA SERVICES,NEAR BANA MORE,BUS
                  <br /> STOP,PS-KHIZERSARAI GAYA-824233 (BIHAR) Bihar <br />
                  [State Code : 10]
                </p>
              </div>
              <div style={{ textAlign: "left" }}>
                <h3 style={{ marginBottom: "-7px" }}>Original For Recipient</h3>
                <img
                  style={{ height: "100px", width: "200px" }}
                  src="https://zeevector.com/wp-content/uploads/2020/05/Bajaj-Bikes-Logo-PNG.png"
                />
              </div>
            </div>
          </div>
        {/* )} */}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ alignSelf: "flex-end", textAlign: "left" }}>
              <p style={{ marginBottom: "-16px", fontWeight: "500" }}>GSTIN:</p>
              <h3>10CIVPK3547B3ZE</h3>
            </div>
            <div
              style={{ textAlign: "center", position: "absolute", left: "40%" }}
            >
              <h2>TAX INVOICE (Vehicle)</h2>
            </div>

            <button
              className="Printbtn"
              onClick={handleDownloadPDF}
              disabled={printing || disabledButton}
            >
              {printing ? "" : "Print"}
            </button>
          </div>
        </div>

        <hr
          style={{
            width: "100%",
            backgroundColor: "black",
            height: "2px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-10px",
          }}
        />

        {/* -------------------------form----------------------- */}

        <form
          style={{ marginTop: "15px" }}
          action="#"
          method="POST"
          onSubmit={onhandleSubmit}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <div className="form-group">
                <span>
                  Customer Name
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "10px" }}>:</span>
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={onNameChange}
                  name="customer_name"
                  placeholder="Enter Customer Name"
                  style={{
                    borderColor:
                      name?.trim() === "" && mandatoryFieldFilled ? "red" : "",
                  }}
                />
              </div>
              <div className="form-group">
                <span>
                  Institution Type <span style={{ marginLeft: "25px" }}>:</span>
                </span>
                <input type="text" name="invoice_name" />
              </div>
              <div className="form-group">
                <span>
                  Institution/Deptt{" "}
                  <span style={{ marginLeft: "16px" }}>:</span>
                  <br />
                  Name
                </span>
                <input type="text" name="customer_gstin" />
              </div>
              <div className="form-group">
                <span>
                  S/O | D/O | W/O{" "}
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "5px" }}>:</span>
                </span>
                <input
                  type="text"
                  value={parentName}
                  onChange={onParentChange}
                  name="parent_name"
                  style={{
                    borderColor:
                      parentName?.trim() === "" && mandatoryFieldFilled
                        ? "red"
                        : "",
                  }}
                />
              </div>
              <div className="form-group">
                <span>
                  Customer GSTIN <span style={{ marginLeft: "16px" }}>:</span>
                </span>
                <input type="tel" name="phone" />
              </div>
              <div className="form-group">
                <span>
                  Phone{" "}
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "73px" }}>:</span>
                </span>
                <input
                  type="text"
                  value={phone}
                  onChange={onPhoneChange}
                  name="phone_change"
                  style={{
                    borderColor:
                      phone?.trim() === "" && mandatoryFieldFilled ? "red" : "",
                  }}
                />
              </div>

              <div className="form-group">
                <span>
                  Aadhar Number{" "}
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "6px" }}>:</span>
                </span>
                <input
                  type="text"
                  value={adhar}
                  onChange={onAdharChange}
                  name="aadhar_number"
                  style={{
                    borderColor:
                      adhar?.trim() === "" && mandatoryFieldFilled ? "red" : "",
                  }}
                />
              </div>

              <div className="form-group">
                <span>
                  Bill To Address{" "}
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "15px" }}>:</span>
                </span>

                <textarea
                  name="address"
                  rows="2"
                  cols="30"
                  value={address}
                  onChange={onAddressChange}
                  style={{
                    borderColor:
                      address?.trim() === "" && mandatoryFieldFilled
                        ? "red"
                        : "",
                    minHeight: "50px",
                  }}
                />
              </div>

              <div className="form-group">
                <span>
                  Delivery Address <span style={{ marginLeft: "15px" }}>:</span>
                </span>
                <textarea
                  style={{ minHeight: "50px" }}
                  name="delivery_address"
                  row="5"
                  cols="30"
                  placeholder="MAA SERVICES,NEAR BANA MORE,BUS STOP,PS-KHIZERSARAI GAYA-824233 (BIHAR) Bihar [State Code : 10]"
                  defaultValue="MAA SERVICES,NEAR BANA MORE,BUS STOP,PS-KHIZERSARAI GAYA-824233 (BIHAR) Bihar [State Code : 10]"
                  readOnly
                />
              </div>
            </div>
            <div>
              <div className="form-group">
                <span>
                  Invoice No.{" "}
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "35px" }}>:</span>
                </span>
                <input
                  type="text"
                  value={invoice}
                  onChange={onInvoiceChange}
                  name="invoice"
                  style={{
                    borderColor:
                      invoice?.trim() === "" && mandatoryFieldFilled
                        ? "red"
                        : "",
                  }}
                />
              </div>
              <div className="form-group">
                <span>
                  Invoice Date{" "}
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "28px" }}>:</span>
                </span>
                <input
                  type="date"
                  value={Date}
                  onChange={onDateChange}
                  name="invoice_name"
                  style={{
                    borderColor:
                      Date?.trim() === "" && mandatoryFieldFilled ? "red" : "",
                  }}
                />
              </div>

              <div className="form-group">
                <span>
                  Wheather Tax <br />
                  Payable on <span style={{ marginLeft: "52px" }}>:</span>
                  <br />
                  reverse Charge
                </span>
                <input
                  type="text"
                  placeholder="No"
                  defaultValue="No"
                  readOnly
                  name="customer_gstin"
                />
              </div>
              <div className="form-group">
                <span>
                  Booking No. <span style={{ marginLeft: "42px" }}>:</span>
                </span>
                <input type="text" name="institutional_name" />
              </div>
              <div className="form-group">
                <span>
                  Chassis No.{" "}
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "35px" }}>:</span>
                </span>
                <input
                  type="tel"
                  value={Chassis}
                  onChange={onchassisChange}
                  name="chassis"
                  style={{
                    borderColor:
                      Chassis?.trim() === "" && mandatoryFieldFilled
                        ? "red"
                        : "",
                  }}
                />
              </div>
              <div className="form-group">
                <span>
                  Engine{" "}
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "68px" }}>:</span>
                </span>
                <input
                  type="tel"
                  value={engine}
                  onChange={onEngineChange}
                  name="engine"
                  style={{
                    borderColor:
                      engine?.trim() === "" && mandatoryFieldFilled
                        ? "red"
                        : "",
                  }}
                />
              </div>
              <div className="form-group">
                <span>
                  Color
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "82px" }}>:</span>
                </span>
                <input
                  type="tel"
                  value={color}
                  onChange={onColorChange}
                  name="color"
                  style={{
                    borderColor:
                      color?.trim() === "" && mandatoryFieldFilled ? "red" : "",
                  }}
                />
              </div>

              {/* <div class="form-group">
                <span>
                  Hypothecated<span className="red-star" style={{ color: "red" }}>*</span>
                  <br /> No. <span style={{ marginLeft: "105px" }}>:</span>
                </span>
                <input
                  type="tel"
                  value={hyphocated}
                  onChange={onHypocatedChange}
                  name="hypocated"
                  style={{
                    borderColor:
                      hyphocated?.trim() === "" && mandatoryFieldFilled
                        ? "red"
                        : "",
                  }}
                />
              </div> */}

              <div className="form-group">
                <span>
                  Hypothecated
                  <span className="red-star" style={{ color: "red" }}>
                    *
                  </span>
                  <span style={{ marginLeft: "20px" }}>:</span>
                  <br />
                  No.
                </span>
                {selectedOption !== "OTHER" ? (
                  <select
                    value={selectedOption}
                    onChange={handleChange}
                    style={{
                      width: "64%",
                      whiteSpace: "normal",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      verticalAlign: "left",

                      borderColor:
                        selectedOption === "" && mandatoryFieldFilled
                          ? "red"
                          : "",
                    }}
                  >
                    <option value="">Select</option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <textarea
                    value={otherValue}
                    onChange={handleOtherChange1}
                    placeholder="Enter other option"
                    style={{
                      borderColor:
                        otherValue.trim() === "" && mandatoryFieldFilled
                          ? "red"
                          : "",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </form>

        <hr
          style={{
            width: "100%",
            backgroundColor: "black",
            height: "2px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
          }}
        />

        {/*--------------Table-------------------  */}

        <div className="centered-div">
          <table id="interactiveTable">
            <thead>
              <tr onClick={() => handleRowClick(1)}>
                <th colSpan="2">S.NO.</th>
                <th colSpan="2">MODEL</th>
                <th colSpan="2">
                  DESCRIPTION
                  <br />
                  /HEN/SAC CODE
                </th>
                <th colSpan="2">UNIT PRICE</th>
                <th colSpan="2">QTY</th>
                <th colSpan="2">DISCOUNT</th>
                <th colSpan="2">TAXABLE AMOUNT</th>
                <th colSpan="2">CESS</th>
                <th colSpan="2">
                  SGST/
                  <br />
                  UTGST(%)
                </th>
                <th colSpan="2">
                  SGST/
                  <br />
                  UTGST
                </th>
                <th colSpan="2">CGST(%)</th>
                <th colSpan="2">CGST</th>
                <th colSpan="2">
                  FAME <br />
                  SUBSIDY
                </th>
                <th colSpan="2">
                  AMOUNT
                  <br />
                  (Rs)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">
                  {" "}
                  {/* {selectedRow === 1 ? "1. " : "1."} */}
                  <textarea
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      padding: "10px",
                      marginTop: "3px",
                    }}
                    type="text"
                    id="r1c3"
                    defaultValue="1."
                    readOnly
                  />
                </td>

                <td className="modelPrinting" colSpan="2">
                  {model === "other" ? (
                    <textarea
                      name="model"
                      value={modelInput}
                      onChange={handleModelInputChange}
                    />
                  ) : (
                    <select
                      name="model"
                      value={model}
                      onChange={handleModelChange}
                    >
                      <option value="">Select</option>
                      {bikeModel.map((bike) => (
                        <option key={bike.model} value={bike.model}>
                          {bike.model}
                        </option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  )}
                </td>

                <td colSpan="2">
                  {model === "other" ? (
                    <textarea
                      value={descriptionInput}
                      onChange={handleDesriptionChange}
                    />
                  ) : (
                    <textarea type="text" value={description} readOnly />
                  )}
                </td>

                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r1c6"
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                  />
                </td>
                <td colSpan="2">
                  <textarea type="text" id="r1c7" defaultValue="1.00" readOnly />
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r1c7"
                    onChange={handleDiscountChange}
                    value={discount}
                    defaultValue="0.00"
                    readOnly
                  />
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r1c7"
                    value={taxableAmount}
                    onChange={(e) => setTaxableAmount(e.target.value)}
                  />
                </td>
                <td colSpan="2">
                  <textarea type="text" id="r1c7"></textarea>
                </td>
                <td colSpan="2">
                  <textarea type="text" id="r1c7" defaultValue="14" readOnly />
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r1c7"
                    value={sgstAmount}
                    onChange={(e) => setSgstAmount(e.target.value)}
                  />
                </td>
                <td colSpan="2">
                  <textarea type="text" id="r1c7" defaultValue="14" readOnly />
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r1c7"
                    value={cgstAmount}
                    onChange={(e) => setcgstAmount(e.target.value)}
                  />
                </td>
                <td colSpan="2">
                  <textarea type="text" id="r1c7"></textarea>
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r1c7"
                    onChange={onAmountChange}
                    value={Amount}
                  />
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td style={{ fontWeight: "bold" }} colSpan="12">
                  SUB TOTAL
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r1c4"
                    value={taxableAmount}
                    onChange={(e) => setTaxableAmount(e.target.value)}
                  />
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r1c5"
                    defaultValue="0.00"
                    readOnly
                  />
                </td>
                <td colSpan="2">
                  <textarea type="text" id="r1c6"></textarea>
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r2c7"
                    value={sgstAmount}
                    onChange={(e) => setSgstAmount(e.target.value)}
                  />
                </td>
                <td colSpan="2">
                  <textarea type="text" id="r2c7"></textarea>
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r2c7"
                    value={cgstAmount}
                    onChange={(e) => setcgstAmount(e.target.value)}
                  />
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r2c7"
                    defaultValue="0.00"
                    readOnly
                  />
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r2c7"
                    value={AmountOutput}
                    onChange={(e) => setamountOutput(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td style={{ fontWeight: "bold" }} colSpan="26">
                  ROUND OFF
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r2c4"
                    defaultValue="-0.00"
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <td style={{ fontWeight: "bold" }} colSpan="26">
                  TOTAL AMOUNT
                </td>
                <td colSpan="2">
                  <textarea
                    type="text"
                    id="r2c4"
                    value={AmountOutput}
                    onChange={(e) => setamountOutput(e.target.value)}
                  />
                </td>
              </tr>
            </tfoot>
          </table>

          <br />
          <br />

          <table>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold" }} colSpan="26">
                  AMOUNT IN WORDS
                </td>
                <td colSpan="2">
                  <textarea
                    style={{ width: "600px" }}
                    type="text"
                    id="r2c4"
                    value={amountInWord}
                    onChange={(e) => setAmountInWord(e.target.value)}
                  />
                </td>
                <td style={{ border: "none" }}>
                  <button
                    className="CalculateBtn"
                    onClick={handleData}
                    disabled={!mandatoryFieldFilled || disabledButton}
                  >
                    {disabledButton ? "" : "Calculate"}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "200px",
          }}
        >
          <div
            style={{
              height: "5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <hr
              style={{
                width: "100%",
                backgroundColor: "black",
                height: "1px",
              }}
            />
            <p style={{ marginTop: "-5px" }}>
              Sign of his customer or his agent
            </p>
          </div>

          <div
            style={{
              height: "5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <div>
              <p style={{ display: "flex", justifyContent: "center" }}>
                For MAA SERVICES(68530)
              </p>

              <hr
                style={{
                  width: "100%",
                  backgroundColor: "black",
                  height: "1px",
                }}
              />
              <p
                style={{
                  marginTop: "-5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Authorised Signature
              </p>
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* <hr
        style={{
          width: "100%",
          backgroundColor: "black",
          height: "2px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop:"-40px",
        }}
      /> */}

        {/* ------------------- Footer content------------- */}

        {footer && (
          <div
            style={{
              marginTop: "-30px",
              overflow: "hidden",
              // position: "relative",
              // width: "100%",
              maxWidth: "100%",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {/* {footer && ( */}
            <div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: "normal",
                    // width: "100%",
                  }}
                >
                  <img
                    style={{
                      height: "120px",
                      width: "120px",
                      // display: "block",
                      // margin: "0 auto",
                    }}
                    src="https://us.123rf.com/450wm/barks/barks2311/barks231100019/218048923-warranty-badge-label-illustration-5-years.jpg?ver=6"
                    alt="logo"
                  />
                </div>

                <ul style={{ lineHeight: "120%" }}>
                  <li>
                    Standard Warranty of 2 year or 30,000 km. Warranty
                    conditions as explained in Owner’s Manual{" "}
                  </li>
                  <li>
                    Additional Extended Warranty(EW) is valid for 3 Years or
                    45,000 Kms (whichever is earlier) to commence on the expiry
                    of Standard warranty of 2 Years or 30,000 Kms (whichever is
                    earlier).
                  </li>
                  <li>
                    Warranty is applicable for only first owner of vehicle.
                  </li>
                </ul>
              </div>

              <div style={{ lineHeight: "normal" }}>
                <p style={{ fontWeight: "bold" }}>Terms & Conditions:</p>
                <p style={{ fontWeight: "bold", marginTop: "-12px" }}>
                  Part A:
                </p>
                <ul style={{ marginTop: "-14px" }}>
                  <li>
                    Warranty claims in respect of such items like shock
                    absorbers, speedometers etc. though claimed through us, are
                    subject to acceptance of therespective manufacturers. In all
                    such cases the decision of the respective manufacturer will
                    be final and binding.
                  </li>
                  <li>
                    Proprietary parts like tyres, tubes, battery and spark plugs
                    are warranted by their respective manufacturers and should
                    be claimed on them directly by the customer. Bajaj Auto
                    Limited shall not be Liable to replace them though their
                    dealer will give full assistance in preferring such claims.
                  </li>
                  <li>
                    Bajaj Auto Limited undertake no liability in the matter of
                    consequential loss or damage caused due to the failure of
                    the parts. Delay, if any, at the repairing workshop in
                    carrying out repair to vehicle shall not be a ground for
                    extending the warranty period, nor shall it give any right
                    to the customer for claiming any compensation for damages.
                    Bajaj Auto Limited reserves the right either to repair or
                    replace the defective parts.
                  </li>
                  <li>
                    Where a defective part can be replaced by part/s of
                    alternative brand/s, which are normally used by Bajaj Auto
                    Limited in the course of manufacture, Bajaj Auto Limited
                    reserves the right to carry out the replacement by a part or
                    parts of any such alternative brand/s.
                  </li>
                  <li>
                    This warranty and any claim arising there from is subject to
                    Pune jurisdiction only.
                  </li>
                </ul>
                <p style={{ fontWeight: "bold", marginTop: "-9px" }}>Part B:</p>
                <ul style={{ marginTop: "-15px" }}>
                  <li>
                    No claim for exchange or repair can be considered unless the
                    customer :
                  </li>
                </ul>
                <ol style={{ marginTop: "-15px" }} type="a">
                  <li>
                    Ensures that immediately upon detection of the defect, he
                    approaches any nearest Authorised Bajaj Vehicle Dealers &
                    Recommended Authorised Service Dealers with the concerned
                    vehicle and enables him to remove and dispatch the part /
                    parts attributing to the manufacturing defect to the
                    Company.
                  </li>
                </ol>
                <ol style={{ marginTop: "-15px" }} type="b">
                  <li>
                    Produces the Owner's Manual, in original, to enable that
                    dealer to verify the details.
                  </li>
                </ol>
                <ul style={{ marginTop: "-15px" }}>
                  <li>
                    It must be expressly understood that claims forwarded
                    directly to us by the owner / customer will not be
                    entertained at all and such defective part/parts thus
                    forwarded by them will lie at our factory at their own risk,
                    and this warranty shall not be enforceable.
                  </li>
                  <li>
                    To avail benefits of warranty, following are mandatory
                  </li>
                </ul>

                <ol style={{ marginTop: "-15px" }}>
                  <li>Availing of Initial 3 Free Services without lapse.</li>
                  <li>
                    Availing paid schedule services at subsequent 5000 kms or
                    120 days from last service whichever occurs first without
                    any lapse till 5 years.
                  </li>
                  <li>
                    Availing of all above services at the Authorised Vehicle
                    Dealers & Recommended Authorised Service Dealers.
                  </li>
                  <li>
                    Usage of only recommended engine oil “Bajaj DTS-i 10000” at
                    specified frequency for max drain interval of 10,000 kms. &
                    engine oil level top-up at 5000 kms.
                  </li>
                  <li>
                    Replacing mandatory periodic parts such as air filter, oil
                    filter etc. as per periodic maintenance schedule.
                  </li>
                </ol>
                <p style={{ fontWeight: "bold", marginTop: "-10px" }}>
                  Part C:
                </p>
                <p style={{ marginTop: "-15px" }}>
                  Further this warranty is NOT applicable to:
                </p>
                <ul style={{ marginTop: "-15px" }}>
                  <li>
                    Normal maintenance operations like brake & clutch
                    adjustments, cleaning of fuel system, engine tune-up or such
                    other adjustments.
                  </li>
                  <li>
                    Parts subjected to normal wear & tear like Clutch Plates,
                    Brake Shoes, Chain, Sprockets, Fork Oil Seal, Spark Plug,
                    Control Cables, Brake pads.
                  </li>
                </ul>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "10px",
                  }}
                >
                  <div style={{ width: "30%", justifyContent: "flex-end" }}>
                    <div>
                      <p style={{}}>
                        Model :
                        <span style={{ marginLeft: "19px" }}>
                          {/* {modelOutput} */}
                          {description}
                        </span>
                      </p>
                      <p style={{}}>
                        Chassis No :{" "}
                        <span style={{ marginLeft: "15px" }}>
                          {chassisOutput}
                        </span>
                      </p>
                    </div>

                    <hr
                      style={{
                        width: "100%",
                        backgroundColor: "black",
                        height: "2px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "50px",
                      }}
                    />
                    <p
                      style={{
                        marginTop: "-5px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      Sign of Customer Or His Agent
                    </p>
                  </div>

                  <div style={{ justifyContent: "flex-end", width: "30%" }}>
                    <div>
                      <p style={{}}>
                        Customer Name :
                        <span style={{ marginLeft: "15px" }}>{nameoutput}</span>
                      </p>
                      <p style={{}}>
                        Date of Sale :
                        <span style={{ marginLeft: "15px" }}>
                          {" "}
                          {DateOutput}
                        </span>
                      </p>
                    </div>

                    <div>
                      <p
                        style={{
                          height: "-50px",

                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        For( MAA SERVICES (68530))
                      </p>
                      <hr
                        style={{
                          width: "100%",
                          backgroundColor: "black",
                          height: "2px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginTop: "-3px",
                        }}
                      />
                      <p
                        style={{
                          marginTop: "-5px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Authorised Signatory
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* )} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
