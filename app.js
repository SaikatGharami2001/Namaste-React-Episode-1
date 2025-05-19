// const code = React.createElement(
//     "h1",
//     { className: "java", id: "react" },
//     "My First React Code"
// );

// console.log(code);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(code);

// <div id="parent">
//
//    <div id="child">
//          <h1><h1/>
//    </div>
//
//</div>

const create = React.createElement;

const parent = create("div", { id: "parent" }, [
    create("div", { id: "child1" }, [
        create("h1", { id: "heading" }, "Hello from H1 Tag"),
        create("h2", { id: "heading" }, "Hello from H2 Tag"),
    ]),
    create("div", { id: "child2" }, [
        create("h3", { id: "heading" }, "Hello from H3 Tag"),
        create("h4", { id: "heading" }, "Hello from H4 Tag"),
    ]),
]);

const element = ReactDOM.createRoot(document.getElementById("root"));

element.render(parent);
