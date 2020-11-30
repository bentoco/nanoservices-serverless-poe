const elasticsearch = require('elasticsearch')
const client = new elasticsearch.Client({
    host:
        'https://vpc-elasticsearch-cluster-pkqvaypiz5wflhpltyxbqbxhvq.us-east-1.es.amazonaws.com',
    apiVersion: '7.4',
})

const search = async (query) => {
    return await client.search({
        index: 'imagens',
        q: 'tags:' + query,
    })
}

module.exports = {
    search: search,
}
