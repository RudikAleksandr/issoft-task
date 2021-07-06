import ReactDOM from 'react-dom';
import App from './components/App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.scss';

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root'),
);
