/*
    <div id='parent'>
        <div id='child1>
            <h1>Hello World!!</h1>
            <h2>Hello World!!</h2>
        </div>
        <div id="child2">
            <h1>Hello World!!</h1>
            <h2>Hello World!!</h2>
        </div>
        
    </div>
*/

const divEle = React.createElement(
    "div",
    {id:'parent'},
    [
        React.createElement("div",{id:'child1'},
            [
                React.createElement("h1",{},"Hello World!!"),
                React.createElement("h2",{},"Hello World!!")
            ]
            
        ),
        React.createElement("div",{id:'child2'},
            [
                React.createElement("h1",{},"Hello World!!"),
                React.createElement("h2",{},"Hello World!!")
            ]
            
        ),
    ]
    
)
// const heading = React.createElement(
//     "h1",
//     {},
//     "Hello World!!"
// )
// console.log("heading value",heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divEle);