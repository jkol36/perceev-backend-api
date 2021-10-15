import dynamodb from 'dynamodb';

dynamodb.AWS.config.update({region: 'us-east-1'})
global.Promise = require('bluebird')
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').load()
  }
  