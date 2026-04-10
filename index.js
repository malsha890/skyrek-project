import express from 'express'//import expresss library from the framework folder
import mongoose from 'mongoose'
import Student from './models/student.js'


const mongoDBURI = "mongodb+srv://malsha:mali890@cluster0.sesd40b.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoDBURI).then(
    ()=>{
       console.log("connected to mongoDB successfully")
    }
)



const app= express()//use instead of let because it should be read only 

//function success(){
  //  console.log('server started sucessfully')


//}

app.use(express.json())//middleware

app.get(
    "/",
    (req,res)=>{
        //console.log(req)
        //console.log("get request recieved")

        Student.find().then(
            (students)=>{
                //console.log(result)
                res.json(students)
            }
        )
    }
)//do this function if get request recieved 
app.post(
    "/",
    (req,res)=>{
       
const newStudent = new Student(req.body)

newStudent.save().then(
()=>{
    res.json({
        message : "student added succesfully"
    })
}
)
    }
)
app.delete(
    "/",
    (req,res)=>{
        console.log(req)
        console.log("delete request recieved")
    }
)

app.listen(3000,//3000 is the port number,listen means run the app 

    ()=>{
        console.log('server started successfully')
        console.log('listening on port 3000')
    }//function that i created above 
)



