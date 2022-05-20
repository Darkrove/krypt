// https://eth-ropsten.alchemyapi.io/v2/w6dqolGXjr-PkvzkqiSOE6uqPtrgIR_Z

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/w6dqolGXjr-PkvzkqiSOE6uqPtrgIR_Z',
      accounts: ['a4bfda257a1f2f97d3d9f2968eff4610051de41abb9c44d188696537edf68ffc']
    }
  }
}