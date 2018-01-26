import React from 'react';
import Ad from '../../assets/images/Ad-480x160.png';

const AD_URL = 'https://sportscafe.in/'

class BottomFilter extends React.Component {
  handleAdClick() {
    window.open(AD_URL)
  }
  render() {
    return (
      <div className="advert" onClick={this.handleAdClick}
        style={{ backgroundImage: "url('../../assets/images/Ad-480x160.png')" }}>
      </div>);
  }
}

export default BottomFilter;
