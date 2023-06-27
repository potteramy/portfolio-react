import React from 'react'
import Card from 'react-bootstrap/Card';
import FreshCatch from "../minnesota-fresh-catch.png"
import LiveEvent from "../live-events-search.png"
import SocialGarden from "../social-garden.png"
import EmployeeTracker from "../employee-tracker.png"
import SocialNetworkAPI from "../social-networ-api.png"
import WeatherAPI from "../weather-api.png"

export default function Portfolio() {
  return (
    <div className="App-body">
    <div className="App-portfolio">
      <h1>Portfolio</h1>
      <div className= "Portfolio-container">
        <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={SocialGarden} />
      <Card.Body>
        <Card.Title>Social Garden</Card.Title>
        <Card.Text>
          Group Project: Social media for gardeners.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://social-garden.herokuapp.com/">Live Site</Card.Link>
        <Card.Link href="https://github.com/buster35/social-garden">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={FreshCatch} />
      <Card.Body>
        <Card.Title>Minnesota Fresh Catch</Card.Title>
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
      <Card.Img variant="top" src={EmployeeTracker}/>
      <Card.Body>
        <Card.Title>Employee Tracker</Card.Title>
        <Card.Text>
          A command line application using MySQL2, Node.js, console.table, and Inquirer
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/potteramy/employee-tracker">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={SocialNetworkAPI} />
      <Card.Body>
        <Card.Title>Social Network API</Card.Title>
        <Card.Text>
          A social network API using NodeJS, ExpressJS, and MongoDB.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://github.com/potteramy/social-network-api">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="Portfolio-card">
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={WeatherAPI} />
      <Card.Body>
        <Card.Title>Weather Dashboard</Card.Title>
        <Card.Text>
          Weather application using OpenWeather API
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="https://potteramy.github.io/weather-api/">Live Site</Card.Link>
        <Card.Link href="https://github.com/potteramy/weather-api">Github Repo</Card.Link>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
    </div>


  )
}
