import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
uri: "https://api-sa-east-1.graphcms.com/v2/cl4o7wnvo11eq01z7aux03ni0/master",
cache: new InMemoryCache()
})