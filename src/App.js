import './App.css';
import PhoneComponent from './components/PhoneComponent';
import TabletComponent from './components/TabletComponent';
import TvComponent from './components/TvComponent';
import { Provider } from 'react-redux';
import store from './redux/store';
import CommentsComponent from './components/CommentsComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="container">

        {/* Products */}
        <div className="row justify-content-md-center">
          <div className="col-md-4 d-flex justify-content-center"><PhoneComponent /></div>
          <div className="col-md-4 d-flex justify-content-center"><TabletComponent /></div>
          <div className="col-md-4 d-flex justify-content-center"><TvComponent /></div>
        </div>

        {/* Comments */}
        <div className="row">
          <CommentsComponent />
        </div>
      </div>
    </Provider>
  );
}

export default App;
