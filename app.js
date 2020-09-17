const title = "My First React Element!";
const desc = "I just learned how to create a react element and append it to the DOM";
const myTitleId = 'main-title';
const name = 'Todd';

const header = (
  <header >
    <h1 id={myTitleId}> {name}'s First React Element! </h1>
    <p className="main-desc"> {desc} </p>
  </header>
)

ReactDOM.render(
  header,
  document.getElementById('root')
)