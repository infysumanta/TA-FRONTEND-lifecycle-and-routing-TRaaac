import { Component } from "react";
import Card from "./Card";
class App extends Component {
  constructor(props) {
    console.log("App constructor");

    super(props);
    this.state = {
      data: null,
      new: false,
      valuetoDisplay: "mail",
      valueTitle: "",
      value: "",
    };
  }

  componentDidMount() {
    console.log("App onmount");
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data.results[0],
          valuetoDisplay: "",
          valueTitle: "",
          value: "",
        });
      });
  }

  getRandomeUser = (event) => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.results[0] });
      });
  };

  handleChangeData = (event, content) => {
    console.log("icon clicked");
    console.log(this.state.data);
    switch (content) {
      case "user":
        this.setState({
          valueTitle: "my Name Is",
          value: this.state.data.name.first,
        });
        break;
      case "mail":
        this.setState({
          valueTitle: "Email Address",
          value: this.state.data.email,
        });
        break;

      case "dob":
        this.setState({
          valueTitle: "Age is",
          value: this.state.data.dob.age,
        });
        break;

      case "address":
        this.setState({
          valueTitle: "Address is",
          value:
            this.state.data.location.street.number +
            ", " +
            this.state.data.location.street.name +
            ", " +
            this.state.data.location.city +
            ", " +
            this.state.data.location.country,
        });
        break;

      case "phone":
        this.setState({
          valueTitle: "Phone No. is",
          value: this.state.data.phone,
        });
        break;

      case "password":
        this.setState({
          valueTitle: "Password is",
          value: this.state.data.login.password,
        });
        break;

      default:
        break;
    }
    this.setState({ valueToDisplay: content });
  };

  render() {
    console.log("App render");
    return (
      <div className="main-div">
        <header></header>
        <main>
          <section className="card-sec">
            {!this.state.data ? (
              <h1>Loading</h1>
            ) : (
              <Card
                data={this.state.data}
                valuetoDisplay={this.state.valuetoDisplay}
                valueTitle={this.state.valueTitle}
                value={this.state.value}
                getRandomeUser={this.getRandomeUser}
                handleChangeData={this.handleChangeData}
              />
            )}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
