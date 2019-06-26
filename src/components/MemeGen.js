import React, { Component } from "react";
import "../style.css";

class MemeGen extends Component {
  state = {
    topText: "",
    bottomText: "",
    memeImage: "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",
    memeImages: []
  };

  componentDidMount() {
    this.fetchMemes();
  }

  fetchMemes = () =>
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        //console.log(memes[0]);
        this.setState({ memeImages: memes });
      });

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  newMeme = event => {
    event.preventDefault();
    const randomN = Math.floor(Math.random() * this.state.memeImages.length);
    const randomMeme = this.state.memeImages[randomN].url;
    this.setState({ memeImage: randomMeme });
  };

  clearText = event => {
    event.preventDefault();
    this.setState({
      topText: "",
      bottomText: ""
    });
  };

  render() {
    return (
      <div>
        <form className={"meme-form"}>
          <input
            type="text"
            value={this.state.topText}
            name="topText"
            placeholder="Top"
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            placeholder="Bottom"
            onChange={this.handleChange}
          />

          <button onClick={this.newMeme}>Memake!</button>
          <button onClick={this.clearText}>Clear</button>
        </form>
        <div className="meme">
          <img src={this.state.memeImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGen;
