export const changelog = {
  "entries": [
    {
      "date": "2024-09-16",
      "title": "Sep 16, 2024",
      "description": "Send email delivery notifications to NFT recipients",
      "content": "You can now send email delivery notifications to mint recipients when using the Mint API. You can customize the email's formatting, as well as the locale for the email content. This functionality can be configured via the Crossmint Console, as well, as programmatically via API.",
      "sections": [
        {
          "title": "Console Configuration",
          "content": "To send an email via the Crossmint Console, go to an NFT that has not been minted yet, click on the 'more options' affordance, and select the 'Mint & send NFT' option. Make sure the 'Notify recipient via email' option is selected, enter an email address you want to send this NFT to and hit 'Mint'."
        },
        {
          "title": "Email Customization",
          "content": "To customize the email's presentation, click on Settings and navigate to the Branding tab. From the dropdown, pick the new option 'Deliver NFT via email.' Here you will be able to change the logo shown in the email, as well as the main button's color. You can preview these changes as you make them and save your changes for later use."
        },
        {
          "title": "API Integration",
          "content": "Programmatically, you can set two new parameters 'sendNotification' (boolean) and 'locale' (string, i.e. 'en-US') as part of the request body for the following API routes: Mint NFT, Mint NFT by ID, Mint SFT, Issue Credential. The 'sendNotification' parameter is, by default, set to true for projects created after the feature's release date (September 16, 2024). For legacy projects, we don't apply this default until March 14, 2025, unless explicitly specified by the developer. The locale is set to en-US, by default."
        }
      ]
    },
    {
      "date": "2024-07-26",
      "title": "July 26, 2024",
      "description": "Sponsor fees for users on the checkout",
      "content": "You now have control over who pays fees when you sell an NFT with the checkout tools when using Crossmint contracts. You can select whether buyers should pay for the gas and processing fees, or whether you want to sponsor them, to remove friction from buyers and have price stability.",
      "sections": [
        {
          "title": "Console Configuration",
          "content": "To access this in the Crossmint Console, go to your managed collection, click on 'Payments' and then 'Settings'. Here you will find the new 'Who pays the fees?' switch. This will allow you to set the payer of fees for your collection. You can update and save this setting at any time."
        },
        {
          "title": "Buyer pays fees",
          "content": "The buyer pays the price of the NFT set in console, plus applicable fees. You receive the full payout amount (price you set in the console)"
        },
        {
          "title": "Seller pays fees",
          "content": "The buyer pays the price of the NFT (set in console). You receive the NFT price you set minus applicable fees. The price paid at the time of mint includes all fees."
        },
        {
          "title": "Default Setting",
          "content": "All existing collections are set to buyer pay fees by default."
        }
      ]
    },
    {
      "date": "2024-06-05",
      "title": "June 05, 2024",
      "description": "Launching Orders: See who purchased your NFTs from the Console",
      "content": "Starting today, June 5, 2024, you can see the list of orders for your NFT collections directly from the console. It includes detailed data for each order, including troubleshooting information.",
      "sections": [
        {
          "title": "Access Orders",
          "content": "To access it, on the Crossmint Console, inside your collection, click on 'Payments' and then click on 'Orders' to access the Orders tab. The orders tab gives you a greater observability of order volume."
        }
      ]
    },
    {
      "date": "2024-05-30",
      "title": "May 30, 2024",
      "description": "Crossmint now supports SKALE",
      "content": "Starting today, May 30, 2024, Crossmint supports SKALE. You can now create wallets, create NFT Collections and mint NFTs on SKALE.",
      "sections": [
        {
          "title": "Important Info",
          "content": "The chain label for SKALE's testnet is 'skale-nebula-testnet', and the chain label for its mainnet is 'skale-nebula'. Refer to this documentation page to learn how to create a collection on SKALE and get started."
        },
        {
          "title": "Note",
          "content": "Support for NFT Checkout for collections on SKALE will be released shortly (currently not self-serve)."
        }
      ]
    },
    {
      "date": "2024-04-30",
      "title": "April 30, 2024",
      "description": "Adding Support for NFT Checkout on Apex Protocol",
      "content": "Starting today, April 30, 2024, Crossmint supports NFT Checkout on Apex Protocol.",
      "sections": [
        {
          "title": "Importing an Apex Protocol smart contract",
          "content": "Go to the 'Collections' tab on Crossmint's Console. Create a new collection. Select 'Import an existing contract' and select the chain as 'Apex'. Now enter the contract address and then create the collection. After this, you will be able to enable NFT Checkout for your contract."
        }
      ]
    },
    {
      "date": "2024-04-04",
      "title": "April 04, 2024",
      "description": "Deprecating Polygon Mumbai and Releasing Polygon Amoy support on Staging",
      "content": "Starting April 13, 2024, Polygon Mumbai will no longer be supported as Polygon Mumbai will be fully deprecated. Polygon Amoy will be supported on Staging starting April 10, 2024.",
      "sections": [
        {
          "title": "Using Amoy for Collections on Staging",
          "content": "The chain identifier for Polygon Amoy testnet is 'polygon-amoy'. You can use them in all APIs that support a chain selector, including Minting APIs (e.g. Create NFT Collection) and wallets (e.g. Get NFTs from Wallet)."
        }
      ]
    },
    {
      "date": "2024-02-15",
      "title": "Feb 15, 2024",
      "description": "New: You can now update compressed NFTs in Solana",
      "content": "We are excited to announce that Crossmint now supports updating compressed NFTs",
      "sections": [
        {
          "title": "Pricing",
          "content": "The pricing for edits is the same as for NFT minting on the chain."
        },
        {
          "title": "Documentation",
          "content": "You can see how to edit your NFTs checking the API Reference in the Crossmint API Reference."
        }
      ]
    },
    {
      "date": "2024-02-09",
      "title": "Feb 09, 2024",
      "description": "Addition of a new webhook for the third party contracts deployed and imported on Crossmint.",
      "content": "A new Webhook have been added for BYOC Collections. Third party contracts deployed and imported on Crossmint can now use this Webhooks.",
      "sections": [
        {
          "title": "New Event",
          "content": "nfts.create.failed - This event occurs when a request to mint an NFT has failed. It can be used to determine the reason your contract reverted the minting process."
        },
        {
          "title": "Note",
          "content": "You can subscribe to the events above from the Webhooks section on the Crossmint Console."
        }
      ]
    },
    {
      "date": "2024-02-01",
      "title": "Feb 01, 2024",
      "description": "Releasing Sepolia support on all EVM L2s",
      "content": "Starting today, Sepolia can be used for all EVM chains in staging. Review this announcement to learn about how to use it, as well as the deprecation timeline for Goerli.",
      "sections": [
        {
          "title": "Using Sepolia for test collections",
          "content": "The chain identifiers for sepolia testnets are arbitrum-sepolia (for both Arbitrum One and Nova), base-sepolia, ethereum-sepolia, optimism-sepolia, and zora-sepolia."
        },
        {
          "title": "Goerli deprecation: Phase 1 (Feb 6 2024)",
          "content": "Starting on Tue 6th of Feb, the following chain identifiers will default to sepolia if used in Staging: arbitrum, arbitrumnova, base, ethereum, optimism, zora."
        },
        {
          "title": "Goerli deprecation: Phase 2 (Feb 9 2024)",
          "content": "Starting on Friday 9th of Feb, Goerli will stop working for any Crossmint product."
        }
      ]
    },
    {
      "date": "2024-01-11",
      "title": "Jan 11, 2024",
      "description": "Event identifiers property renamed on the Webhook payload",
      "content": "Starting January 12, 2024, three event identifiers on the Webhook Payload ('type') property will be renamed. Please take the required actions stated below to prevent downtime on your applications.",
      "sections": [
        {
          "title": "Context",
          "content": "As Crossmint is expanding its API suite, the number of scopes and events are increasing drastically. In doing so, some inconsistencies that complicate the developer experience were introduced. This change brings back consistency to improve the developer experience."
        },
        {
          "title": "Breaking Changes",
          "content": "On the Webhook Payload, the following event identifiers ('type') property will be renamed: 'collection:creation.succeeded' will be renamed to 'collections.create.succeeded', 'mint.succeeded' will be renamed to 'nfts.create.succeeded', 'mint:update.succeeded' will be renamed to 'nfts.update.succeeded'"
        },
        {
          "title": "Requested Changes",
          "content": "Kindly modify your code accordingly so that it treats both event type names (old and new), as the same payload. To see how the new payload is structured, refer to the Mint API Webhooks docs."
        }
      ]
    },
    {
      "date": "2023-11-30",
      "title": "Nov 30th, 2023",
      "description": "Announcing Branded Checkout v2",
      "content": "Starting 1st December, 2023, all projects created on Crossmint will use the new modular checkout product, i.e., Branded Checkout v2.",
      "sections": [
        {
          "title": "Background",
          "content": "In the past, Crossmint's Branded Checkout had incorporated features such as, Non-custodial Delivery, Pay with Crypto, Purchase Multiple NFTs, Support for Apple Pay and Google Pay, and a lot more."
        },
        {
          "title": "New Features",
          "content": "To improve the user experience and product consistency further, Crossmint is rolling out a new upgrade - Branded Checkout v2. This enables developers to easily mix and match various features provided by Crossmint into a single user flow."
        },
        {
          "title": "Rollout Information",
          "content": "Starting December 1, all projects (those created prior to Nov 21) will be migrated to this new version."
        }
      ]
    },
    {
      "date": "2023-11-22",
      "title": "Nov 22nd, 2023",
      "description": "Pay with crypto is now available with Embedded Checkout",
      "content": "Crossmint's Embedded Checkout now supports cross-chain crypto payments in addition to the Pay with Credit Card option.",
      "sections": [
        {
          "title": "Documentation",
          "content": "Click here to learn more about how you can use the Embedded Checkout."
        }
      ]
    },
    {
      "date": "2023-11-15",
      "title": "Nov 15th, 2023",
      "description": "Deprecating Support for Arbitrum on the Staging Developer Console",
      "content": "Starting 18th November 2023, Crossmint will no longer support Arbitrum (Arbitrum Goerli) on its Staging Developer Console.",
      "sections": [
        {
          "title": "Alternative Options",
          "content": "Arbitrum One will continue to be available on the Production Console (Mainnet). Moving forward, you can continue to use Ethereum on the Staging Console (Testnet), as well as other supported EVM chains."
        }
      ]
    },
    {
      "date": "2023-11-07",
      "title": "Nov 7th, 2023",
      "description": "Contract creation is now self-serve for Optimism",
      "content": "The support for contract creation via Collections on Developer Console is now updated. You can now create a contract on Optimism from the Collections page on Crossmint's Developer Console.",
      "sections": [
        {
          "title": "Availability",
          "content": "This change has been rolled out for both Staging and Production environments. Refer to this guide for more info on creating Crossmint collections."
        }
      ]
    },
    {
      "date": "2023-10-31",
      "title": "Oct 31st, 2023",
      "description": "Minting API is now self-serve for four more EVM chains",
      "content": "Support for Crossmint's minting API has now been updated. The minting API is now self-serve for the following EVM chains.",
      "sections": [
        {
          "title": "Supported Chains",
          "content": "1. Binance Smart Chain - BSC\n2. Arbitrum One\n3. Optimism\n4. Zora"
        },
        {
          "title": "Documentation",
          "content": "You can learn more about how to use the minting API here. You can also see the complete API reference here."
        }
      ]
    },
    {
      "date": "2023-10-28",
      "title": "Oct 28, 2023",
      "description": "Releasing Sepolia support on all EVM L2s",
      "content": "Starting today, Sepolia can be used for all EVM chains in staging.",
      "sections": []
    },
    {
      "date": "2023-10-14",
      "title": "Oct 14, 2023",
      "description": "Treasury Contract Upgrade",
      "content": "We have released an internal architectural change that increases throughput and efficiency for EVM operations, including payments and batch minting of NFTs.",
      "sections": [
        {
          "title": "TL;DR",
          "content": "USDC Payments: Transitioned to single transaction processing for increased security, reliability, and speed in handling USDC payments. Treasury Key Rotations: Simplified operational process with automated permission granting, reducing the time and resources required for key rotations. Batch Minting Setup: Implemented setup for batch minting to save on gas fees and increase throughput for NFT minting operations. Supported Chains: Expanded deployment to multiple Mainnet and Testnet environments across various EVM chains including Ethereum, BSC, Polygon, and others."
        },
        {
          "title": "Enhanced USDC Payments",
          "content": "Transitioned to a single transaction, reducing failure points."
        },
        {
          "title": "Streamlined Treasury Key Rotations",
          "content": "If our team decides to rotate the treasury keys for various reasons, developers do not need to worry about rotating their keys which simplifies the process reducing operational burden."
        },
        {
          "title": "Batch Minting Setup",
          "content": "Under heavy network traffic and congestion, expected to save up to 30% on gas fees for same collection mints and 60% for mints to the same recipient. Augmented the maximum throughput for minting operations."
        },
        {
          "title": "Supported Chains",
          "content": "Now deployed on Ethereum, Polygon, Base, Arbitrum, Optimism, Zora, and BSC across various mainnet and testnet environments."
        }
      ]
    },
    {
      "date": "2023-10-28",
      "title": "Oct 28th, 2023",
      "description": "Support for Highlight.xyz on Crossmint",
      "content": "Crossmint now supports Highlight.xyz contracts in the developer console. You can now login to Crossmint's developer console, and import a Highlight contract and setup credit card and pay with crypto payments for your NFT Collection.",
      "sections": [
        {
          "title": "Supported Contract Types",
          "content": "At the moment, we support two types of Highlight contracts: 1. Series Contracts 2. Generative Series Contracts"
        },
        {
          "title": "Supported Blockchains",
          "content": "Both of the above contracts can be imported on Crossmint's developer console. We support Highlight contracts deployed on the following blockchains: Ethereum, Polygon, Base, Arbitrum One, Optimism, and Zora."
        },
        {
          "title": "Setup Process",
          "content": "After you import the contract on Crossmint's developer console, you need to go to your collection page on Highlight and enable credit card payments."
        }
      ]
    },
    {
      "date": "2023-10-14",
      "title": "Oct 14th, 2023",
      "description": "Treasury Contract Upgrade",
      "content": "We have released an internal architectural change that increases throughput and efficiency for EVM operations, including payments and batch minting of NFTs. This update is applied to all projects automatically, but it affects the addresses that Crossmint will be sending transactions from.",
      "sections": [
        {
          "title": "TL;DR",
          "content": "USDC Payments: Transitioned to single transaction processing for increased security, reliability, and speed in handling USDC payments. Treasury Key Rotations: Simplified operational process with automated permission granting, reducing the time and resources required for key rotations. Batch Minting Setup: Implemented setup for batch minting to save on gas fees and increase throughput for NFT minting operations. Supported Chains: Expanded deployment to multiple Mainnet and Testnet environments across various EVM chains including Ethereum, BSC, Polygon, and others."
        },
        {
          "title": "Action Required",
          "content": "If you had hardcoded a treasury address on your smart contract before, you are required to change it before 15th November, 2023. Please contact sales for support with migration!"
        },
        {
          "title": "Enhanced USDC Payments",
          "content": "Transitioned to a single transaction, reducing failure points."
        },
        {
          "title": "Streamlined Treasury Key Rotations",
          "content": "If our team decides to rotate the treasury keys for various reasons, developers do not need to worry about rotating their keys which simplifies the process reducing operational burden."
        },
        {
          "title": "Batch Minting Setup",
          "content": "Under heavy network traffic and congestion, expected to save up to 30% on gas fees for same collection mints and 60% for mints to the same recipient. Augmented the maximum throughput for minting operations."
        },
        {
          "title": "Supported Chains",
          "content": "Now deployed on Ethereum, Polygon, Base, Arbitrum, Optimism, Zora, and BSC across various mainnet and testnet environments."
        }
      ]
    }
  ]
}
