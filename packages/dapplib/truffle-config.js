require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot alcohol remember noise concert hundred light army genuine'; 
let testAccounts = [
"0xc1a04020d11e1ea17f255fbbdfdd8b65ddd0c026904a652f6a5a6d1deaa1aeeb",
"0xda2a18e4db6f7352f0589c6871deae2295ac98e515727478b627a265c5bda24f",
"0x0df4a3618f167ef26f1fa1c645b989ba3a1681831f931f40d3d37e18a456cb52",
"0x694fc396b7f514d74b6d73070f192264b6f4499e324f44c66e5c72dc7a9047f3",
"0x952cd69741deaa52d80cd76aff01d708eba1b51942269de0c08559f2384e923c",
"0x4805cf02ef6a05dcd1ea7fbb594734a92de09aa2d44dbeb0c0fbf276eda868f1",
"0x72cc980076e91bd7148929b4497b8e4d121d9168e724f1b7fe741912b435019d",
"0xf93bb3e25b8802dfdf5077fcdbc838446156326ed25118f1f6209b832f810175",
"0x483d371042ad21b93742cff41d129f9324808b183eb610a7c3726f88b4916398",
"0xf0baa2327c73203d1f8fc73d6292a3546eb72576b9f1a5bff57e96016c08d59b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


