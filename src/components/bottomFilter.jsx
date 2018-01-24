import React from 'react';
import Challenges from '../../assets/images/Challenges.png';
import ChallengesLine from '../../assets/images/Challenges-Line.png';
import InPlay from '../../assets/images/In-Play.png';
import InPlayLine from '../../assets/images/In-Play-Line.png';

class BottomFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChallengesSelected: this.props.isChallengesSelected,
    }
    this.handleChallengesLineClick = this.handleChallengesLineClick.bind(this);
    this.handlePlayLineClick = this.handlePlayLineClick.bind(this);
  }

  handleChallengesLineClick() {
    this.setState({
      isChallengesSelected: true,
    });
    this.props.callbk(true);
  }

  handlePlayLineClick() {
    this.setState({
      isChallengesSelected: false,
    });
    this.props.callbk(false);
  }

  render() {
    const spanStyle = { color: 'white' };
    const cursorStyle = { cursor: 'pointer' };
    const divStyle = {flex: 1, textAlign: 'center', margin: '10px'};
    return (
      <div>
        {(this.props.isChallengesSelected) ?
          <div className='btmFilt' style={{display: 'flex'}}>
            <div style={divStyle}><div><img src={Challenges} style={cursorStyle} onClick={this.handleChallengesLineClick} /></div>
            <span className="caption" style={spanStyle}>Challenges</span></div>
            <div style={divStyle}><div><img src={InPlayLine} style={cursorStyle} onClick={this.handlePlayLineClick} /></div>
            <span className="caption" style={spanStyle}>In Play</span></div>
          </div> :
          <div className='btmFilt' style={{display: 'flex'}}>
            <div style={divStyle}><div><img src={ChallengesLine} style={cursorStyle} onClick={this.handleChallengesLineClick} /></div>
            <span className="caption" style={spanStyle}>Challenges</span></div>
            <div style={divStyle}><div><img src={InPlay} style={cursorStyle} onClick={this.handlePlayLineClick} /></div>
            <span className="caption" style={spanStyle}>In Play</span></div>
          </div>
        }
      </div>);
  }
}

export default BottomFilter;
