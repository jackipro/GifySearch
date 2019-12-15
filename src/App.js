import React, { Fragment, Component } from "react";
//REVIEW  import Nav component:
import Nav from "./component/layout/Nav.js";
//REVIEW  import Gifs component:
import Gifs from "./component/gifphy/Gifs.js";
//REVIEW  import Gif random component:
import GifRandomItem from "./component/gifphy/GifRandomItem.js";
//REVIEW import Search componetn :
import Search from "./component/gifphy/Search.js";
//REVIEW  import css :
import "./App.css";
//!  can't access data from : import axios:
//! import axios from "axios";
import request from "superagent";
//REVIEW  import router here :
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//REVIEW  import about pages :
import About from "./component/layout/About";
//REVIEW  import search random pages :
import SearchRandom from "./component/gifphy/SearchRandom.js";
export class App extends Component {
  state = {
    gifs: [],
    gif: [],
    loading: false
  };
  // ? ANCHOR  Show trending Gif:
  async componentDidMount() {
    this.setState({ loading: true });
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=CDWp9F4YG8K0SS6dEp7Kbtt5FszuZQWn&limit=15&rating=G`;
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
      this.setState({ loading: false });
    });
    // this.setState({ gifs: res.data.data, loading: false });
  }
  //ANCHOR  Search Gif:
  searchGif = text => {
    this.setState({ loading: true });
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CDWp9F4YG8K0SS6dEp7Kbtt5FszuZQWn&q=${text}&limit=500&offset=0&rating=G&lang=vn`;
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
      this.setState({ loading: false });
    });
  };
  //ANCHOR  Search Random Gif:
  searchRandom = tag => {
    this.setState({ loading: true });
    const url = `https://api.giphy.com/v1/gifs/random?api_key=CDWp9F4YG8K0SS6dEp7Kbtt5FszuZQWn&tag=${tag}&rating=G`;
    request.get(url, (err, res) => {
      this.setState({ gif: res.body.data.images.fixed_width.url });
      this.setState({ loading: false });
      // console.log(res.body.data.images.downsized);
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />

          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <h1 className="text-center title-home">
                      Let search your favour GIF
                    </h1>
                    <Search searchGif={this.searchGif} />

                    <Gifs gifs={this.state.gifs} loading={this.state.loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/searchrandom"
                render={props => (
                  <Fragment>
                    <h1 className="text-center title-home">
                      Search Random Tag GIF
                    </h1>
                    <SearchRandom searchRandom={this.searchRandom} />
                    <GifRandomItem gif={this.state.gif} />
                    <Gifs gifs={this.state.gifs} loading={this.state.loading} />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
