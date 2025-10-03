const mongoose = require('mongoose');

// async function ConnectToMongoDb(url) {
//     try {
//         await mongoose.connect(url);
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         throw error;
//     }
// }
const ConnectToMongoDb = async ({url}) =>{
    return await mongoose.connect(url)
}

module.exports = {ConnectToMongoDb};