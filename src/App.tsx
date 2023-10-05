import './App.css';
import { SurfaceDemo } from './components/SurfaceDemo';
import './themes/themes.scss';
import cx from 'classnames';

function App() {
  return (
    <div className="app">
      <Demo theme='theme-sun' />
      <Demo theme='theme-sun-dark' />
      <Demo theme='theme-love' />
      <Demo theme='theme-love-dark' />
    </div>
  );
}

function Demo(props: { theme: string }) {
  return <div className={cx('theme-demo', props.theme) }>
    <SurfaceDemo color='paper' />
    <SurfaceDemo color='contrast' />
  </div>
}

export default App;
