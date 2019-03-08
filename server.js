const express=require('express')
const app=express()

const exercise = require('./db').exercise
app.use('/',express.static('./public'))
app.get('/Exercise', async (req, res) => {
  console.log(req.query.muscle)
  const Exercises = await exercise.findAll({
    where:{
      muscle :req.query.muscle
    }
  })

  res.send(Exercises)
})
app.get('/BodyParts/NameOfExercise',async(req,res)=>{
  console.log(req.query.Muscle)
  const list=await exercise.findAll({
    attributes: ['name'],
    where:{
      muscle :req.query.Muscle
    }
  })
  res.send(list)
})
app.listen(5000,()=>{
  console.log("Listening on 5000")
})
