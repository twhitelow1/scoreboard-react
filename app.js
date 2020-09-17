const title = "My First React Element!"
const desc = "I just learned how to create a react element and append it to the DOM"
const header = ( <
  header >
  <
  h1 > {
    title
  } < /h1> <
  p > {
    desc
  } < /p> <
  /header>
)

ReactDOM.render(
  header,
  document.getElementById('root')
)