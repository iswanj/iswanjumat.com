import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './font-awesome.css';

class App extends Component {
  state = {
    appStyle: null
  }
  componentDidMount() {
    const images = [0,1,2,3,4,5];
    let randImage = images[Math.floor(Math.random() * images.length)];
    const newBackImage = new Image();
    newBackImage.src = `${randImage}.jpg`;
    newBackImage.onload = () => {
      this.setState({
        appStyle: {
          backgroundImage: `url(${newBackImage.src})`,
          display: 'flex'
        }
      })
    }
  }
  render() {
    const { appStyle } = this.state;
    return (
      <div className="App" style={appStyle}>
        <div className="rightBox">
          <div className="myImage"></div>
          <div className="position">
            <p>Frontend Developer</p>
            <h1>Iswan Jumat</h1>
          </div>
          <div className="social-icons">
            <ul>
              <li><a href="https://twitter.com/TuanIswan" className="twitter" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="https://lk.linkedin.com/in/iswanjumat" className="linkedin" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
              <li><a href="https://github.com/iswanj" className="github" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
              <li><a href="https://www.facebook.com/iswan1987" className="facebook" target="_blank"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/iswanjumat/" className="instagram" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
