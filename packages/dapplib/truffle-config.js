require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hunt basket flip spot finger deliver remember coin gesture neck flat gasp'; 
let testAccounts = [
"0x739ed97713733474b41e0bc3db62482bc88ef332c9e7920bc9f8de5d9cd4c0e2",
"0x034476fef672beaa49c0e62279fb09083fa66d9de74e6f85f0fef770e6e9c7b1",
"0x6c96a8cf35e7af2560065fb5430ce077c112012a3b458fbf87ecc20befbcd73e",
"0x8eead2e07fff62f68c8354e6cb8051086ef8eca248705d0ad0cca250416ad938",
"0x5f99fdf1b9a790ca38720c22f70a58a2dba44c039de9b741d74b19d39e8d7d7d",
"0xd9da36b3387f2d4ece5301d3dba343ffa9dac6db9a3c46fdfdc7d1356ea3b2af",
"0x062cb9c40e12b8b2f3b93dcee6abe2a2b3421b722cd596e5ebcd1c8a5cb41dd7",
"0x993f12d971011a4ac9819dd0da16ca49a7d52e716c17c2e0a1ddddc22801e397",
"0xcb5eecd1f254e5824ee02f38bf7f93fe668faa789e318a0232e99c8fccb13c95",
"0xe3ae23e2a572196745cb62c58ec811690f5a94b80411fd3b5b9054d338016d87"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


