//Dependencies
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//Model
class Band extends Model {}

Band.init({
    //column configuration here
    band_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    genre: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    available_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    //extra options here
    sequelize, //mandatory to create a sequelize connection instance
    modelName: "Band",
    tableName: "Band",
    createdAt,
    updatedAt
}) 


//Export
module.exports = Band