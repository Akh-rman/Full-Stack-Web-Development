
var express = require('express');
var bodyParser = require('body-parser');
var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter
    .all('/', function(req,res,next) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          next();
    })

    .get('/', function(req,res,next){
            res.end('Will send all the dishes to you!');
    })

    .post('/', function(req, res, next){
         res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete('/', function(req, res, next){
            res.end('Deleting all dishes');
    })

    .get('/:Id', function(req,res,next){
            res.end('Will send details of the dish: ' + req.params.Id +' to you!');
    })

    .put('/:Id', function(req, res, next){
        res.write('Updating the dish: ' + req.params.Id + '\n');
        res.end('Will update the dish: ' + req.body.name +
                ' with details: ' + req.body.description);
    })

    .delete('/:Id', function(req, res, next){
            res.end('Deleting dish: ' + req.params.Id);
    });

module.exports = dishRouter;