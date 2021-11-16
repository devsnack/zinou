var express = require('express');
var http = require("http");
var mysql = require('mysql');
var connection = mysql.createConnection({
host : '192.168.100.10',
 user : 'user1',
 password : 'pass1',
 database : 'master'
});
var serveur = http.createServer(function(req, rep) {
connection.query('SELECT * FROM Cours', function(err, resultats)
{
if (err) throw err;
rep.end(JSON.stringify(resultats));
});
});
serveur.listen(3000);