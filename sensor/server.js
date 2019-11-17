const express = require('express');
const parser = require('body-parser');
const path = require('path');
const D = require('fiftyonedegreescore');
const userAgent = require('express-useragent');
const route = require('express').Router();

const app = express();

const{
  env: {PORT:port = 5000},
} = process;

const config = {
  'dataFile' : 'data/51Degrees-LiteV3.4.trie', 
  'properties' : 'IsMobile',
  'stronglyTyped' : true
}

const provider = new D.provider(config);


route.all('*', function(request,response){ 
  const source = request.headers['user-agent'];
  const agent = userAgent.parse(source);
  
  const match = provider.getMatch(agent);
  console.log('here is the agent', agent); 
  if(agent .isModile){
    console.log('mobile');
    response.redirect('http://localhost:5002/');
  }else{
    console.log('not mobile');
    response.redirect('http://localhost:5001/');
  }
  // 51d checks device
  // redirects to proper app
});

app.use(route);

app.listen( port, ()=>{console.log(`listening on port ${port}`)});


