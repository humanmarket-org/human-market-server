# Human Market API Server

Human Market is a project to utilize a closed market economy to allow people to fund organizations or activism activities. Currently being developed for the vegan community, in an attempt to fight back against carnist beliefs, by allowing us to fund activism by purchasing vegan products by vegan companies in the vegan market.

## Currencies

The project intends to allow people to pay in any currency they wish. Online platforms like Payoneer, Paypal, or MercadoPago. Or any criptocurrency, like Bitcoins, Litecoins, Etherium, Dogecoins, etc. It shall not allow to pay directly with credit cards, as it's government-regulated and not native to the Internet.

## Contributions

There will be 3 different kind of contributions in the market:

- Carbon contribution is applied individually to each company product according to the carbon footprint of the product determined by a market comite, the tax income goes to carbon restoration organizations. For now this will be 0 as it's impractical, but should be implemented in the future when we have the resources.
- Market contribution is applied obligatory to each person purchase, the contributions go to the market maintenance and development, and the rest goes to the organizations activities the market deem worthy. All the data money distribution should be completely transparent and accessible in real time.
- Voluntary contribution after the market contribution, people can choose to pay an extra (think Humble Bundle). By default it's pre-selected on a specific rate, and all the contribution also goes to the market. However, people can choose to not pay it at all, or pay a bigger contribution, or they can choose to pick another non-profit organization of their choosing

The market administration decides which companies and organizations are allowed to sell and receive funding from the market. The politics of this are for the organization funding the market to be handled. Thus you can make a local market for your local community and handle only local businesses, and fund local activities, and local people can contribute, and you can set the contributions percentage any way you want.

## Entities

In the market there are multiple registered entities:

- **Companies** are the ones where the producs come from, they are the generators o value.
- **Organizations** are non-for-profit that receive funding by the market, this could be activism. The organizations are grabbed and administration-approved from a OpenNonProfits.org page.
- **Stores** are the physical spaces where the physical goods of the companies are shipped from or made available or distributed to customers, they have a geographic location.
- **People** are the ones actually funding the market by spending their money on it. People can have permissions to administrate different companies, organizations or stores in the market.

## Administration

The administration has the following responsabilities:

- Has to approve or ban companies and organizations from the market based on a code of conduct they decide.
- Validate the identity of companies and organizations.
- Configure all the market parameters, like contribution rates, funding organizations, server configuration, etc.
- Take care of maintaining the software infrastructure of the market by holding server keys and building redundance to maintain uptime, etc.

## Transparency

Contributions made to the market, organizations and fundrisings should all be accessible and visible in real time, with leaderboard for people to see top donnors on specific organizations, or fundrisings.

## Development

To make the market as open and accessible as possible, we should make it as an API, and develop the frontend separatedly. This way anyone can create new clients for the market effortlessly.

The technology picked for the API is GraphQL, for a better separation of concerns with the front-end.

## Markets Network

Since we can all create local markets, we need a way for markets to interact with each others. Local markets should be able to connect in a two-way fashion with regional or global markets. This way we can fund regional and local activities. We could have a regional market that helps funds regional projects, and can be build on top of a local market.

## Fundrisings

The market-registered organizations could publish fundrisings to finance specific projects that cannot be financed by the regular income of the organization.

On the paying page customers should be able to see the list of current fundrisings that might interest them to collaborate to, and add funds to the purchase to take advantage of the ease of transaction.

Each fundrising would have a leaderboard with the individuals with the most donations, from this market and also international markets in the markets network.

If anyone wants to donate anonymously or not figure in the leaderboard, they can do it by themselves by sending money to a Bitcoin address or something like that, it doesn't matter.

## Services and API

Service products could also be published by companies, or a market API could be used to use the market buying process in your website or app. The market should work as a paying platform in a Stripe-like fashion, where it allows your to handle transactions. This way we can offer a service for SASS companies that also help fund the movement.

So imagine you're buying something online, and you're given a modal to pay for it, there you can pick the market that you want to handle the transaction. You can pick a market without taxes, or you can pick your local market because you want to fund your local community. The company that sells the online service doesn't have to handle transactions, credit cards or anything, and the person that pays ir paying contributions to a specific market of their choosing.

## Non Profits Organizations Registry

There is currently an idea in the burner to make a non-profits registry online that also works with an API and allows markets in the network to pick them up for funding.

## Roadmap And Development

https://trello.com/b/2KPRtgiL/humanmarketorg
