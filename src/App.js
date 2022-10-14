import './App.css';
import ChoiceData from './components/ControlData/ChoiceData';
import Commitment from './components/ControlData/Commitment';
import ControlData from './components/ControlData/ControlData';

function App() {
  return (
    <div>
      <ControlData></ControlData>
      <Commitment></Commitment>
      <ChoiceData></ChoiceData>
    </div>
  );
}

export default App;
