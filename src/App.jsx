import './App.css'
import ChartBar from './components/ChartBar/ChartBar';
import ChartLine from './components/ChartLine/ChartLine';
import NavBar from './components/NavBar/NavBar';
import PriceOptions from './components/PriceOptions/PriceOptions';


function App() {

    return (
        <>
            <NavBar></NavBar>
            <PriceOptions></PriceOptions>
            <ChartLine></ChartLine>
            <ChartBar></ChartBar>
        </>
    )
}

export default App;