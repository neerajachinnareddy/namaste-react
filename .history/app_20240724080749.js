const heading = React.createElement(
    "h1",
    {},
    "Hello World!!"
)
console.log("heading value",heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);