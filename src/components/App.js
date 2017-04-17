import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {
  
  }
  componentWillUnmount() {
    // clean timers and listeners
  }
  fetchContest = (contestId) => {
    pushState(
      { currenContestId: contestId },
      `/contest/${contestId}`
    );
    // lookup the state
    // this.state.contest[contestId]
    this.setState({
      pageHeader: this.state.contests[contestId].contestName
      currentContestId: contestId
    })
  };
  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    return <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests} />
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
      </div>
    );
  };
};

export default App;
