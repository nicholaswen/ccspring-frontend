This is the frontend portion of my Cloud Computing project. It was based on the create-react-app repository provided by Facebook.

To run the react application on local:

To create a production build:
`npm run build`

To serve the production build on local:
`serve -s build`

In order to serve the application on IPFS, I followed this tutorial: https://medium.com/elbstack/decentralized-hosting-of-a-static-react-app-with-ipfs-aae11b860f5e

After successfully setting up IPFS and running the daemon,

You can add the application to IPFS using:
`ipfs add -r build`

Then you can access the site from the last hash that's returned from that operation
