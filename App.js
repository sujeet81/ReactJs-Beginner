/*************************************************
    
    <div id="parent">
        <div id="child1">
            <h1></h1>
        </div>
        <div id="child2">
            <h1></h1>
        </div>
    </div> 

    */


const parent = React.createElement("div" ,{id : "parent"}, 
    [React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "this is the first child tag"),
            React.createElement("h2", {}, "This is also under the first child tag but it is h2 tag")]

            React.createElement("h", {}, "this is the first child tag"),
            React.createElement("h2", {}, "This is also under the first child tag but it is h2 tag")]    
    ]
    )
)


const heading = React.createElement("h1" , {} , "Hello  world from React");

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);