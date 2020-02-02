import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Grid, Button } from '@material-ui/core';
import { selectListItem } from '../store/selectors';

class JoblistDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onClickBack = () => {
    window.location.href = '#/joblist';
  }

  render() {
    return (
      <Grid container direction="column" alignContent="center" style={{ minHeight: '100vh' }}>
        <Grid container item xs={12}>
          <div className="list-detail-wrapper">
            <div>
              <img style={{ width: '100px', marginRight: '15px' }} src={this.props.listItem.imageUrl} />
            </div>
            <div style={{ width: '30%' }}>
              <p className="list-detail-text"><strong>Firma: </strong>{this.props.listItem.companyName}</p>
              <p className="list-detail-text"><strong>Pozisyon: </strong>{this.props.listItem.positionName}</p>
              <p className="list-detail-text"><strong>İlan Süresi: </strong>{this.props.listItem.durationDayText}</p>
            </div>
            <div style={{ width: '30%' }}>
              <p className="list-detail-text"><strong>Uzaklık: </strong>{this.props.listItem.distance}</p>
              <p className="list-detail-text"><strong>Lokayson: </strong>{this.props.listItem.cityName}</p>
              <p className="list-detail-text"><strong>İlçe: </strong>{this.props.listItem.townName}</p>
            </div>
            <div style={{ width: '30%' }}>
              <Button onClick={this.onClickBack} variant="outlined">Geri Dön</Button>
            </div>
          </div>
        </Grid>
        <Grid container justify="center" item xs={12}>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  listItem: selectListItem()
});


export default connect(mapStateToProps)(JoblistDetail);
