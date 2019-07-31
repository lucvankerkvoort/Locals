import React from "react";
import "./style.css";
import Pictures from "./images/";
import BackgroundSlideshow from "react-background-slideshow";

class Login extends React.Component {
  // handleImage(){
  //   for (let i = 0; i < Pictures.length; i++) {
  //     setTimeout(this.setState{background: Pictures[i]}, 1000);
  //   }
  // }

  render() {
    console.log(Pictures.length);

    const styles = {
      background: `url('${Pictures[1]}')`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    };

    return (
      <div className="background">
        <BackgroundSlideshow images={Pictures} />
        <div className="body">
          <div className="title">
            <h1>Welcome Travellers</h1>
          </div>
          <div className="container">
            <h2>Login</h2>
            <form className="form">
              <label>Username</label>
              <br />
              <input type="text" placeholder="" />
              <br />
              <br />
              <label>Password</label>
              <br />
              <input type="password" placeholder="" />
              <p>
                if this is your first time visiting <br />
                <a href="#">Register Here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
