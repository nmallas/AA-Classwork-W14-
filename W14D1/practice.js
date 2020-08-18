import 'https://unpkg.com/react@16/umd/react.development.js';
import 'https://unpkg.com/react-dom@16/umd/react-dom.development.js';

let footerDiv = document.getElementById("foot");

const foot = React.createElement("footer", null, "Copyright");
ReactDOM.render(foot, footerDiv)

const links = document.getElementById("links");
let posts = React.createElement("a", {"href": "/posts"}, "All Posts");
ReactDOM.render(posts, links)


let postHead = document.getElementById("postHead");
let postHeader = React.createElement(
    "div",
    {className: "post-header"},
    React.createElement("span", null, "User 1"),
    React.createElement("span", null, "2020-05-18"))
ReactDOM.render(postHeader, postHead)
