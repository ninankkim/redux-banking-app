import './App.css';
import {  Grid, Header, Segment } from 'semantic-ui-react'
import Account from './components/Account';

function App() {
  return (
    <Segment vertical>
      <Header as="h1" textAlign="center">Broker Than Broke</Header>
    <Grid columns="2">
      <Grid.Row>
        <Grid.Column>

        <Account title="Checking" id="checking"/>
        </Grid.Column>
        <Grid.Column>
          <Account title="Savings" id="savings"/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Segment>
  );
}

export default App;
