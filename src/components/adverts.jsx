import React from 'react';
import Ad from '../../assets/images/Ad-480x160.png';

const AD_URL = 'https://sportscafe.in/'

class BottomFilter extends React.Component {
  handleAdClick() {
    window.open(AD_URL)
  }
  render() {
    return (
      <div className="advert" onClick={this.handleAdClick} style={{
        margin: '20px', backgroundImage: "url('../../assets/images/Ad-480x160.png')",
        backgroundRepeat: 'repeat-x', height: '180px', width: '97%', cursor: 'pointer'
      }}>
      </div>);
  }
}

export default BottomFilter;
