import './App.css';
import Error404 from './pages/Error404';
import Counter from './hooks/Counter';

function App() {
  return (
    <div className='container'>
      <Counter />
      <Error404 />
    </div>
  );
}

export default App;
