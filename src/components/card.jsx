//insert code here to show each individual card
import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import footLogo from '../../assets/images/Foob-48.png';
import cricLogo from '../../assets/images/Cric-48.png';

class GameCard extends React.Component {
  render() {
    const tableHeaderStyle = { fontWeight: 'normal' }
    const cellStyle = { textAlign: 'center', fontWeight: 'bold' }
    const x = this.props.jsonData.startTime;
    const y = this.props.jsonData.endTime;
    const currTime = moment();
    const timeBlock = (moment(x).isValid()) ? ((this.props.jsonData.endTime.length != 0) ?
      moment.parseZone(x).format('DD[th] MMM') + ' - ' + moment.parseZone(y).format('DD[th] MMM') :
      moment.parseZone(x).format('DD[th] MMM')) : '';
    const timeFromNow = ((moment(x).isValid()) ?
      (currTime.diff(moment(x), 'hours') + 'h ' + currTime.diff(moment(x), 'minutes') + 'm ' +
        currTime.diff(moment(x), 'seconds') + 's') : '');
    return (
      <div className="cardMain" style={{
        backgroundColor: '#181818', margin: '20px', color: 'white', fontFamily: 'serif'
      }}>
        <h2 className="cardHeader" style={{
          display: 'inline-block', margin: '20px', paddingTop: '20px', fontWeight: 'normal'
        }}>
          {this.props.jsonData.name}
        </h2>
        <div>
          <div className="tourneyName" style={{ marginLeft: '20px', float: 'left' }}>
            {this.props.jsonData.tournament}
          </div>
          <div className="timeBlock" style={{ marginRight: '20px', textAlign: 'right' }}>
            {timeBlock}
          </div>
          <br />
          <br />
          <table width='100%'>
            <tbody>
              <tr>
                <th style={tableHeaderStyle}>PRIZES</th>
                <th style={tableHeaderStyle}>GAMES</th>
                <th style={tableHeaderStyle}>STARTS IN</th>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', color: 'limegreen', fontWeight: 'bold' }}>&#x20b9; {this.props.jsonData.prizes}</td>
                <td style={cellStyle}>{this.props.jsonData.games}</td>
                <td style={cellStyle}>{this.props.jsonData.games}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>);
  }
}

export default GameCard;
