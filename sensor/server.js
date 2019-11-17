const express = require('express');
const parser = require('body-parser');
const path = require('path');
const 51d = require('fiftyonedegreescore');

const route = require('express').Router();

const 51config = {
  'dataFile' : require('fiftyonedegreeslitetrie'),
  'properties' : 'IsMobile',
  'stronglyTyped' : true
}

const 51provider = new 51d.provider(51config);


route.all('*', function(request,response){ 
  // 51d checks device
  // redirects to proper app
  pass
});

