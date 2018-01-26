//insert code here to show each individual card
import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import footLogo from '../../assets/images/Foob-48.png';
import cricLogo from '../../assets/images/Cric-48.png';
import {msToHMS} from '../common/utils';

class GameCard extends React.Component {
  render() {
    const x = this.props.jsonData.startTime;
    const y = this.props.jsonData.endTime;
    const currTime = moment();
    const timeBlock = (moment(x).isValid()) ? ((this.props.jsonData.endTime.length != 0) ?
      moment.parseZone(x).format('DD[th] MMM') + ' - ' + moment.parseZone(y).format('DD[th] MMM') :
      moment.parseZone(x).format('DD[th] MMM')) : '';
    const timeFromNow = ((moment(x).isValid() && currTime.diff(moment(x))<0) ?
      (moment(x).diff(currTime, 'hours') + ' hrs') : 'NA');
    return (
      <div className="cardMain">
        <div style={{ display: "inline-block", width: '100%' }}>
          <div style={{ float: 'left' }}>
            <h2 className="cardHeader">
              {this.props.jsonData.name}
            </h2>
          </div>
          {
            (this.props.jsonData.sportName.length === 2) ?
              <div className="sportIcon"><img src={footLogo} /><img src={cricLogo} /></div>
              :
              ((this.props.jsonData.sportName === 'football') ?
                <div className="sportIcon"><img src={footLogo} /></div>
                : <div className="sportIcon"><img src={cricLogo} /></div>)
          }
        </div>
        <div>
          <div className="tourneyName">
            {this.props.jsonData.tournament}
          </div>
          <div className="timeRange">
            {timeBlock}
          </div>
          <br />
          <br />
          <table className="cardTable" width='100%'>
            <tbody>
              <tr>
                <th>PRIZES</th>
                <th>GAMES</th>
                <th>STARTS IN</th>
              </tr>
              <tr>
                <td className="cardPrize">&#x20b9; {this.props.jsonData.prizes}</td>
                <td>{this.props.jsonData.games}</td>
                <td>{timeFromNow}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>);
  }
}

export default GameCard;
