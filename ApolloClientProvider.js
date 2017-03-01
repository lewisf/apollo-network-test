import ApolloClient, { createBatchingNetworkInterface } from 'apollo-client'

class ApolloClientProvider {

  constructor() {
    const batchingNetworkInterface = createBatchingNetworkInterface({
      uri: 'http://www.example.com',
      batchInterval: 10,
      opts: { }
    })

    this.client = new ApolloClient({
      networkInterface: batchingNetworkInterface
    })
  }
}

export default new ApolloClientProvider()
