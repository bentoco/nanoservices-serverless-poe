'use strict'

const s3Service = require('./service/s3Service')
const dynamodbService = require('./service/dynamodbService')

module.exports.upload = async (event) => {
    const item = await s3Service.upload(event.body)
    await dynamodbService.put(item)
    return {
        statusCode: 201,
        body: JSON.stringify(item),
    }
}
