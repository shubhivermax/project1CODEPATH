import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
import './components/styles.css';
import jazzImage from './assets/jazz.jpg'
import hiphopImage from './assets/hiphop.jpg'
import balletImage from './assets/ballet.jpeg'
import bollywoodImage from './assets/bollywood.jpeg'
import folkImage from './assets/folk.jpeg'
import commercialImage from './assets/commercial.jpeg'
import fusionImage from './assets/fusion.jpeg'
import kpopImage from './assets/kpop.jpeg'
import modernImage from './assets/modern.jpeg'
import tapImage from './assets/tap.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1 className="head">July Dance Workshops</h1>
      <h1 className="headd">Browse different classes</h1>
      <div className="cards">
        <Card name="Jazz" location="Studio A" time="2 PM" image={jazzImage} />
        <Card name="Hip-hop" location="Studio B" time="3 PM" image={hiphopImage} />
        <Card name="Ballet" location="Studio C" time="4 PM" image={balletImage} />
        <Card name="Folk" location="Patio" time="3 PM" image={folkImage} />
        <Card name="Bollywood" location="Studio D" time="2 PM" image={bollywoodImage} />
        <Card name="Fusion" location="Studio D" time="2 PM" image={fusionImage} />
        <Card name="Tap" location="Studio D" time="2 PM" image={tapImage} />
        <Card name="Modern" location="Studio D" time="2 PM" image={modernImage} />
        <Card name="K-pop" location="Studio D" time="2 PM" image={kpopImage} />
        <Card name="Commercial" location="Studio D" time="2 PM" image={commercialImage} />
      </div>
    </div>
  );
}

export default App
