import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card'
import './App.css'

function App() {
  const [billing, setBilling] = useState(true);

  return (
    <>
     <h1 className="header-main">Our Pricing</h1>
     <div className="form-group">
      <span className="selector">Annually</span>
     <form action="#" className="form" onChange={()=> setBilling(!billing)}>
      <input type="checkbox" className="form__input" id="annualToggle" />
      <label htmlFor="annualToggle" className="form__label--toggle"></label>
     </form>
     <span className="selector">Monthly</span>
     </div>
     <section className="pricing-option-cards">
      <Card tier="Basic" price={billing? '199.99' : '19.99'} storageSize="500 GB" users= "2" sendLimit = "3"/>
      <Card tier="Basic" price={billing? '249.99' : '24.99'} storageSize="1 TB" users= "5" sendLimit = "10"/>
      <Card tier="Basic" price={billing? '399.99' : '39.99'} storageSize="2 TB" users= "10" sendLimit = "20"/>


     </section>
    
    </>
  )
}

export default App
