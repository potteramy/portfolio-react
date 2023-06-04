import React from 'react'
import Card from 'react-bootstrap/Card';
import FreshCatch from "../minnesota-fresh-catch.png"
import LiveEvent from "../live-events-search.png"

export default function Portfolio() {
  return (
    <div className="App-body">
    <div className="App-portfolio">
      <h1>Portfolio</h1>
      <div className= "Portfolio-container">
        <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/300/300" />
      <Card.Body>
        <Card.Title>Group Project 3 </Card.Title>
        <Card.Text>
          Group Project 3
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Live Site</Card.Link>
        <Card.Link href="#">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={FreshCatch} />
      <Card.Body>
        <Card.Title>Minnesota Fesh Catch</Card.Title>
        <Card.Text>
          Group Project: App for logging fish caught in Minneapolis using MySQL2 and Handlebars.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://minnesota-fresh-catch.herokuapp.com/#">Live Site</Card.Link>
        <Card.Link href="https://github.com/potteramy/minnesota-fresh-catch-app">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={LiveEvent} />
      <Card.Body>
        <Card.Title>Live Events Search </Card.Title>
        <Card.Text>
          Group Project: Front end event search app using ticketmaster API 
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Live Site</Card.Link>
        <Card.Link href="https://github.com/JacobDNelsonStone/live-music-search-ticketmaster-api">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/300/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Live Site</Card.Link>
        <Card.Link href="#">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/300/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Live Site</Card.Link>
        <Card.Link href="#">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://placekitten.com/300/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Live Site</Card.Link>
        <Card.Link href="#">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </div>


  )
}
