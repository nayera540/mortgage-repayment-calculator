import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(null);
  const [term, setTerm] = useState(null);
  const [rate, setRate] = useState(null);
  const [type, setType] = useState("");
  const [isClear, setIsClear] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [monthlyRepay, setMonthlyRepay] = useState(null);
  const [repayTerm, setRepayTerm] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const amountValue = form.mortgage_amount.value;
    const termValue = form.term.value;
    const rateValue = form.rate.value;

    setAmount(amountValue);
    setTerm(termValue);
    setRate(rateValue);

    setShowResult(true);
  }

  return (
    <div className="App">
      <Calculator handleSubmit={handleSubmit} setType={setType} type={type} />
      {showResult ? <Results /> : <EmptyResults />}
    </div>
  );
}

function Calculator({ handleSubmit, setType, type }) {
  return (
    <div className="calculator__container">
      <form onSubmit={handleSubmit}>
        <div className="calculator__header">
          <h1>Mortgage Calculator</h1>
          <button className="clear__btn">Clear All</button>
        </div>

        <label className="labels" for="amount">
          Mortgage Amount
        </label>
        <br />
        <div class="input_wrapper">
          <input
            type="text"
            required
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
                required
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
                required
                name="rate"
                autoComplete="false"
              />
              <span class="input_icon">%</span>
            </div>
          </div>
        </div>
        <div className="radio__btn">
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

function Results() {
  return <div className="results__container"></div>;
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
