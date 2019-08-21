const express = require ('express')
const issuesApi = require ('../models/issue.js')
const issueRouter = express.Router()


issueRouter.get('/', function(req, res) {
    issuesApi.getIssues()
      .then(issues => {
        res.render('allIssues', {issues})
        
      })
  })


issueRouter.get('/new', function(req, res) {
      res.render('createIssue')
})
  
issueRouter.get('/:issueId', function(req,res) {
    issuesApi.getIssue(req.params.issueId).then(issue => {
        res.render('singleIssue', {issue})
    })
})

issueRouter.get('/:issueId/edit', function(req,res){
  issuesApi.getIssue(req.params.issueId)
  .then(issue => {
      res.render('editIssueForm', {issue})
    })
})


  issueRouter.post('/', function(req, res){
    issuesApi.addIssue(req.body)
      .then((addIssue) => {
        res.redirect('/issues/')
      })
  })

  issueRouter.put('/:issueId', function(req,res){
      console.log('req.params.issueId', req.params.issueId)
      console.log('req.body', req.body)
    issuesApi.updateIssue(req.params.issueId, req.body)
      .then(() => {
        res.redirect('/issues/')
      })
  })

  issueRouter.delete('/:issueId', function(req,res){
    issuesApi.deleteIssue(req.params.issueId)
      .then((deletedIssue) => {
        res.redirect('/issues/')
      })
  })
  
  module.exports = {
      issueRouter
  }
