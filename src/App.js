import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import User from './components/User';
import WithUserLoading from './components/WithUserLoading';

function App() {
  const UserLoading = WithUserLoading(User);
  const [appState, setAppState] = useState({
    loading: false,
    users: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://randomuser.me/api/`;
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data.results;
      setAppState({ loading: false, users: allRepos });
    });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>User Info</h1>
      </div>
      <div className='repo-container'>
        <UserLoading isLoading={appState.loading} users={appState.users} />
      </div>
      <footer>
        <div className='footer'>
          Built with{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          by Víctor Piella
        </div>
      </footer>
    </div>
  );
}

export default App;
