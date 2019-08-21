const mongoose = require('./connection.js')

const IssueSchema = mongoose.Schema(
    {
        description: String,
        createdAt: Date,
        status: String,
        priority: String
    })

const IssueCollection = mongoose.model('Issue', IssueSchema)

const createIssue = () => {
    return IssueCollection.create({
        description: "see the docs",
        createdAt: new Date(),
        status: "active",
        priority: "high",
    })
}

const getIssues = () => { return IssueCollection.find() }

const getIssue = (id) => { return IssueCollection.findById(id) }

const addIssue = (issueNew) => { return IssueCollection.insertMany([issueNew]) }

const updateIssue = (id, issue) => {
    return IssueCollection.findByIdAndUpdate( id, issue)
}

const deleteIssue = (id) => { return IssueCollection.findByIdAndDelete(id) }

module.exports = {
    createIssue,
    getIssues,
    getIssue,
    addIssue,
    updateIssue,
    deleteIssue
}

