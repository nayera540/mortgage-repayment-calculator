import { useState, useRef } from "react";

function App() {
  const [amount, setAmount] = useState(null);
  const [term, setTerm] = useState(null);
  const [rate, setRate] = useState(null);
  const [type, setType] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [monthlyRepay, setMonthlyRepay] = useState(null);
  const [repayTerm, setRepayTerm] = useState(null);

  const formRef = useRef(null); // Add ref to the form

  function handleClearAll() {
    // Reset state values
    setAmount(null);
    setTerm(null);
    setRate(null);
    setType("");
    setMonthlyRepay(null);
    setRepayTerm(null);
    setShowResult(false);

    // Reset the form inputs
    if (formRef.current) {
      formRef.current.reset();
    }
  }


  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const amountValue = parseFloat(form.mortgage_amount.value);
    const termValue = parseFloat(form.term.value);
    const rateValue = parseFloat(form.rate.value) / 100;

    setAmount(amountValue);
    setTerm(termValue);
    setRate(rateValue);

    if (type === "Repayment") {
      const monthlyRate = rateValue / 12;
      const monthRepay =
        amountValue *
        ((monthlyRate * Math.pow(1 + monthlyRate, termValue * 12)) /
          (Math.pow(1 + monthlyRate, termValue * 12) - 1));

      setMonthlyRepay(monthRepay);
      setRepayTerm(monthRepay * (termValue * 12));
    } else if (type === "Interest_Only") {
      const monthRepay = amountValue * (rateValue / 12);
      setMonthlyRepay(monthRepay);
      setRepayTerm(monthRepay * termValue * 12 + amountValue);
    }

    setShowResult(true);
  }
  return (
    <div className="App">
      <Calculator
        handleSubmit={handleSubmit}
        handleClearAll={handleClearAll}
        setType={setType}
        type={type}
        formRef={formRef}
      />
      {showResult ? (
        <Results monthlyRepay={monthlyRepay} repayTerm={repayTerm} />
      ) : (
        <EmptyResults />
      )}
    </div>
  );
}

function Calculator({
  handleSubmit,
  setType,
  type,
  amount,
  formRef,
  handleClearAll,
}) {
  return (
    <div className="calculator__container">
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="calculator__header">
          <h1>Mortgage Calculator</h1>
          <button className="clear__btn" onClick={handleClearAll}>Clear All</button>
        </div>

        <label className="labels" for="amount">
          Mortgage Amount
        </label>
        <br />
        <div class="input_wrapper">
          <input
            type="text"
            value={amount}
            name="mortgage_amount"
            autoComplete="false"
            
          />
          <span class="input_icon">£</span>
        </div>
        <div class="rate__term">
          <div class="input_group">
            <label for="term" className="labels">
              Mortgage Term
            </label>
            <div class="input_wrapper">
              <input
                type="text"
                id="term"
                name="term"
                autoComplete="false"
              />
              <span class="input_icon">years</span>
            </div>
          </div>
          <div class="input_group">
            <label for="rate" className="labels">
              Interest Rate
            </label>
            <div class="input_wrapper">
              <input
                type="text"
                id="rate"
                name="rate"
                autoComplete="false"
              />
              <span class="input_icon">%</span>
            </div>
          </div>
        </div>
        <div className="radio__btn">
          <label>Mortgage Type</label>
          <div
            className={`repayment__input ${
              type === "Repayment" ? "Repayment" : ""
            }`}
          >
            <label className="radio__label">
              <input
                type="radio"
                name="mortgageType"
                value="Repayment"
                onChange={(e) => setType(e.target.value)}
              />
              Repayment
            </label>
          </div>
          <div
            className={`interest__input ${
              type === "Interest_Only" ? "Interest_Only" : ""
            }`}
          >
            <label className="radio__label">
              <input
                type="radio"
                name="mortgageType"
                value="Interest_Only"
                onChange={(e) => setType(e.target.value)}
              />
              Interest Only
            </label>
          </div>
        </div>

        <button type="submit" className="calc">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#133041"
              d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"
            />
          </svg>
          <span>Calculate Repayments</span>
        </button>
      </form>
    </div>
  );
}

function Results({ monthlyRepay, repayTerm }) {
  return (
    <div className="results__container">
      <h1>Your results</h1>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="results">
        <div className="month__repay">
          <p>Your monthly repayments</p>
          <p className="repay">£{monthlyRepay.toLocaleString()}</p>
        </div>
        <div className="repay__term">
          <p>Total you'll repay over the term</p>
          <p className="term">£{repayTerm.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

function EmptyResults() {
  return (
    <div className="empty__results__container">
      <img
        src="../assets/images/illustration-empty.svg"
        alt="empty photo"
      ></img>
      <h1>Results shown here</h1>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}

export default App;
