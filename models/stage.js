//Dependencies
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//Model
class Stage extends Model {}

Stage.init({
    //column configuration here
    stage_id: { 
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
    modelName: "Stage",
    tableName: "stages",
    createdAt,
    updatedAt
}) 


//Export
module.exports = Stage