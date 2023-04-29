//Dependencies
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//Model
class Event extends Model {}

Event.init({
    //column configuration here
    event_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
}, {
    //extra options here
    sequelize, //mandatory to create a sequelize connection instance
    modelName: "Event",
    tableName: "events",
    createdAt,
    updatedAt
}) 


//Export
module.exports = Event