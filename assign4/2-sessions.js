var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();

let pathsgiven =[];
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 50000 }}))


app.get('/pearl', function(requ, res, next) {
  if(!pathsgiven.includes("/pearl")){
        pathsgiven.push("/pearl");
      }   
  if (requ.session.views) {       
    res.setHeader('Content-Type', 'html')
    res.write('<p>Currently on route: /pearl</p>')
    res.write('<p>Previously visited:<p>')
    pathsgiven.forEach(function (path){      
          if(path!='/pearl'){               
                res.write('<p>'+path+'</p>')
          }
    })
    res.end()
  } else {
    requ.session.views = 1
    res.write('<p>Currently on route: /pearl</p>')
    res.end('Welcome to http://localhost:5000/')
  }
})

app.get('/spongebob', function(requ, res, next) {
      if(!pathsgiven.includes("/spongebob")){
            pathsgiven.push("/spongebob");
          }       
      if (requ.session.views) {      
        res.setHeader('Content-Type', 'html')       
        pathsgiven.forEach(function (path){
              if(path!='/spongebob'){
                    res.write('<p>'+path+'</p>')
              }
        })
        res.end()
      } else {
        requ.session.views = 1
        res.write('<p>Currently on route: /spongebob</p>')
        res.end('Welcome to http://localhost:5000/')
      }
})

app.get('/plankton', function(requ, res, next) {
      if(!pathsgiven.includes("/plankton")){
            pathsgiven.push("/plankton");
          }       
      if (requ.session.views) {        
        res.setHeader('Content-Type', 'html')       
        pathsgiven.forEach(function (path){ 
              if(path!='/plankton'){
                    res.write('<p>'+path+'</p>')
              }
        })
        res.end()
      } else {
        requ.session.views = 1
        res.write('<p>Currently on route: /plankton</p>')
        res.end('Welcome to http://localhost:5000/')
      }
})

app.get('/sandy', function(requ, res, next) {
      if(!pathsgiven.includes("/sandy")){
            pathsgiven.push("/sandy");
          }       
      if (requ.session.views) {       
        res.setHeader('Content-Type', 'html')       
        pathsgiven.forEach(function (path){
              if(path!='/sandy'){                    
                    res.write('<p>'+path+'</p>')
              }
        })
        res.end()
      } else {
        requ.session.views = 1
        res.write('<p>Currently on route: /sandy</p>')
        res.end('Welcome to http://localhost:5000/')
      }
})
app.get('/patrick', function(requ, res, next) {
      if(!pathsgiven.includes("/patrick")){
            pathsgiven.push("/patrick");
          }       
      if (requ.session.views) {        
        res.setHeader('Content-Type', 'html')       
        pathsgiven.forEach(function (path){
              if(path!='/patrick'){
                    res.write('<p>'+path+'</p>')
              }
        })
        res.end()
      } else {
        requ.session.views = 1
        res.write('<p>Currently on route: /patrick</p>')
        res.end('Welcome to http://localhost:5000/')
      }
})


app.listen(5000);