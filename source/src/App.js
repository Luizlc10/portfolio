import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="computer-bg">
          <div id="bg1-nav">
            <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <span className="navbar-text">
                <a href="#">
                  <img id="pt-flag" className="flag" src="img/PT-BR.png" alt="portuguese"></img>
                </a>
              </span>
              <span className="navbar-text">
                <a href="">
                  <img id="en-flag" className="flag" src="img/EN.png" alt="english"></img>
                </a>
              </span>
            </div>
          </nav>
          </div>
          <div id="bg1-text">
            <div className="container">
              <h1>Hi, there! I'm Luiz.</h1>
              <h1>I'm a web and mobile developer</h1>
            </div>
          </div>
        </div>

        <div id="about">
          <div className="container">
            <img id="img-me" src="img/me.jpg"></img>
            <h1>About me</h1>
            <p>I stydy analysis and systems development and I work with JavaScript for develop and design web and mobile projects about 2 years using the most used JS frameworks on the market (Angular 2+, react and vue for web, ionic 2 and react native for mobile) and building APIs using NodeJs with MongoDB or MySQL.</p>
          </div>
        </div>

        <div id="projects">
          <div className="container">
            <h1>Projects</h1>
            <div className="row">

              <div className="card">
                <img className="card-img-top" src="img/card-image.svg" alt="Card image cap"></img>
                <div className="card-body">
                  <p>Project name</p>
                </div>
              </div>


            </div>
          </div>
        </div>

        <footer id="contact">
          <div id="footer-top">
            <div className="container">
              <h1>Contact</h1>
              <div className="row">

                <div className="col-sm-12 col-md-6 col-lg-6">

                  <form>
                    <div className="form-group row">
                      <div className="col">
                        <input type="email" className="form-control" placeholder="Name"></input>
                      </div>
                      <div className="col">
                        <input type="password" className="form-control" placeholder="Subject"></input>
                      </div>
                    </div>

                    <div className="form-group">
                      <input className="form-control" type="email" placeholder="Email"></input>
                    </div>

                    <div className="form-group">
                      <textarea className="form-control" rows="3" placeholder="Text"></textarea>
                    </div>
                    <button type="submit" className="btn btn-warning">Send</button>
                  </form>

                </div>

                <div className="col-sm-12 col-md-6 col-lg-6">
                  <a href="https://github.com/Luizlc10" target="_blank">
                    <img className="social" src="img/github.png"></img>
                  </a>
                  <a href="https://gitlab.com/luiz.lc10" target="_blank">
                    <img className="social" src="img/gitlab.png"></img>
                  </a>
                  <a href="https://www.linkedin.com/in/luiz-cl%C3%A1udio-aa70b6bb/" target="_blank">
                    <img className="social" src="img/linkedin.png"></img>
                  </a>
                  <a href="https://www.instagram.com/bubu_lc/" target="_blank">
                    <img className="social" src="img/insta.png"></img>
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div id="footer-bottom">
            <p>Created with ❤ and 🍵 by me</p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
