/*
    <div id='parent'>
        <div id='child1>
            <h1>Hello World!!</h1>
            <h2>Hello World!!</h2>
        </div>
        
    </div>
*/

const heading = React.createElement(
    "h1",
    {},
    "Hello World!!"
)
console.log("heading value",heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);