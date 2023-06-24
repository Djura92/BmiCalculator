const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req,res) => {
  res.sendFile(__dirname + "/index.html")
});

app.get('/bmicalculator', function(request, response){
  response.sendFile(__dirname + "/bmiCalculator.html")
});

app.post('/bmicalculator', function(request, response){
  var weight = request.body.weight;
  var height = request.body.height;
  var resultBMIALL =(weight / (height * height)) * 10000;
  var resultBMI = resultBMIALL.toFixed(2);
  var switchResult = "";
  if (resultBMI < 16) {
    switchResult = "Severe Thinness < 16";
  }else if (16 <= resultBMI && resultBMI < 17){
      switchResult = "Moderate Thinness 16 - 17";
  }else if (17 <= resultBMI && resultBMI < 18.5){
      switchResult = "Mild Thinness 17 - 18.5";
  }else if (18.5 <= resultBMI && resultBMI < 25){
      switchResult = "Normal	18.5 - 25";
  }else if (25 <= resultBMI && resultBMI < 30){
      switchResult = "Overweight	25 - 30";
  }else if (30 <= resultBMI && resultBMI < 35){
      switchResult = "Obese Class I	30 - 35";
  }else if (35 <= resultBMI && resultBMI < 40){
      switchResult = "Obese Class II	35 - 40";
  }else if (resultBMI >= 40){
      switchResult = "Obese Class III	> 40";
  }

response.send("<h2>Your weight is: " + weight + "kg and height is: " + height + "cm and BMI is " + resultBMI + " and you are " + switchResult + "</h2>");

});

app.post('/', function(req, res){
  var result = Number(req.body.n1) + Number(req.body.n2);
  res.send("your result is => " + result);
});



app.listen(port, () =>{
  console.log('Listening port ' + port);
});
