import Search from './components/Search/Search';
import Header from './components/Header/Header';
import {useState} from 'react';
import './App.css';
import SavedTweets from './components/SavedTweets/SavedTweets';
import tweets from './tweets.json';

function App() {
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem('userData')));

  const getStorage = (storage) => {
      setStorage(storage);
  };

  return (
    <div className="wrapper-app">
      <Header title="Search Tweet App"/>
      <Search tweets={tweets} setStorage={getStorage} />
      <SavedTweets storage={storage} setStorage={setStorage}/>
    </div>
  );
}

export default App;
