/* eslint-disable no-undef */
const { Pacman, PACMAN_COMMAND_INSTRUCTION } = require('../pacman')

test('Create Pacman object/instance', () => {
  const pacman = new Pacman()
  expect(pacman.positionX).toBe(null)
  expect(pacman.positionY).toBe(null)
  expect(pacman.facingDirection).toBe(null)
})

test('Place Pacman facing North', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'North')
  expect(pacman.positionX).toBe(0)
  expect(pacman.positionY).toBe(0)
  expect(pacman.facingDirection).toBe('NORTH')
})

test('Place Pacman facing South', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'South')
  expect(pacman.positionX).toBe(0)
  expect(pacman.positionY).toBe(0)
  expect(pacman.facingDirection).toBe('SOUTH')
})

test('Place Pacman facing EAST', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'east')
  expect(pacman.positionX).toBe(0)
  expect(pacman.positionY).toBe(0)
  expect(pacman.facingDirection).toBe('EAST')
})

test('Place Pacman facing West', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'WEST')
  expect(pacman.positionX).toBe(0)
  expect(pacman.positionY).toBe(0)
  expect(pacman.facingDirection).toBe('WEST')
})

test('Place Pacman OFF the grid with positionX exceed 5 units - not allowed!', () => {
  const pacman = new Pacman()
  pacman.placeLocation(6, 0, 'NORTh')
  expect(pacman.reportFinalLocation()).toBe('Moving off the grid is not allowed!')
})

test('Place Pacman OFF the grid with positionY exceed 5 units - not allowed!', () => {
  const pacman = new Pacman()
  pacman.placeLocation(1, 7, 'South')
  expect(pacman.reportFinalLocation()).toBe('Moving off the grid is not allowed!')
})

test('Place Pacman OFF the grid with positionY negative - not allowed!', () => {
  const pacman = new Pacman()
  pacman.placeLocation(1, -5, 'WEST')
  expect(pacman.reportFinalLocation()).toBe('Moving off the grid is not allowed!')
})

test('Place Pacman OFF the grid with positionX negative - not allowed!', () => {
  const pacman = new Pacman()
  pacman.placeLocation(-1, 5, 'west')
  expect(pacman.reportFinalLocation()).toBe('Moving off the grid is not allowed!')
})

test('Place Pacman has not been set!', () => {
  const pacman = new Pacman()
  expect(pacman.reportFinalLocation()).toBe(PACMAN_COMMAND_INSTRUCTION)
})

test('Report Pacman location', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'north')
  expect(pacman.reportFinalLocation()).toBe('0,0,NORTH')
})

test('Left movement was ignored if Pacman place not set', () => {
  const pacman = new Pacman()
  pacman.moveLeft()
  expect(pacman.facingDirection).toBe(null)
})

test('Left movement to change direction from north to west', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'north')
  pacman.moveLeft()
  expect(pacman.facingDirection).toBe('WEST')
})

test('Left movement to change direction from west to south', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'west')
  pacman.moveLeft()
  expect(pacman.facingDirection).toBe('SOUTH')
})

test('Left movement to change direction from south to east', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'South')
  pacman.moveLeft()
  expect(pacman.facingDirection).toBe('EAST')
})

test('Left movement to change direction from east to north', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'east')
  pacman.moveLeft()
  expect(pacman.facingDirection).toBe('NORTH')
})

test('Right movement to change direction from north to east', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'north')
  pacman.moveRight()
  expect(pacman.facingDirection).toBe('EAST')
})

test('Right movement to change direction from east to south', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'east')
  pacman.moveRight()
  expect(pacman.facingDirection).toBe('SOUTH')
})

test('Right movement to change direction from south to west', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'south')
  pacman.moveRight()
  expect(pacman.facingDirection).toBe('WEST')
})

test('Right movement to change direction from west to north', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'west')
  pacman.moveRight()
  expect(pacman.facingDirection).toBe('NORTH')
})

test('Move 1 step to north direction.', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'north')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('0,1,NORTH')
})

test('Move 1 step to south direction', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 1, 'south')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('0,0,SOUTH')
})

test('Move 1 step to west direction', () => {
  const pacman = new Pacman()
  pacman.placeLocation(1, 0, 'west')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('0,0,WEST')
})

test('Move 1 step to east direction', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 0, 'east')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('1,0,EAST')
})

test('Move north outside the grids now allowed!', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 5, 'north')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('Moving off the grid is not allowed!')
})

test('Move east outside the grids now allowed!', () => {
  const pacman = new Pacman()
  pacman.placeLocation(5, 2, 'east')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('Moving off the grid is not allowed!')
})

test('Move west outside the grids now allowed!', () => {
  const pacman = new Pacman()
  pacman.placeLocation(5, 2, 'west')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('Moving off the grid is not allowed!')
})

test('Move south outside the grids now allowed!', () => {
  const pacman = new Pacman()
  pacman.placeLocation(5, 2, 'south')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('Moving off the grid is not allowed!')
})

test('Move south within the grids', () => {
  const pacman = new Pacman()
  pacman.placeLocation(3, 0, 'south')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('3,0,SOUTH')
})

test('Move west within the grids', () => {
  const pacman = new Pacman()
  pacman.placeLocation(0, 3, 'west')
  pacman.moveAround()
  expect(pacman.reportFinalLocation()).toBe('0,3,WEST')
})

test('Continue received the command without issue!', () => {
  const pacman = new Pacman()
  pacman.placeLocation(1, 0, 'west')
  pacman.moveAround()
  pacman.moveAround()
  pacman.moveRight()
  expect(pacman.reportFinalLocation()).toBe('0,0,NORTH')
})
