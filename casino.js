var web3;
if (typeof(web3 !== 'undefined')){
    web3 = new web3(web3.currentProvider);
}
else{
    web3 = new web3(new web3.providers.HttpProvider("http://localhost:7545"));
}

var EthereumSession = web3.eth.contract([
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "cantidadCasillas",
				"type": "uint8"
			},
			{
				"internalType": "uint8[]",
				"name": "valorCasillas",
				"type": "uint8[]"
			},
			{
				"internalType": "uint256",
				"name": "apuesta",
				"type": "uint256"
			}
		],
		"name": "jugarKeno",
		"outputs": [
			{
				"internalType": "uint8[20]",
				"name": "_numerosGanadores",
				"type": "uint8[20]"
			},
			{
				"internalType": "uint8[]",
				"name": "_numerosApostados",
				"type": "uint8[]"
			},
			{
				"internalType": "uint8",
				"name": "_cantidadAtinados",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_dineroGanado",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "verResultado",
		"outputs": [
			{
				"internalType": "uint8[20]",
				"name": "_numerosGanadores",
				"type": "uint8[20]"
			},
			{
				"internalType": "uint8[]",
				"name": "_numerosApostados",
				"type": "uint8[]"
			},
			{
				"internalType": "uint8",
				"name": "_cantidadAtinados",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_dineroGanado",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]);

// Aquí copiamos la dirección en donde se instancia el contrato
const casinoAdress = "0x2743e392F245EB5D1b6dA8a42E53C9983Db898C3";
var casinoInstance = EthereumSession.at(casinoAdress);

web3.eth.defaulAccount = web3.eth.accounts[0];

