const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

///////// here api call /////////
module.exports = sequelize.define('users', {

    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    user_name: Sequelize.STRING,
    pass_word: Sequelize.STRING,
    messages: Sequelize.STRING,
    fileurl: Sequelize.STRING,
    dob: Sequelize.DATE,
    email: Sequelize.STRING,
    trackedid: Sequelize.STRING,
    createby: Sequelize.STRING,
    createdate: Sequelize.DATE,
    deleted: Sequelize.BOOLEAN,
    active: Sequelize.BOOLEAN
});
