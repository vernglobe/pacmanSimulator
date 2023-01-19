
const readline = require('readline')
const { Pacman, PACMAN_COMMAND_INSTRUCTION } = require('./pacman')

const readCli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function main () {
  const pacman = new Pacman()

  readCli.setPrompt('Please enter the commands:')
  readCli.prompt()

  readCli.on('line', (line) => {
    const [command, coordinates] = line.trim().split(' ')

    switch (command.toLocaleUpperCase()) {
      case 'PLACE':
        if (coordinates) {
          const [x, y, f] = coordinates.split(',')
          pacman.placeLocation(x, y, f)
        }
        break
      case 'REPORT':
        // eslint-disable-next-line no-case-declarations
        const result = pacman.reportFinalLocation()
        if (result) {
          console.log(result)
        }
        break
      case 'MOVE':
        pacman.moveAround()
        break
      case 'RIGHT':
        pacman.moveRight()
        break
      case 'LEFT':
        pacman.moveLeft()
        break
      default:
        console.log(PACMAN_COMMAND_INSTRUCTION)
    }
    readCli.prompt()
  }).on('close', () => {
    console.log('Hope you have a fun!')
    process.exit(0)
  })
}

main()
