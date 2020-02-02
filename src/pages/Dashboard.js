import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core'; 

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goListPage = () => {
    window.location.href = '#/joblist'
  }

  render() {

    return (
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid container item xs={12}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <h3>Kariyer Net Challenge</h3>
            <Button variant="outlined" onClick={this.goListPage}>Listeye Gitmek İçin Tıklayınız</Button>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default Dashboard;