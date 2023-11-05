import './App.css'
import ChartBar from './components/ChartBar/ChartBar';
import ChartLine from './components/ChartLine/ChartLine';
import NavBar from './components/NavBar/NavBar';
import PhoneChart from './components/PhoneChart/PhoneChart';
import PriceOptions from './components/PriceOptions/PriceOptions';


function App() {

    return (
        <>
            <NavBar></NavBar>
            <PriceOptions></PriceOptions>
            <ChartLine></ChartLine>
            <ChartBar></ChartBar>
            <PhoneChart></PhoneChart>
        </>
    )
}

export default App;