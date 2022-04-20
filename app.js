const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const port = 3000;
const date=require(__dirname + "/date.js")
console.log(date);
let items=["Buy Food","Cook Food","Eat Food"]
let workItems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"))

app.get('/', (req, res) => {
  const day=date.getDate()
    // let today=new Date();
    // let options={
    //     weekday:"long",
    //     day:"numeric",
    //     month:"long"
    // }
    // let day=today.toLocaleDateString("en-US",options);
    // switch (currentday) {
    //     case 0:
    //         day="Sunday"
    //         break;
    //         case 1:
    //         day="Monday"
    //         break;
    //         case 2:
    //         day="Tuesday"
    //         break;
    //         case 3:
    //         day="Wednesday"
    //         break;
    //         case 4:
    //         day="Thursday"
    //         break;
    //         case 5:
    //         day="Friday"
    //         break;
    //         case 6:
    //         day="Saturday"
    //         break;
    //         default:
    //         console.log("error" +currentday);
    //         break;
    // }


    res.render("list",{kindofDay:day,newList:items});
  })



app.post("/" , (req, res) =>  {
  let item=req.body.todo;
 console.log(req.body.submit);
 if (req.body.submit==="Work") {
   workItems.push(item)
   res.redirect("/work");
 } else {
  items.push(item);
  res.redirect("/");
 }


})

app.get('/work', (req, res) => {

  res.render("list",{kindofDay:"Work",newList:workItems});
})


app.get('/about', (req, res) => {

  res.render("about",);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})