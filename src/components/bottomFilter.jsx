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
    return (
      <div>
        {(this.props.isChallengesSelected) ?
          <div className='btmFiltParent'>
            <div className='btmFilt'><div><img className='btmFiltChal' src={Challenges}
              onClick={this.handleChallengesLineClick} /></div>
              <span className="btmFilterCaption">Challenges</span></div>
            <div className='btmFilt'><div><img className='btmFiltInplay' src={InPlayLine}
              onClick={this.handlePlayLineClick} /></div>
              <span className="btmFilterCaption">In Play</span></div>
          </div> :
          <div className='btmFiltParent'>
            <div className='btmFilt'><div><img className='btmFiltChal' src={ChallengesLine}
              onClick={this.handleChallengesLineClick} /></div>
              <span className="btmFilterCaption">Challenges</span></div>
            <div className='btmFilt'><div><img className='btmFiltInplay' src={InPlay}
              onClick={this.handlePlayLineClick} /></div>
              <span className="btmFilterCaption">In Play</span></div>
          </div>
        }
      </div>);
  }
}

export default BottomFilter;
