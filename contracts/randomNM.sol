pragma solidity  ^0.4.26;
//import "https://github.com/provable-things/ethereum-api/blob/master/oraclizeAPI_0.4.25.sol";
import "./oraclizeApi.sol";
contract numberRandom is usingOraclize{
	bytes32 public randomN;
	uint id;
	
	event GetRN(bytes32 queryId);
	constructor() payable public{
		oraclize_setProof(proofType_Ledger);
	}

	function __callback(bytes32 queryId, string result,bytes proof) public{
		require (msg.sender==oraclize_cbAddress());
		if(oraclize_randomDS_proofVerify__returnCode(queryId,result,proof)==0){
        	//uint maxRange=38;
        	randomN=keccak256(abi.encodePacked(result,id));
        }else{
            
        }	
	}

    function getRN(uint idd) public {
        uint numberOB=7;
        uint delay=0;
        id=idd;
        uint callbackGas=200000;
        bytes32 queryId=oraclize_newRandomDSQuery(delay,numberOB,callbackGas);
        emit GetRN(queryId);
    }
}
