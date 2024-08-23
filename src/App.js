function App() {
  return (
    <div className="App">
      <Calculator />
      <Results />
    </div>
  );
}

function Calculator() {
  return (
    <div className="calculator__container">
      <div className="calculator__header">
        <h1>Mortgage Calculator</h1>
        <button className="clear__btn">Clear All</button>
      </div>
      <form>
        <label>Mortgage Amount</label>
        <br></br>
        <input type="text" required name="mortgage_amount"></input>
        <div className="rate__term">
          <label>Mortgage Term</label>
          <input type="text" required name="term"></input>
          <label>Interest Rate</label>
          <input type="text" required name="rate"></input>
        </div>
        <div className="radio__btn">
          <label>Mortgage Type</label>
          <label>
            <input
              type="radio"
              value="Repayment"
              className="repayment__intput"
            />
            Repayment
          </label>
          <label>
            <input
              type="radio"
              value="Interest Only"
              className="interest__intput"
            />
            Interest Only
          </label>
        </div>
        <button type="submit">
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
          Calculate Repayments
        </button>
      </form>
    </div>
  );
}

function Results() {
  return <div className="results__container">
    <img src="../assets/images/illustration-empty.svg" alt="empty photo"></img>
    <h1>Results shown here</h1>
    <p>Complete the form and click “calculate repayments” to see what 
    your monthly repayments would be.</p>
  </div>;
}

export default App;
