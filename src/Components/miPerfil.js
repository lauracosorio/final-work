import React from "react";


import axios from "axios";
import HomePerfil from "./HomePerfil";
import Registrese from "./Registrese";
import HeaderPerfil from "./HeaderPerfil";
import NavPerfil from "./NavPerfil";

class miPerfil extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      Name: "",
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/profiles", this.state.form)
      .then(profile =>
        this.setState({
          loading: true
        })
      )
      .catch(error => {
        this.setState({
          loading: true,
          error: error
        });
      });
  };

  render() {
    if (this.state.loading) {
      return <HomePerfil />;
    }

    return (
      <React.Fragment>
    
<NavPerfil 
name = {this.state.form.name}/>
        <div className="container">
          <div className="row">
            <div className="col-6 ">
            
              <Registrese
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default miPerfil;
