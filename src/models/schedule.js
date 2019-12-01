'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const mongoose = require('mongoose');
//=============================================================================
/**
 * Schedule Schema
 */
//=============================================================================
const ScheduleSchema = mongoose.Schema({
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        startDate: {
            type: String,
            required: true
        },
        endDate: {
            type: String,
            required: true
        },
        allDay: {
            type: Boolean
        },
        notes: {
            type: String
        },
        location: {
            type: String,
            required: true
        },
        rRule: {
            type: String
        },
    },
    {timestamps: true});

ScheduleSchema.set('toJSON', {virtuals: true, getters: true});
ScheduleSchema.set('toObject', {virtuals: true, getters: true});

ScheduleSchema.index({shortUrl: 1});
//=============================================================================
/**
 * Compile to Model
 */
//=============================================================================
const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);
//=============================================================================
/**
 * Export SchedulesModel
 */
//=============================================================================
module.exports = ScheduleModel;
//=============================================================================
