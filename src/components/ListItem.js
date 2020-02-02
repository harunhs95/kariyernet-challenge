import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setListItem } from '../store/actions';
import { Button } from '@material-ui/core';

class ListItem extends Component {

  handleClick = (item) => {
    window.location.href= '#/jobdetail/' + item.jobId;
    this.props.setListItem(item);
  }

  render() {
    return(
      <div className="list-item-container">
        <div className="list-item-wrapper"> 
          <div style={{ width: '40%' }}>
            <p><strong>Firma: </strong>{this.props.item.companyName}</p>
            <p><strong>Pozisyon: </strong>{this.props.item.positionName}</p>
          </div>
          <div style={{ width: '40%' }}>
            <p><strong>Lokayson: </strong>{this.props.item.cityName}</p>
          </div>
          <div className="button-wrapper">
            <Button variant="outlined" onClick={() => this.handleClick(this.props.item)}>Detay</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  (
    bindActionCreators({
      setListItem
    }, dispatch)
  )
);


export default connect('',mapDispatchToProps)(ListItem);