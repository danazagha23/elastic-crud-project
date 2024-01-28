const { Client } = require('@elastic/elasticsearch');

const esClient = new Client({
    node: 'http://elasticsearch:9200'
});

//create index
async function createIndex(indexName) {
    try {
        const result = await esClient.indices.create({
            index: indexName
        })
        console.log(`Index ${indexName} created`, result);
        return result;
    } catch(error) {
        console.error(`Error creating index ${indexName}:`, error);
        throw error;
    }
}

module.exports = {
    createIndex,
    esClient
};