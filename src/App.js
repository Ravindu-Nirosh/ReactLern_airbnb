import Header from './components/Header'
import './style.css'
import HeroSection from './components/Hero'
import Card from './components/Card'
// import Testing from './components/testing'
// import './testing.css'
import Data from './components/Card_data.js'

function App(){

    let card_data=Data.map(card =>{
        return <Card
            key={card.id}
            item={card}
        />
    })
    
    return(
    <div className="container--main">

        <Header/>
        <HeroSection/>
        <div className='card-containr'>
        {card_data}
        </div>
        <h6 className='jdjdjddj'>jzjaja</h6>
    </div>
       
    )
}

export default App