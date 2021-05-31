import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      toplamAtis:0,
      turaAtis:0,
      yaziAtis:0,

    };
  }
  handleClick = () => {
    let sayi=Math.floor(Math.random()*2);
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping:true ,side:sayi===0?"yazi":"tura", toplamAtis:this.state.toplamAtis+1,turaAtis:this.state.side==="tura"? this.state.turaAtis+1 :this.state.turaAtis,
    yaziAtis:this.state.side ==="yazi" ? this.state.yaziAtis+1 : this.state.yaziAtis });
   
    
    
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.toplamAtis} </strong>
          atıştan
          <strong>{this.state.turaAtis} </strong>ü tura
          <strong> {this.state.yaziAtis} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
