import React from "react";
import "./style.css";
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
      <div className="tours">
        <div className="info">
          <div className="tour-picture" />
          <div className="tour-name">
            <p>Name</p>
          </div>
          <div className="startdate">
            <p>Start date</p>
          </div>
          <div className="enddate">
            <p>End date</p>
          </div>
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
