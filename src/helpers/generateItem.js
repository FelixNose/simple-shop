export default function () {
  const itemType = Math.ceil(Math.random() * 6)
  let name = ''
  let priceMultiplicator = 10000
  let minPrice = 1000
  switch (itemType) {
    case 1:
      name = 'GPU GX'
      minPrice = 10000
      priceMultiplicator *= 5
      break
    case 2:
      name = 'CPU C-'
      minPrice = 10000
      priceMultiplicator *= 3
      break
    case 3:
      name = 'Mainboard M'
      minPrice = 10000
      break
    case 4:
      name = 'Power Supply P-'
      minPrice = 5000
      break
    case 5:
      name = 'SSD S'
      minPrice *= 1.3
      break
    case 6:
      priceMultiplicator = 1000
      name = 'Floppy Drive F'
      break
    default:
      name = 'Component '
      break
  }
  const id = Math.ceil(Math.random() * 1000)
  name += id

  return {
    id,
    name,
    price: Math.ceil(minPrice + Math.random() * priceMultiplicator),
    amountAvailable: Math.ceil(Math.random() * 10),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
}
