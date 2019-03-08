const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize({
  storage: __dirname + '/Exercises.db',
  dialect: 'sqlite'
})

const exercise = db.define('exercise', {
  name: {
    type: DT.STRING,
    allowNull: false,
    primaryKey:true
  },
  muscle: {
    type: DT.STRING,
    allowNull:false
  },

  Beginner:{
    defaultValue:0 ,
    type: DT.INTEGER
  },
  Novice:{
    type: DT.INTEGER,
    defaultValue:0
  },
  Inter:{
    type: DT.INTEGER,
    defaultValue:0

  },
  Advanced:{
    type: DT.INTEGER,
    defaultValue:0

  },
  Expert:{
    type: DT.INTEGER,
    defaultValue:0
  }
})
let NameArray=['Barbell Squat','Leg Press','Leg Curl','Hamstring Curl','Seated Leg Press','Hack Squats']
let MuscleGroup='Quads'
let LimitArr=[{Beginner:45,Novice:70,Inter:95,Advanced:130,Expert:144},
              {Beginner:18,Novice:35,Inter:55,Advanced:70,Expert:85},
              {Beginner:33,Novice:59,Inter:94,Advanced:137,Expert:186},
              {Beginner:21,Novice:38,Inter:62,Advanced:92,Expert:125},
              {Beginner:60,Novice:105,Inter:160,Advanced:232,Expert:300},
              {Beginner:49,Novice:67,Inter:88,Advanced:113,Expert:139}]
// for(let i=0;i<NameArray.length;i++){
//    exercise.create({
//     name:NameArray[i],
//     muscle:MuscleGroup,
//     Beginner:LimitArr[i].Beginner,
//     Novice:LimitArr[i].Novice,
//     Inter:LimitArr[i].Inter,
//     Advanced:LimitArr[i].Advanced,
//     Expert:LimitArr[i].Expert
//   })
// }
db.sync()

module.exports = {
  exercise
}
