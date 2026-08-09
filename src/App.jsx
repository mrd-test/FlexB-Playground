import './App.css';

import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='app'>
      <MainContent />
      <Sidebar />
    </div>
  );
};

export default App;
