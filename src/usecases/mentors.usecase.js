const Mentors = require("../models/mentors.model")

async function create(MentorData) {
    try {
        const newMentor = await Mentors.create(MentorData)
        return newMentor
    } catch (error) {
        throw new Error(`Error creating mentor: ${error.message}`)
    }
}

async function getAll() {
    try {
        const allMentors = await Mentors.find()
        return allMentors
    } catch (error) {
        throw new Error(`Error getting all mentors: ${error.message}`)
    }
}

async function getById(id) {
    try {
        const mentor = await Mentors.findById(id)
        return mentor
    } catch (error) {
        throw new Error(`Error getting mentor by id: ${error.message}`)
    }
}

async function deleteById(id) {
    try {
        const mentorDeleted = await Mentors.findByIdAndDelete(id)
        return mentorDeleted
    } catch (error) {
        throw new Error(`Error deleting mentor by id: ${error.message}`)
    }
}

async function updateById(id, newMentorData) {
    try {
        const mentorUpdated = await Mentors.findByIdAndUpdate(id, newMentorData, { new: true })
        return mentorUpdated
    } catch (error) {
        throw new Error(`Error updating mentor by id: ${error.message}`)
    }
}

module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById
}
