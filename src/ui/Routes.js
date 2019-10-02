import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom'

export class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
} 