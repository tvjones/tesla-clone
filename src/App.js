import './App.css';
import Section from './Components/Section';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <div className='fixed pt-[5vh]'><Header /></div>
      <Section prodName = 'Model 3' bgImg = 'tesla-model-3' />
      <Section prodName = 'Model Y' bgImg = 'tesla-model-y' />
      <Section prodName = 'Model S' bgImg = 'tesla-model-s' />
      <Section prodName = 'Model X' bgImg = 'tesla-model-x' />
      <Section prodName = 'Solar Panels' bgImg = 'tesla-solar-panel' />
      <Section prodName = 'Solar Roof' bgImg = 'tesla-solar-roof' />
      <Section prodName = 'Accessories' bgImg = 'tesla-accessories' />
    </div>
  );
}

export default App;
