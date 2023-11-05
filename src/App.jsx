import './App.css'
import ChartLine from './components/ChartLine/ChartLine';
import NavBar from './components/NavBar/NavBar';
import PriceOptions from './components/PriceOptions/PriceOptions';


function App() {

    return (
        <>
            <NavBar></NavBar>
            <PriceOptions></PriceOptions>
            <ChartLine></ChartLine>
        </>
    )
}

export default App;