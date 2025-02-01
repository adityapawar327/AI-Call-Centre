import { useState } from "react"
import "./App.css"
import LiveKitModal from "./components/LiveKitModal"

function App() {
  const [showSupport, setShowSupport] = useState(false)

  const handleSupportClick = () => {
    setShowSupport(true)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">CarCare Support</div>
      </header>

      <main>
        <section className="hero">
          <h1>Expert Car Support When You Need It</h1>
          <p>Get instant help from certified automotive technicians 24/7</p>
          <button className="hero-button" onClick={handleSupportClick}>
            Talk to an Agent!
          </button>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>24/7 Expert Support</h3>
            <p>Connect with certified automotive technicians anytime, anywhere</p>
          </div>
          <div className="feature-card">
            <h3>Diagnostic Help</h3>
            <p>Get accurate problem identification and repair recommendations</p>
          </div>
          <div className="feature-card">
            <h3>Parts Guidance</h3>
            <p>Find the right parts for your specific vehicle make and model</p>
          </div>
        </section>
      </main>

      {showSupport && <LiveKitModal setShowSupport={setShowSupport} />}
    </div>
  )
}

export default App

