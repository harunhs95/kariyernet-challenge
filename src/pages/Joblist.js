import React, { Component } from 'react';
import { Grid, TextField, MenuItem, Button } from '@material-ui/core';
import { JsonData, Cities } from '../commons/statics';
import ListItem from '../components/ListItem';

class Joblist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'İstanbul',
      firstSearchArray: JsonData[0].result.items.filter(item => item.cityName === 'İstanbul'),
      searchKey: '',
      finalResult: [],
    };
  }

  onChangeSelect = (value) => {
    this.setState({
      selectValue: value,
    })
    const result = JsonData[0].result.items.filter(item => item.cityName === value);
    this.setState({
      firstSearchArray: result,
    });
  }

  onSearch = () => {
    let filteredData = this.state.firstSearchArray.filter(item => {
      return item.positionName.includes(this.state.searchKey)
      ? item.positionName.includes(this.state.searchKey)
      : item.companyName.includes(this.state.searchKey);
    });
    this.setState({
      finalResult: filteredData,
    })
  }

  render() {

    return (
      <Grid container direction="column"  alignContent="center" style={{ minHeight: '100vh' }}>
        <Grid container item xs={12}>
          <div className="header-container">
            <div className="header-wrapper">
              <TextField
                variant="outlined"
                value={this.state.selectValue}
                select
                onChange={(e) => this.onChangeSelect(e.target.value)}
                style={{ color: 'white', width: '150px' }}
              >
                {Cities.map(r => (
                  <MenuItem value={r.name}>{r.name}</MenuItem>
                ))}
              </TextField>
              <TextField
                variant="outlined"
                placeholder="Pozisyon, Firma Adı"
                style={{ color: 'white', width: '250px' }}
                onChange={(e) => this.setState({ searchKey: e.target.value })}
              />
              <Button
                onClick={this.onSearch}
                variant="outlined"
              >
                Arama Yap
              </Button>
            </div>
          </div>
        </Grid>
        <Grid container justify="center" item xs={12}>
          <div className="joblist-item-container">
            {this.state.finalResult.length !== 0 && this.state.finalResult.map(r => (
              <ListItem item={r} />
            ))}
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default Joblist;