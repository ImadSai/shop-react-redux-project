import './App.css';
import PhoneComponent from './components/PhoneComponent';
import TabletComponent from './components/TabletComponent';
import TvComponent from './components/TvComponent';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="col-md-4"><PhoneComponent /></div>
        <div className="col-md-4"><TabletComponent /></div>
        <div className="col-md-4"><TvComponent /></div>
      </div>
    </Provider>
  );
}

export default App;
