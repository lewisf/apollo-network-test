import ApolloClientProvider from '../ApolloClientProvider'

describe('ApolloClientProvider tests', () => {
  it('should pass test', () => {
    expect(ApolloClientProvider.client).not.toBeNull()
  })
})
