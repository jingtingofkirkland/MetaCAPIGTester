import Contents from './Contents'
import Independent from './Independent'
import OneTrust from './OneTrust'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import 'antd/dist/antd.min.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/independent">Independent Pixel</Link>
            </li>
            <li>
              <Link to="/onetrust">One Trust</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} >
        <Routes >
          <Route path="/independent" element = {<Independent />} />
          <Route path="/onetrust" element = {<OneTrust/>} />
          <Route path="/" element = {<Contents/>} />

        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
