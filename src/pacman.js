
/*
The application is a simulation of Pacman moving on in a grid, of dimensions 5 units x 5 units.
The origin (0,0) can be considered the SOUTH WEST most corner.
*/

const PACMAN_COMMAND_INSTRUCTION = 'Please enter the first command with format: PLACE X,Y,F ( ex: PLACE 1,2,EAST )\n   X and Y value: 0 to 4\n   F value: NORTH or SOUTH or EAST or WEST\nSubsequent command: MOVE or LEFT or RIGHT\nLast/Final command: REPORT\nHappy playing!'
const MAX_DIMENSION_ORIGIN = 4
const MIN_DIMENSION_ORIGIN = 0

class Pacman {
  constructor () {
    this.isPlaceSet = null
    this.positionX = null
    this.positionY = null
    this.facingDirection = null
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']
  }

  isPlaceValid (positionX, positionY, facingDirection) {
    return positionX >= MIN_DIMENSION_ORIGIN && positionX < MAX_DIMENSION_ORIGIN &&
      positionY >= MIN_DIMENSION_ORIGIN && positionY < MAX_DIMENSION_ORIGIN && facingDirection &&
      this.directions.includes(facingDirection.toUpperCase())
  }

  placeLocation (positionX, positionY, facingDirection) {
    this.isPlaceSet = true
    if (this.isPlaceValid(positionX, positionY, facingDirection)) {
      this.positionX = positionX
      this.positionY = positionY
      this.facingDirection = facingDirection.toUpperCase()
    }
  }

  isPlaceInitiated () {
    return this.positionX !== null && this.positionY !== null && this.facingDirection !== null
  }

  reportFinalLocation () {
    if (this.isPlaceInitiated()) {
      return `${this.positionX},${this.positionY},${this.facingDirection}`
    }

    if (!this.isPlaceSet) {
      return PACMAN_COMMAND_INSTRUCTION
    }
    return 'Moving off the grid is not allowed!'
  }

  moveAround () {
    let hasPlace
    if (this.isPlaceInitiated()) {
      hasPlace = (this.facingDirection === 'NORTH' && this.positionY < MAX_DIMENSION_ORIGIN)
        ? this.positionY++
        : (this.facingDirection === 'EAST' && this.positionX < MAX_DIMENSION_ORIGIN)
            ? this.positionX++
            : (this.facingDirection === 'SOUTH' && this.positionY > MIN_DIMENSION_ORIGIN)
                ? this.positionY = this.positionY - 1
                : (this.facingDirection === 'WEST' && this.positionX > MIN_DIMENSION_ORIGIN)
                    ? this.positionX = this.positionX - 1
                    : null
    }
    return hasPlace
  }

  moveLeft () {
    if (this.isPlaceInitiated()) {
      if (this.facingDirection === this.directions.slice(0).shift()) {
        this.facingDirection = this.directions.slice(0).pop()
      } else {
        this.facingDirection = this.directions[this.directions.indexOf(this.facingDirection) - 1]
      }
    }
  }

  moveRight () {
    if (this.isPlaceInitiated()) {
      if (this.facingDirection === this.directions.slice(0).pop()) {
        this.facingDirection = this.directions.slice(0).shift()
      } else {
        this.facingDirection = this.directions[this.directions.indexOf(this.facingDirection) + 1]
      }
    }
  }
}

module.exports = {
  Pacman,
  PACMAN_COMMAND_INSTRUCTION
}
