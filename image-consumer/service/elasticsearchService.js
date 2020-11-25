const elasticsearch = require('elasticsearch')
const client = new elasticsearch.Client({
    host:
        'https://vpc-elasticsearch-cluster-pkqvaypiz5wflhpltyxbqbxhvq.us-east-1.es.amazonaws.com',
    apiVersion: '7.4',
})

const index = async (doc) => {
    await client.index({
        index: 'imagens',
        type: 'object',
        body: doc,
    })
}

module.exports = {
    index: index,
}
