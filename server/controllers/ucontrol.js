var app = require('./../server');
var db = app.get('db');


module.exports = {
  
    // ============================    USERS      ==============================  
    
  userGetter: function(req, res, next){
    db.run("select * from users order by id", function (err, response){
    res.status(200).send(response);
    });
  },
  
  userPoster: function(req, res, next) {
    db.users.insert({id:req.body.id,username:req.body.username,password:req.body.password,employerid:req.body.employerid,employeeid:req.body.employeeid,admin:req.body.admin,email:req.body.email}, function(err, response){
      console.log('userPoster' + err);
      res.status(200).send(response);
    })
  },
  
  userPutter: function(req, res, next) {
    console.log("req.body", req.body);
    db.userPut([req.body.id, req.body.username, req.body.password, req.body.employerid, req.body.employeeid, req.body.admin, req.body.email], function(err, response){
      console.log('userPutter' + err);
      res.status(200).send(response);
    })
  },
  
  userDeleter: function(req, res, next) {
    console.log(req.body.employeeid);
      db.deleteUser([req.body.employeeid], function(err, response){
        console.log('userDeleter' + err);
      res.status(200).send(response);
    })
  },
  
    // ============================    STATUS      ==============================
    
  statusGetter: function(req, res, next){
    db.run("select * from status order by id", function (err, response){
    res.status(200).send(response);
    });

  },
  
  statusPoster: function(req, res, next) {
    db.status.insert({id:req.body.id,employerid:req.body.employerid,date:req.body.date,published:req.body.published,edited:req.body.edited}, function(err, response){
    console.log('Status Poster Error: ' + err);
      res.status(200).send(response);
    })
  },
  
  statusPutter: function(req, res, next) {
    db.status.update([req.body.id,req.body.employerid,req.body.date,req.body.published,req.body.edited], function(err, response){
      console.log('status Putter Error : ' + err);
      res.status(200).send(response);
    })
  },
  
  statusDeleter: function(req, res, next) {
    console.log(req.body.employeeid);
      db.deleteStatus([req.body.date, req.body.employerid], function(err, response){
        console.log('statusDeleter' + err);
        res.status(200).send(response);
    })
  },
  
  // ============================    EMPLOYERS      ==============================

  employersGetter: function(req, res, next){
    db.run("select * from employers order by id", function (err, response){
    res.status(200).send(response);
    });

  },
  
  employersPoster: function(req, res, next) {
    db.employers.insert({id:req.body.id,employername:req.body.employername}, function(err, response){
      console.log('employersPoster' + err);
      res.status(200).send(response);
    })
  },
  
  employersPutter: function(req, res, next) {
    db.employerPut([req.body.id, req.body.employername], function(err, response){
      console.log('employersPutter' + err);
      res.status(200).send(response);
    })
  },
  
  employersDeleter: function(req, res, next) {
      db.deleteEmployers([req.body.id], function(err, response){
        console.log('employersDeleter' + err);
      res.status(200).send(response);
    })
  },
  
  // ============================    EMPLOYEES      ==============================  
  
  employeesGetter: function(req, res, next){
    db.run("select * from employees order by id", function (err, response){
    res.status(200).send(response);
    });

  },
  
  employeesPoster: function(req, res, next) {
    db.employees.insert({id:req.body.id,employerid:req.body.employerid,firstname:req.body.firstname,lastname:req.body.lastname,minitial:req.body.minitial,weeklymax: req.body.weeklymax, weeklymin: req.body.weeklymin}, function(err, response){
      console.log('employeesPoster' + err);
      res.status(200).send(response);
    })
  },
  
  employeesPutter: function(req, res, next) {
      console.log("req.body", req.body);
    console.log("req.body=",req.body);
    db.employeePut([req.body.id,req.body.employerid,req.body.firstname,req.body.lastname,req.body.minitial,req.body.weeklymax, req.body.weeklymin], function(err, response){
      console.log('employeesPutter ' + err);
      res.status(200).send(response);
    })
  },
  
  employeesDeleter: function(req, res, next) {
    console.log(req.body.id);
      db.deleteEmployees([req.body.id], function(err, response){
        console.log('employeesDeleter' + err);
      res.status(200).send(response);
    })
  },
  // ============================    AVAILIBITY      ==============================  
  
  availabilityGetter: function(req, res, next){
    db.run("select * from availability order by id", function (err, response){
    res.status(200).send(response);
    });
  },
  
  availabilityPoster: function(req, res, next) {
    db.availability.insert({id:req.body.id,employeeid:req.body.employeeid,overtime:req.body.overtime,mstart: req.body.mstart,mstop: req.body.mstop,tustart: req.body.tustart,tustop: req.body.tustop,wstart: req.body.wstart,wstop: req.body.wstop,thstart: req.body.thstart,
      thstop: req.body.thstop,fstart: req.body.fstart,fstop: req.body.fstop, ststart: req.body.ststart,ststop: req.body.ststop,sdstart: req.body.sdstart,sdstop: req.body.sdstop}, function(err, response){
      console.log('availabilityPoster' + err);
      res.status(200).send(response);
    }) 
  },
  
  availabilityPutter: function(req, res, next) {
      console.log("req.body", req.body);
    db.availabilityput([req.body.id, req.body.employeeid, req.body.overtime, req.body.mstart, req.body.mstop, req.body.tustart, req.body.tustop, req.body.wstart, req.body.wstop, req.body.thstart,
       req.body.thstop, req.body.fstart, req.body.fstop, req.body.ststart, req.body.ststop, req.body.sdstart, req.body.sdstop], function(err, response){
      console.log("availabilityPutter" + err);
      res.status(200).send(response);
    })
  },
  
  availabilityDeleter: function(req, res, next) {
    console.log(req.body.employeeid);
      db.deleteAvailability([req.body.employeeid], function(err, response){
        console.log('availabilityDeleter' + err);
      res.status(200).send(response);
    })
  },
    // ============================    ASSIGNED      ==============================  
  
  assignedGetter: function(req, res, next){
    db.run("select * from assigned order by id", function (err, response){
    res.status(200).send(response);
    });

  },
  assignedPoster: function(req, res, next) {
    db.assigned.insert({id:req.body.id, employerid:req.body.employerid, employeeid:req.body.employeeid, date:req.body.date, start:req.body.start, stop:req.body.stop}, function(err, response){
      console.log('assigned Post Error: ' + err);
      res.status(200).send(response);
    })
  },
  
  assignedPutter: function(req, res, next) {
    console.log("logbomb = ", req.body.id, req.body.employerid, req.body.employeeid, req.body.date, req.body.start, req.body.stop);
    db.assigned.update({id:req.body.id, employerid:req.body.employerid, employeeid:req.body.employeeid, date:req.body.date, start:req.body.start, stop:req.body.stop}, function(err, response){
      console.log('Assigned Put Error: ' + err);
      res.status(200).send(response);
    })
  },
  
  assignedDeleter: function(req, res, next) {
    console.log(req.body.employeeid);
      db.deleteAssigned([req.body.employeeid, req.body.date], function(err, response){
        console.log('ERRRRROORRR' + err);
      res.status(200).send(response);
    })
  }
  
  
  
  
  
  
  
  
};