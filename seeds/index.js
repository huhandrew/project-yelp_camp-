
const mongoose = require('mongoose');
const cities = require('./cities');
const Campground = require('../modules/campground');
const { places, descriptors } = require('./seedHelpers');

mongoose.connect('mongodb://localhost:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error!"));
db.once("open", () => {
    console.log('Database connected')
})

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 5; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) +10
        const camp = new Campground({
            author: '635a756d993dcb7b02228784',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            geometry: {
              type: "Point",
              coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                  url: 'https://res.cloudinary.com/dpm9xvicv/image/upload/v1667142322/project_folder/ovywsp2v1arpcdnxn5ke.jpg',
                  filename: 'project_folder/ovywsp2v1arpcdnxn5ke'
                },
                {
                  url: 'https://res.cloudinary.com/dpm9xvicv/image/upload/v1667142322/project_folder/t1ewied0smlnq91ktanl.jpg',
                  filename: 'project_folder/t1ewied0smlnq91ktanl'
                }
              ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam excepturi porro eum corrupti rem. A reiciendis ad consectetur dolores. Ipsum maiores cumque voluptatem aperiam, numquam magnam distinctio accusamus fugit magni?',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})





