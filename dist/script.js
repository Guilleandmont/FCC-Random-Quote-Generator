import { FaTwitterSquare } from "https://cdn.skypack.dev/react-icons/fa";
import {
motion,
AnimatePresence } from
"https://cdn.skypack.dev/framer-motion@4.0.0";

const url = "https://api.quotable.io/random";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "" };

    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    fetch(url).then((quoteObject) =>
    quoteObject.json().then(quoteObject => {
      this.setState({
        input: quoteObject.content,
        author: quoteObject.author });

    }));

  }

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("h1", { id: "text", animate: { opacity: 1 } },
      this.state.input), /*#__PURE__*/

      React.createElement("p", { id: "author" }, "~ ", this.state.author), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet", target: "_top" }, /*#__PURE__*/
      React.createElement(FaTwitterSquare, { style: { height: 50 } })), /*#__PURE__*/

      React.createElement("button", { id: "new-quote", onClick: this.getQuote }, "New quote"))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("quote-box"));