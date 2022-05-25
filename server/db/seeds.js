use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
    Name: "Mike Smith",
    Email: "m.smith12@gmail.com",
    Date: "2017-06-01"
    },
    {
    Name: "Ling Liu",
    Email: "l.liu@gmail.com",
    Date: "2017-06-01"
    },
    {
    Name: "Tom Jones",
    Email: "tjones@outlook.com",
    Date: "2017-06-01"
    }
]);