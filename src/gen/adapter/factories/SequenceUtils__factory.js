"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SequenceUtils__factory = void 0;
var ethers_1 = require("ethers");
var SequenceUtils__factory = /** @class */ (function (_super) {
    __extends(SequenceUtils__factory, _super);
    function SequenceUtils__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    SequenceUtils__factory.prototype.deploy = function (_factory, _mainModule, overrides) {
        return _super.prototype.deploy.call(this, _factory, _mainModule, overrides || {});
    };
    SequenceUtils__factory.prototype.getDeployTransaction = function (_factory, _mainModule, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _factory, _mainModule, overrides || {});
    };
    SequenceUtils__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    SequenceUtils__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    SequenceUtils__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return SequenceUtils__factory;
}(ethers_1.ContractFactory));
exports.SequenceUtils__factory = SequenceUtils__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_factory",
                type: "address"
            },
            {
                internalType: "address",
                name: "_mainModule",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_wallet",
                type: "address"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "_imageHash",
                type: "bytes32"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_threshold",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "_signers",
                type: "bytes"
            },
        ],
        name: "RequiredConfig",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_wallet",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_signer",
                type: "address"
            },
        ],
        name: "RequiredSigner",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "callBalanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "callBlockNumber",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_i",
                type: "uint256"
            },
        ],
        name: "callBlockhash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "callChainId",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "callCode",
        outputs: [
            {
                internalType: "bytes",
                name: "code",
                type: "bytes"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "callCodeHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "codeHash",
                type: "bytes32"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_addr",
                type: "address"
            },
        ],
        name: "callCodeSize",
        outputs: [
            {
                internalType: "uint256",
                name: "size",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "callCoinbase",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "callDifficulty",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "callGasLeft",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "callGasLimit",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "callGasPrice",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "callOrigin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "callTimestamp",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
        ],
        name: "lastImageHashUpdate",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "lastSignerUpdate",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "lastWalletUpdate",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "delegateCall",
                        type: "bool"
                    },
                    {
                        internalType: "bool",
                        name: "revertOnError",
                        type: "bool"
                    },
                    {
                        internalType: "uint256",
                        name: "gasLimit",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "target",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "value",
                        type: "uint256"
                    },
                    {
                        internalType: "bytes",
                        name: "data",
                        type: "bytes"
                    },
                ],
                internalType: "struct IModuleCalls.Transaction[]",
                name: "_txs",
                type: "tuple[]"
            },
        ],
        name: "multiCall",
        outputs: [
            {
                internalType: "bool[]",
                name: "_successes",
                type: "bool[]"
            },
            {
                internalType: "bytes[]",
                name: "_results",
                type: "bytes[]"
            },
        ],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_wallet",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_threshold",
                type: "uint256"
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "weight",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "signer",
                        type: "address"
                    },
                ],
                internalType: "struct RequireUtils.Member[]",
                name: "_members",
                type: "tuple[]"
            },
            {
                internalType: "bool",
                name: "_index",
                type: "bool"
            },
        ],
        name: "publishConfig",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_wallet",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "_sizeMembers",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "_signature",
                type: "bytes"
            },
            {
                internalType: "bool",
                name: "_index",
                type: "bool"
            },
        ],
        name: "publishInitialSigners",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_wallet",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_nonce",
                type: "uint256"
            },
        ],
        name: "requireMinNonce",
        outputs: [],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_expiration",
                type: "uint256"
            },
        ],
        name: "requireNonExpired",
        outputs: [],
        stateMutability: "view",
        type: "function"
    },
];
var _bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a6038038062002a608339810160408190526200003491620000cd565b8181816001600160a01b031660a0816001600160a01b031660601b8152505060405180606001604052806028815260200162002a3860289139816001600160a01b03166040516020016200008a92919062000104565b60408051601f198184030181529190528051602090910120608052506200014692505050565b80516001600160a01b0381168114620000c857600080fd5b919050565b60008060408385031215620000e0578182fd5b620000eb83620000b0565b9150620000fb60208401620000b0565b90509250929050565b60008351815b818110156200012657602081870181015185830152016200010a565b81811115620001355782828501525b509190910191825250602001919050565b60805160a05160601c6128c162000177600039806106265280610ac152508061064a5280610ae552506128c16000f3fe6080604052600436106101755760003560e01c8063aeea5fb5116100cb578063d1db39071161007f578063e90f13e711610059578063e90f13e71461036a578063f209883a146103bf578063ffd7d741146103d457610175565b8063d1db39071461036a578063d5b5337f1461037f578063e717aba91461039f57610175565b8063c272d5c3116100b0578063c272d5c314610308578063c39f2d5c1461031d578063c66764e11461033d57610175565b8063aeea5fb5146102d3578063b472f0a2146102e857610175565b806348acd29f1161012d5780637f29d538116101075780637f29d5381461027c578063984395bc1461029c57806398f9fbc4146102be57610175565b806348acd29f1461021c578063543196eb1461023c5780637082503b1461025c57610175565b80631cd05dc41161015e5780631cd05dc4146101c557806343d9c935146101e557806344d466c2146101fa57610175565b80630fdecfac1461017a5780631551f0ab146101a5575b600080fd5b34801561018657600080fd5b5061018f6103f5565b60405161019c919061211a565b60405180910390f35b3480156101b157600080fd5b5061018f6101c0366004611e00565b6103f9565b3480156101d157600080fd5b5061018f6101e0366004611b74565b61040b565b3480156101f157600080fd5b5061018f61041d565b34801561020657600080fd5b5061021a610215366004611c2e565b610425565b005b34801561022857600080fd5b5061018f610237366004611b74565b6107b0565b34801561024857600080fd5b5061018f610257366004611b74565b6107ce565b34801561026857600080fd5b5061021a610277366004611b95565b6107d2565b34801561028857600080fd5b5061021a610297366004611e00565b610c4c565b3480156102a857600080fd5b506102b1610c88565b60405161019c9190611f8a565b3480156102ca57600080fd5b506102b1610c8c565b3480156102df57600080fd5b5061018f610c90565b3480156102f457600080fd5b5061021a610303366004611c05565b610c94565b34801561031457600080fd5b5061018f610d72565b34801561032957600080fd5b5061018f610338366004611b74565b610d76565b34801561034957600080fd5b5061035d610358366004611b74565b610d7a565b60405161019c919061214f565b34801561037657600080fd5b5061018f610dbf565b34801561038b57600080fd5b5061018f61039a366004611e00565b610dc3565b3480156103ab57600080fd5b5061018f6103ba366004611b74565b610dc7565b3480156103cb57600080fd5b5061018f610dd9565b6103e76103e2366004611cbe565b610ddd565b60405161019c929190611fab565b4690565b60026020526000908152604090205481565b60006020819052908152604090205481565b60005a905090565b8360005b838110156104be578185858381811061043e57fe5b9050604002016000013586868481811061045457fe5b905060400201602001602081019061046c9190611b74565b60405160200161047e93929190612123565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101209150600101610429565b506000808773ffffffffffffffffffffffffffffffffffffffff166351605d8060e01b6040516020016104f19190611ede565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261052991611f0b565b6000604051808303816000865af19150503d8060008114610566576040519150601f19603f3d011682016040523d82523d6000602084013e61056b565b606091505b509150915081801561057e575080516020145b156105e3576000818060200190518101906105999190611e18565b90508381146105dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d4906124cd565b60405180910390fd5b506106d8565b60405173ffffffffffffffffffffffffffffffffffffffff891690610672907fff00000000000000000000000000000000000000000000000000000000000000907f00000000000000000000000000000000000000000000000000000000000000009087907f000000000000000000000000000000000000000000000000000000000000000090602001611e7a565b6040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff16146106d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d49061252a565b828873ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee898989604051602001610725929190612051565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261075e92916125ad565b60405180910390a383156107a65773ffffffffffffffffffffffffffffffffffffffff8816600090815260016020908152604080832043908190558684526002909252909120555b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116315b919050565b3f90565b6000806107de8461104d565b915091506000804690508089896040516020016107fd93929190611f27565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012091505061ffff831660008767ffffffffffffffff8111801561085457600080fd5b5060405190808252806020026020018201604052801561088e57816020015b61087b611aa6565b8152602001906001900390816108735790505b50905060005b8751851015610a4557600080806108ab8b896110bb565b995060ff918216945016915060018314156108d3576108ca8b8961113c565b985090506109c6565b826109055760606108e48c8a6111b4565b995090506108f28882611265565b91506108ff8f838d6115ef565b506109c6565b6002831415610994576109188b8961113c565b9850905060006109288c8a61167d565b995061ffff169050606061093d8d8b846116ee565b9a50905061094c8984836117dd565b610982576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d4906123b6565b505061098f8e828c6115ef565b6109c6565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490612162565b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff168152508585815181106109fd57fe5b60200260200101819052508380600101945050858282604051602001610a2593929190612123565b604051602081830303815290604052805190602001209550505050610894565b888114610a7e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490612470565b60405173ffffffffffffffffffffffffffffffffffffffff8c1690610b0d907fff00000000000000000000000000000000000000000000000000000000000000907f00000000000000000000000000000000000000000000000000000000000000009087907f000000000000000000000000000000000000000000000000000000000000000090602001611e7a565b6040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff1614610b73576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490612333565b828b73ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee8885604051602001610bbe91906120b5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610bf79291612588565b60405180910390a38615610c3f5773ffffffffffffffffffffffffffffffffffffffff8b16600090815260016020908152604080832043908190558684526002909252909120555b5050505050505050505050565b804210610c85576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d4906122d6565b50565b3290565b4190565b4490565b600080610ca083611a25565b9150915060008473ffffffffffffffffffffffffffffffffffffffff16638c3f5563846040518263ffffffff1660e01b8152600401610cdf919061211a565b60206040518083038186803b158015610cf757600080fd5b505afa158015610d0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2f9190611e18565b905081811015610d6b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490612279565b5050505050565b3a90565b3b90565b60408051603f833b9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092528181529080600060208401853c50919050565b4590565b4090565b60016020526000908152604090205481565b4290565b606080825167ffffffffffffffff81118015610df857600080fd5b50604051908082528060200260200182016040528015610e22578160200160208202803683370190505b509150825167ffffffffffffffff81118015610e3d57600080fd5b50604051908082528060200260200182016040528015610e7157816020015b6060815260200190600190039081610e5c5790505b50905060005b8351811015611047576000848281518110610e8e57fe5b60200260200101519050806000015115610ed4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d490612413565b80604001515a1015610f12576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d49061221c565b806060015173ffffffffffffffffffffffffffffffffffffffff1681608001518260400151600014610f48578260400151610f4a565b5a5b908360a00151604051610f5d9190611f0b565b600060405180830381858888f193505050503d8060008114610f9b576040519150601f19603f3d011682016040523d82523d6000602084013e610fa0565b606091505b50858481518110610fad57fe5b60200260200101858581518110610fc057fe5b6020026020010182905282151515158152505050838281518110610fe057fe5b6020026020010151806110085750848281518110610ffa57fe5b602002602001015160200151155b61103e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d4906121bf565b50600101610e77565b50915091565b6020810151815160f09190911c906002908111156110b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806126b56027913960400191505060405180910390fd5b915091565b8082016020015160f881901c9060f01c60ff16600283018381116110db57fe5b8451811115611135576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806127e76026913960400191505060405180910390fd5b9250925092565b8082016020015160601c6014820182811161115357fe5b83518111156111ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806126926023913960400191505060405180910390fd5b9250929050565b60408051604280825260808201909252606091600091906020820181803683370190505091508284016020018051602084015260208101516040840152602281015160428401525060428301905082811161120b57fe5b83518111156111ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806127886023913960400191505060405180910390fd5b600081516042146112c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612658603a913960400191505060405180910390fd5b6000826001845103815181106112d357fe5b602001015160f81c60f81b60f81c60ff1690506000836040815181106112f557fe5b016020015160f81c9050600061130b8582611a3e565b9050600061131a866020611a3e565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0811115611395576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d81526020018061261b603d913960400191505060405180910390fd5b8260ff16601b141580156113ad57508260ff16601c14155b15611403576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d8152602001806126dc603d913960400191505060405180910390fd5b60018414156114775760018784848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611466573d6000803e3d6000fd5b505050602060405103519450611579565b60028414156115285760018760405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c018281526020019150506040516020818303038152906040528051906020012084848460405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611466573d6000803e3d6000fd5b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c8152602001806127ab603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff85166115e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806127196030913960400191505060405180910390fd5b5050505092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f600ba597427f042bcd559a0d06fa1732cc104d6dd43cbe8845b5a0e804b2b39f60405160405180910390a380156116785773ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090204390555b505050565b8082016020015160f01c6002820182811161169457fe5b83518111156111ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061282e6022913960400191505060405180910390fd5b606060008267ffffffffffffffff8111801561170957600080fd5b506040519080825280601f01601f191660200182016040528015611734576020820181803683370190505b509150838501602001600060205b8581101561175b57908201518482015260208101611742565b848601602001805193909201519085015252508282018381101561177b57fe5b84518111156117d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061280d6021913960400191505060405180910390fd5b935093915050565b600080826001845103815181106117f057fe5b016020015160f81c905060018114806118095750600281145b1561184d578373ffffffffffffffffffffffffffffffffffffffff1661182f8685611265565b73ffffffffffffffffffffffffffffffffffffffff16149150611a1d565b60038114156119cc5782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81018452604080517f1626ba7e000000000000000000000000000000000000000000000000000000008152600481018881526024820192835286516044830152865173ffffffffffffffffffffffffffffffffffffffff891693631626ba7e938b938a9390929160640190602085019080838360005b838110156119075781810151838201526020016118ef565b50505050905090810190601f1680156119345780820380516001836020036101000a031916815260200191505b50935050505060206040518083038186803b15801561195257600080fd5b505afa158015611966573d6000803e3d6000fd5b505050506040513d602081101561197c57600080fd5b50519084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150611a1d565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603f815260200180612749603f913960400191505060405180910390fd5b509392505050565b606081901c916bffffffffffffffffffffffff90911690565b60008160200183511015611a9d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180612850603c913960400191505060405180910390fd5b50016020015190565b604080518082019091526000808252602082015290565b803573ffffffffffffffffffffffffffffffffffffffff811681146107c957600080fd5b803580151581146107c957600080fd5b600082601f830112611b01578081fd5b813567ffffffffffffffff811115611b1557fe5b611b4660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016125c6565b818152846020838601011115611b5a578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611b85578081fd5b611b8e82611abd565b9392505050565b600080600080600060a08688031215611bac578081fd5b611bb586611abd565b94506020860135935060408601359250606086013567ffffffffffffffff811115611bde578182fd5b611bea88828901611af1565b925050611bf960808701611ae1565b90509295509295909350565b60008060408385031215611c17578182fd5b611c2083611abd565b946020939093013593505050565b600080600080600060808688031215611c45578081fd5b611c4e86611abd565b945060208601359350604086013567ffffffffffffffff80821115611c71578283fd5b818801915088601f830112611c84578283fd5b813581811115611c92578384fd5b896020604083028501011115611ca6578384fd5b602083019550809450505050611bf960608701611ae1565b60006020808385031215611cd0578182fd5b823567ffffffffffffffff80821115611ce7578384fd5b818501915085601f830112611cfa578384fd5b813581811115611d0657fe5b611d1384858302016125c6565b81815284810190848601875b84811015611df1578135870160c0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0838f03011215611d5d578a8bfd5b604080518281018181108b82111715611d7257fe5b8252611d7f848d01611ae1565b8152611d8c828501611ae1565b8c82015260608085013583830152611da660808601611abd565b9082015260a08481013560808301529284013592915089831115611dc8578c8dfd5b611dd68f8d85870101611af1565b91810191909152865250509287019290870190600101611d1f565b50909998505050505050505050565b600060208284031215611e11578081fd5b5035919050565b600060208284031215611e29578081fd5b5051919050565b60008151808452611e488160208601602086016125ea565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b7fff0000000000000000000000000000000000000000000000000000000000000094909416845260609290921b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660018401526015830152603582015260550190565b7fffffffff0000000000000000000000000000000000000000000000000000000091909116815260040190565b60008251611f1d8184602087016125ea565b9190910192915050565b7f19010000000000000000000000000000000000000000000000000000000000008152600281019390935260609190911b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166022830152603682015260560190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b604080825283519082018190526000906020906060840190828701845b82811015611fe6578151151584529284019290840190600101611fc8565b5050508381038285015284518082528282019080840283018401878501865b83811015611df1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe086840301855261203f838351611e30565b94870194925090860190600101612005565b6020808252818101839052600090604080840186845b878110156120a8578135835273ffffffffffffffffffffffffffffffffffffffff612093868401611abd565b16838601529183019190830190600101612067565b5090979650505050505050565b602080825282518282018190526000919060409081850190868401855b8281101561210d5781518051855286015173ffffffffffffffffffffffffffffffffffffffff168685015292840192908501906001016120d2565b5091979650505050505050565b90815260200190565b928352602083019190915273ffffffffffffffffffffffffffffffffffffffff16604082015260600190565b600060208252611b8e6020830184611e30565b6020808252603a908201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560408201527f72733a20494e56414c49445f5349474e41545552455f464c4147000000000000606082015260800190565b60208082526027908201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a2043414c4c5f5260408201527f4556455254454400000000000000000000000000000000000000000000000000606082015260800190565b60208082526028908201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a204e4f545f454e60408201527f4f5547485f474153000000000000000000000000000000000000000000000000606082015260800190565b60208082526032908201527f526571756972655574696c7323726571756972654d696e4e6f6e63653a204e4f60408201527f4e43455f42454c4f575f52455155495245440000000000000000000000000000606082015260800190565b60208082526027908201527f526571756972655574696c7323726571756972654e6f6e457870697265643a2060408201527f4558504952454400000000000000000000000000000000000000000000000000606082015260800190565b60208082526048908201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560408201527f72733a20554e45585045435445445f434f554e5445524641435455414c5f494d60608201527f4147455f48415348000000000000000000000000000000000000000000000000608082015260a00190565b60208082526032908201527f4d6f64756c6541757468235f7369676e617475726556616c69646174696f6e3a60408201527f20494e56414c49445f5349474e41545552450000000000000000000000000000606082015260800190565b60208082526032908201527f4d756c746943616c6c5574696c73236d756c746943616c6c3a2064656c65676160408201527f746543616c6c206e6f7420616c6c6f7765640000000000000000000000000000606082015260800190565b60208082526039908201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560408201527f72733a20494e56414c49445f4d454d424552535f434f554e5400000000000000606082015260800190565b60208082526031908201527f526571756972655574696c73237075626c697368436f6e6669673a20554e455860408201527f5045435445445f494d4147455f48415348000000000000000000000000000000606082015260800190565b602080825260409082018190527f526571756972655574696c73237075626c697368436f6e6669673a20554e4558908201527f5045435445445f434f554e5445524641435455414c5f494d4147455f48415348606082015260800190565b600061ffff84168252604060208301526125a56040830184611e30565b949350505050565b6000838252604060208301526125a56040830184611e30565b60405181810167ffffffffffffffff811182821017156125e257fe5b604052919050565b60005b838110156126055781810151838201526020016125ed565b83811115612614576000848401525b5050505056fe5369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202773272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265206c656e6774684c696242797465732372656164416464726573733a204f55545f4f465f424f554e44534c696242797465732372656164466972737455696e7431363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20696e76616c6964207369676e6174757265202776272076616c75655369676e617475726556616c696461746f72237265636f7665725369676e65723a20494e56414c49445f5349474e45525369676e617475726556616c696461746f7223697356616c69645369676e61747572653a20554e535550504f525445445f5349474e41545552455f545950454c696242797465732372656164427974657336363a204f55545f4f465f424f554e44535369676e617475726556616c696461746f72237265636f7665725369676e65723a20554e535550504f525445445f5349474e41545552455f545950454c69624279746573237265616455696e743855696e74383a204f55545f4f465f424f554e44534c69624279746573237265616442797465733a204f55545f4f465f424f554e44534c69624279746573237265616455696e7431363a204f55545f4f465f424f554e44534c696242797465732372656164427974657333323a20475245415445525f4f525f455155414c5f544f5f33325f4c454e4754485f5245515549524544a26469706673582212207703da60ed37f64e2cb11e42c92f9ff5e5ff9384229a1bfdfa2906073607501764736f6c63430007060033603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";
