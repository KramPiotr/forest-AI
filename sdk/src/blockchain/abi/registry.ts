export const RegistryABI = [
  {
    type: "constructor",
    inputs: [
      { name: "_slasherAddr", type: "address", internalType: "address" },
      { name: "_usdcTokenAddr", type: "address", internalType: "address" },
      { name: "_forestTokenAddr", type: "address", internalType: "address" },
      { name: "_revenueShare", type: "uint256", internalType: "uint256" },
      { name: "_maxPcsNum", type: "uint256", internalType: "uint256" },
      { name: "_actorRegFee", type: "uint256", internalType: "uint256" },
      { name: "_pcRegFee", type: "uint256", internalType: "uint256" },
      { name: "_actorInPcRegFee", type: "uint256", internalType: "uint256" },
      { name: "_offerInPcRegFee", type: "uint256", internalType: "uint256" },
      { name: "_treasuryAddr", type: "address", internalType: "address" },
      { name: "_burnRatio", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createProtocol",
    inputs: [
      { name: "_maxValsNum", type: "uint256", internalType: "uint256" },
      { name: "_maxProvsNum", type: "uint256", internalType: "uint256" },
      { name: "_minCollateral", type: "uint256", internalType: "uint256" },
      { name: "_valRegFee", type: "uint256", internalType: "uint256" },
      { name: "_provRegFee", type: "uint256", internalType: "uint256" },
      { name: "_offerRegFee", type: "uint256", internalType: "uint256" },
      { name: "_termUpdateDelay", type: "uint256", internalType: "uint256" },
      { name: "_provShare", type: "uint256", internalType: "uint256" },
      { name: "_valShare", type: "uint256", internalType: "uint256" },
      { name: "_pcOwnerShare", type: "uint256", internalType: "uint256" },
      { name: "_detailsLink", type: "string", internalType: "string" },
    ],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getActor",
    inputs: [{ name: "_addr", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ForestCommon.Actor",
        components: [
          { name: "id", type: "uint24", internalType: "uint24" },
          { name: "registrationTs", type: "uint256", internalType: "uint256" },
          {
            name: "status",
            type: "uint8",
            internalType: "enum ForestCommon.Status",
          },
          {
            name: "actorType",
            type: "uint8",
            internalType: "enum ForestCommon.ActorType",
          },
          { name: "ownerAddr", type: "address", internalType: "address" },
          { name: "operatorAddr", type: "address", internalType: "address" },
          { name: "billingAddr", type: "address", internalType: "address" },
          { name: "detailsLink", type: "string", internalType: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getActorBillingAddressById",
    inputs: [{ name: "_id", type: "uint24", internalType: "uint24" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getActorById",
    inputs: [{ name: "_id", type: "uint24", internalType: "uint24" }],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct ForestCommon.Actor",
        components: [
          { name: "id", type: "uint24", internalType: "uint24" },
          { name: "registrationTs", type: "uint256", internalType: "uint256" },
          {
            name: "status",
            type: "uint8",
            internalType: "enum ForestCommon.Status",
          },
          {
            name: "actorType",
            type: "uint8",
            internalType: "enum ForestCommon.ActorType",
          },
          { name: "ownerAddr", type: "address", internalType: "address" },
          { name: "operatorAddr", type: "address", internalType: "address" },
          { name: "billingAddr", type: "address", internalType: "address" },
          { name: "detailsLink", type: "string", internalType: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getActorCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getActorInPcRegFee",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getActorRegFee",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllPcAddresses",
    inputs: [],
    outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllProviders",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct ForestCommon.Actor[]",
        components: [
          { name: "id", type: "uint24", internalType: "uint24" },
          { name: "registrationTs", type: "uint256", internalType: "uint256" },
          {
            name: "status",
            type: "uint8",
            internalType: "enum ForestCommon.Status",
          },
          {
            name: "actorType",
            type: "uint8",
            internalType: "enum ForestCommon.ActorType",
          },
          { name: "ownerAddr", type: "address", internalType: "address" },
          { name: "operatorAddr", type: "address", internalType: "address" },
          { name: "billingAddr", type: "address", internalType: "address" },
          { name: "detailsLink", type: "string", internalType: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllValidators",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct ForestCommon.Actor[]",
        components: [
          { name: "id", type: "uint24", internalType: "uint24" },
          { name: "registrationTs", type: "uint256", internalType: "uint256" },
          {
            name: "status",
            type: "uint8",
            internalType: "enum ForestCommon.Status",
          },
          {
            name: "actorType",
            type: "uint8",
            internalType: "enum ForestCommon.ActorType",
          },
          { name: "ownerAddr", type: "address", internalType: "address" },
          { name: "operatorAddr", type: "address", internalType: "address" },
          { name: "billingAddr", type: "address", internalType: "address" },
          { name: "detailsLink", type: "string", internalType: "string" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBurnRatio",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getForestTokenAddr",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMaxPcsNum",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getOfferInPcRegFee",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPcRegFee",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPcsCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getProvidersCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRevenueShare",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSlasherAddr",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getTreasuryAddr",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getUsdcTokenAddr",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getValidatorsCount",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isActiveActor",
    inputs: [{ name: "_owner", type: "address", internalType: "address" }],
    outputs: [{ name: "isActive", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isOwnerOrOperatorOfRegisteredActiveActor",
    inputs: [
      {
        name: "_actorType",
        type: "uint8",
        internalType: "enum ForestCommon.ActorType",
      },
      { name: "_owner", type: "address", internalType: "address" },
      { name: "_senderAddr", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "isRegistered", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isPcRegisteredAndActive",
    inputs: [{ name: "_addr", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isRegisteredActiveActor",
    inputs: [
      {
        name: "_actorType",
        type: "uint8",
        internalType: "enum ForestCommon.ActorType",
      },
      { name: "_owner", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "isRegistered", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "paused",
    inputs: [],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "registerActor",
    inputs: [
      {
        name: "_actorType",
        type: "uint8",
        internalType: "enum ForestCommon.ActorType",
      },
      { name: "_operatorAddr", type: "address", internalType: "address" },
      { name: "_billingAddr", type: "address", internalType: "address" },
      { name: "_detailsLink", type: "string", internalType: "string" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setActorInPcRegFee",
    inputs: [{ name: "_newValue", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setActorRegFee",
    inputs: [{ name: "_newValue", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setBurnRatio",
    inputs: [{ name: "_newValue", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setForestTokenAddress",
    inputs: [{ name: "_newValue", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMaxPcsNum",
    inputs: [{ name: "_newValue", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setOfferInPcRegFee",
    inputs: [{ name: "_newValue", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPcRegFee",
    inputs: [{ name: "_newValue", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRevenueShare",
    inputs: [{ name: "_newValue", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setSlasherAddress",
    inputs: [{ name: "_newValue", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTreasuryAddrParam",
    inputs: [{ name: "_newValue", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setUsdcTokenAddress",
    inputs: [{ name: "_newValue", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferTokensToTreasury",
    inputs: [
      { name: "_from", type: "address", internalType: "address" },
      { name: "_amount", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "unpause",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateActorDetails",
    inputs: [
      {
        name: "_actorType",
        type: "uint8",
        internalType: "enum ForestCommon.ActorType",
      },
      { name: "_operatorAddr", type: "address", internalType: "address" },
      { name: "_billingAddr", type: "address", internalType: "address" },
      { name: "_detailsLink", type: "string", internalType: "string" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "ActorDetailsUpdated",
    inputs: [
      {
        name: "actorType",
        type: "uint8",
        indexed: true,
        internalType: "enum ForestCommon.ActorType",
      },
      {
        name: "ownerAddr",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operatorAddr",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "billingAddr",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "detailsLink",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewActorRegistered",
    inputs: [
      {
        name: "actorType",
        type: "uint8",
        indexed: true,
        internalType: "enum ForestCommon.ActorType",
      },
      {
        name: "ownerAddr",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operatorAddr",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "billingAddr",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "detailsLink",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewProtocolRegistered",
    inputs: [
      { name: "addr", type: "address", indexed: true, internalType: "address" },
      {
        name: "ownerAddr",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "detailsLink",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Paused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PcDetailsUpdated",
    inputs: [
      {
        name: "ownerAddr",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operatorAddr",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "detailsLink",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PcStatusUpdated",
    inputs: [
      {
        name: "ownerAddr",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "status",
        type: "uint8",
        indexed: false,
        internalType: "enum ForestCommon.Status",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProtocolParamUpdated",
    inputs: [
      {
        name: "paramName",
        type: "string",
        indexed: true,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Unpaused",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "ActorAlreadyRegistered", inputs: [] },
  { type: "error", name: "EnforcedPause", inputs: [] },
  { type: "error", name: "ExpectedPause", inputs: [] },
  { type: "error", name: "FailedDeployment", inputs: [] },
  {
    type: "error",
    name: "InsufficientBalance",
    inputs: [
      { name: "balance", type: "uint256", internalType: "uint256" },
      { name: "needed", type: "uint256", internalType: "uint256" },
    ],
  },
  { type: "error", name: "InvalidAddress", inputs: [] },
  { type: "error", name: "InvalidParam", inputs: [] },
  { type: "error", name: "LimitExceeded", inputs: [] },
  { type: "error", name: "OnlyOwnerAllowed", inputs: [] },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [{ name: "owner", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
  },
] as const;
