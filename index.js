var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public' ));


///////////////////////////////////// ROUTING START ///////////////////////////////////

app.get('/',function(req,res){
	res.sendFile('index.html',{root:__dirname})
});

///////////////////////////////////// ROUTING END ///////////////////////////////////


app.listen(process.env.PORT || 3000,function()
{
	console.log('server is up and running on port 3000');
});
