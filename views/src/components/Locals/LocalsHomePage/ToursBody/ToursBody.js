import React from "react";

class Tours extends React.Component {
  state = {
    tours: ""
  };
  //   componentDidMount(){
  //       this.loadTours
  //   }

  //   loadTours = () => {
  //       API.getTours().then(result => console.log(result), this.setState({tours: result}))
  //   }
  render() {
    return (
      <div>
        <div className="tours">
          <h1>Hello World</h1>
          <div className="info" />
          {/* {this.props.tours.map((res, i) => {
            <div key={i}>
              <p>{res.name}</p>
              <p>{res.startdate}</p>
              <p>{res.enddate}</p>
            </div>; */}
          {/* })} */}
        </div>
      </div>
    );
  }
}

export default Tours;
