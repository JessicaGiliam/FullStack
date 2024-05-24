/* JGiliam: Module 3 step 3 Read data created in trips.json */
var fs = require('fs');
var path = require('path');
var trips = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'trips.json'), {encoding: 'utf8', flag: 'r'}));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips});
};

module.exports = {
    travel
};