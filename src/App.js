import React, { Component } from 'react';
import './App.css';
import Tiles from './components/Tiles';




// Defines initial state
const initialState = {
  homePage: true, disabled: true, level: 1, life: 3, tileArea: 9, whitePos: [], playerWhite: [], playerX: [], freeze: false
}

// created the apps main class
class App extends Component {

  constructor(props) {
    super(props)
    this.state = initialState
    this.genTiles = this.genTiles.bind(this)
    this.showTiles = this.showTiles.bind(this)
    this.flipIt = this.flipIt.bind(this)
    this.genRan = this.genRan.bind(this)
    this.cardType = this.cardType.bind(this)
    this.cardType2 = this.cardType2.bind(this)
  }

  // generates a set of random numbers to position the flashing tiles
  genRan(max, size) {

    var positions = []

    for (let i = 0; i < size; i++) {
      var n = Math.floor(Math.random() * (max))
      var check = positions.includes(n)

      if (check === false) {
        positions.push(n)
      }
      else {
        while (check === true) {
          n = Math.floor(Math.random() * (max))
          check = positions.includes(n)
          if (check === false) {
            positions.push(n)
          }
        }
      }
    }
    return positions
  }

  // Generates the tiles for when the game is displaying the flashing cards
  cardType() {
    var tileArea = this.state.tileArea
    var white = this.state.whitePos
    var cardArr = []

    for (let i = 0; i < tileArea; i++) {
      if (white.includes(i)) cardArr.push('White')
      else cardArr.push('Blue')
    }
    return cardArr
  }

  // Generates the tiles for when the game is waiting for player to flip tiles
  cardType2() {
    var tileArea = this.state.tileArea
    var playerWhite = this.state.playerWhite
    var playerX = this.state.playerX
    var cardArr = []

    for (let i = 0; i < tileArea; i++) {
      if (playerWhite.includes(i)) cardArr.push('White')
      else if (playerX.includes(i)) cardArr.push('X')
      else cardArr.push('Blue')
    }
    return cardArr
  }

  // Starts the game
  showTiles() {
    const whites = this.genRan(9, 3)
    this.setState({ whitePos: whites, homePage: false })
    setTimeout(() => this.setState({ disabled: false }), 2000)
  }


  // Manages the response to tile flipping based on states
  flipIt(e) {
    var playerWhite = this.state.playerWhite
    var playerX = this.state.playerX
    var whitePos = this.state.whitePos
    var id = parseInt(e.currentTarget.id)
    var life = this.state.life
    var level = this.state.level
    //e.target.disabled = true


    if (whitePos.includes(id)) {

      if (playerWhite.length + 1 === whitePos.length) {

        this.setState({ playerWhite: [...playerWhite, id], freeze: true })

        setTimeout(() => {
          this.setState({ disabled: true, level: this.state.level + 1, tileArea: (level === 1) ? 9 : ((level < 5) ? 16 : 25), whitePos: [], playerWhite: [], playerX: [], freeze: false });

          setTimeout(() => {
            this.setState({ whitePos: (level === 1) ? this.genRan(9, 4) : ((level < 5) ? this.genRan(16, level + 3) : this.genRan(25, level + 3)) });

            setTimeout(() => {
              this.setState({ disabled: false })
            }, 2000)
          }, 2000)
        }, 1000)
      }
      else this.setState({ playerWhite: [...playerWhite, id] })
    }
    else {

      if (playerX.length + 1 === 3 && life > 1) {
        this.setState({ playerX: [...playerX, id], freeze: true })

        setTimeout(() => {
          this.setState({ disabled: true, life: life - 1, whitePos: [], playerWhite: [], playerX: [], freeze: false });

          setTimeout(() => {
            this.setState({ whitePos: (level < 3) ? this.genRan(9, level + 2) : ((level < 6) ? this.genRan(16, level + 2) : this.genRan(25, level + 2)) });

            setTimeout(() => {
              this.setState({ disabled: false })
            }, 2000)
          }, 2000)
        }, 1000);



      }
      else if (playerX.length + 1 === 3 && life === 1) {
        this.setState({ playerX: [...playerX, id], freeze: true })
        alert("Game over! \nStart Over!")
        this.setState(initialState)
      }
      else {
        this.setState({ playerX: [...playerX, id] })
      }

    }
  }

  // Manages the general state of the tiles
  genTiles() {

    var level = this.state.level
    var disabled = this.state.disabled
    var freeze = this.state.freeze

    if (level < 3) {
      if (disabled)
        return (
          <Tiles size={3} cardArr={this.cardType()} disabled={true} />
        )
      else
        return (
          <Tiles size={3} cardArr={this.cardType2()} disabled={false} handleClick={this.flipIt} freeze={freeze} />
        )
    }
    else if (level < 6) {
      if (disabled)
        return (
          <Tiles size={4} cardArr={this.cardType()} disabled={true} />
        )
      else
        return (
          <Tiles size={4} cardArr={this.cardType2()} disabled={false} handleClick={this.flipIt} freeze={freeze} />
        )
    }
    else if (level < 10) {
      if (disabled)
        return (
          <Tiles size={5} cardArr={this.cardType()} disabled={true} />
        )
      else
        return (
          <Tiles size={5} cardArr={this.cardType2()} disabled={false} handleClick={this.flipIt} freeze={freeze} />
        )
    }
    else
      return (
          <div className='row justify-content-center'>
            <div className='card'>
              <div className='card-header bg-success font-weight-bold'>
              YOU WON!!!!
              </div>
              <button href='#' onClick={() => this.setState(initialState)} className='btn btn-info'>Play Again</button>
              </div>
          </div>
      )
  }


  render() {
    return (

      <div className="container">
        {(this.state.homePage) ?
          (<div className='row justify-content-center'>
            <div className='col-12 col-sm-6'>
              <div className='card'>
                <div className='card-body'>
                  <h4 className='card-title'>Visual Memory Game</h4>
                  <div className='card-text'>
                    <h5>About the Game:</h5>
                    <p>Every level a number of tiles will flash. Memorize them & pick them once the tiles are reset.</p>
                    <p>If you miss 3 tiles on a level, you lose one life.</p>
                    <p>You have 3 lives total.</p>
                    <p>Your goal is to complete level 9.</p>
                    <p>GOOD LUCK!!</p>
                    <button onClick={() => this.showTiles()} className='btn btn-info'>START</button>
                  </div>
                </div>
              </div>
            </div>
          </div>) :
          (
            <>
              <div className='row justify-content-center'>
                <h3 className='col-12 col-sm-6 text-center font-weight-bold text-dark'>
                  VISUAL MEMORY GAME
              </h3>
              </div>
              <div className='row justify-content-center'>
                <h4 className='col-6 col-sm-3 text-right font-weight-bold text-danger'>Level: {this.state.level}</h4>
                <h4 className='col-6 col-sm-3 text-left font-weight-bold text-danger'>Life: {this.state.life}</h4>
              </div>
              <div className='row justify-content-center'>
                <div className='col-12 col-sm-6'>
                  {this.genTiles()}
                </div>
              </div>
            </>
          )
        }

      </div>
    );
  }

}

export default App;
