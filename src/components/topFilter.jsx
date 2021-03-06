import React from 'react';
import All from '../../assets/images/All-48.png';
import Cric from '../../assets/images/Cric-48.png';
import Foob from '../../assets/images/Foob-48.png';

const tileSelectedStyle = {
  flex: 1, textAlign: 'center', background: '#000033', borderBottom: '3px solid cadetblue', cursor: 'pointer'
};
const tileStyle = { flex: 1, textAlign: 'center', background: '#000033', cursor: 'pointer' };

class TopFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMenuStyle: tileSelectedStyle,
      footMenuStyle: tileStyle,
      cricMenuStyle: tileStyle,
    };
    this.handleFootClick = this.handleFootClick.bind(this);
    this.handleAllClick = this.handleAllClick.bind(this);
    this.handleCricClick = this.handleCricClick.bind(this);
  }

  handleFootClick() {
    this.setState({
      allMenuStyle: tileStyle,
      cricMenuStyle: tileStyle,
      footMenuStyle: tileSelectedStyle,
    })
    this.props.sport('football');
  }

  handleCricClick() {
    this.setState({
      allMenuStyle: tileStyle,
      cricMenuStyle: tileSelectedStyle,
      footMenuStyle: tileStyle,
    });
    this.props.sport('cricket');
  }

  handleAllClick() {
    this.setState({
      allMenuStyle: tileSelectedStyle,
      cricMenuStyle: tileStyle,
      footMenuStyle: tileStyle,
    })
    this.props.sport('all');
  }

  render() {
    return (
      <div className="topFiltParent">
        <div className="topFilt" style={this.state.allMenuStyle} onClick={this.handleAllClick}>
          <div className="topFilterItem"><img src={All} /></div>
          <span className="topFilterCaption" >ALL</span>
          <br /><br />
        </div>
        <div className="topFilt" style={this.state.cricMenuStyle} onClick={this.handleCricClick}>
          <div className="topFilterItem"><img src={Cric} /></div>
          <span className="topFilterCaption" >CRICKET</span>
        </div>
        <div className="topFilt" style={this.state.footMenuStyle} onClick={this.handleFootClick}>
          <div className="topFilterItem"><img src={Foob} /></div>
          <span className="topFilterCaption">FOOTBALL</span>
        </div>
      </div>);
  }
}

export default TopFilter;
