import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useUrlVideos from './api/UrlVideos/useUrlVideos';
import Loading from './components/Loading/default';
import VideosMasVistos from './pages/VideosMasVistos/default';
import Home from './pages/HomeVideo/Default';

const App = () => {
  const { notice, isLoading, isError } = useUrlVideos();

  if (isLoading) return <Loading />;
  if (isError) return <div>Lo sentimos, no hay información disponible.</div>;
  return (
    <Router>
      {/* <Layout> */}
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <VideosMasVistos info={notice} />
        </Route>
        <Route path="/:id">{/* <PageDetailsNotice info={notice} /> */}</Route>
      </Switch>
      {/* </Layout> */}
    </Router>
  );
};

export default App;
