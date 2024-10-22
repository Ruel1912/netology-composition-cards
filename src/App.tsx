import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <Card
        title="Card title"
        image={{
          src: 'https://www.aluminati.net/wp-content/uploads/2016/03/img-placeholder.png',
          alt: 'Card Photo',
        }}
      >
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Go Somewhere</button>
        </div>
      </Card>
      <Card title="Special title treatment">
        <h2>
          With supporting text below as a natural lead-in to additional content.
        </h2>
        <div className="card-actions">
          <button className="btn btn-accent">Go Somewhere Second</button>
          <button className="btn btn-error">Cancel</button>
        </div>
      </Card>
    </>
  )
}

export default App
