import React from "react";
import API from "./controller";

class Test extends React.Component {
  state = {
    locals: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getLocals()
      .then(
        res => console.log(res) //, this.setState({ locals: res.data })
      )
      .catch(err => console.log(err));
  };

  render() {
    return <h1>Welcome</h1>;
  }
}

export default Test;
