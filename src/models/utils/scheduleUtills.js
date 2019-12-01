'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const Schedule = require('../schedule'),
    _ = require('lodash');


//=============================================================================
/**
 *  Schedule CRUD functions
 */
//=============================================================================


exports.createSchedules = (doc) => {
    if (_.isEmpty(doc)) {
        return Promise.reject({code: 409, msg: "Please add the missing fields"});
    }

    if (_.isArray(doc)) {
        return Schedule.insertMany(doc)
    }
    else {
        const newSchedule = new Schedule(doc);
        return newSchedule.save();
    }
};

exports.upsertSchedules = (docs) => {
    if (_.isEmpty(docs)){
        return Promise.reject({code: 409, msg: "Please add the missing fields"})
    }
    docs = (_.isArray(docs))? docs: [docs];

    return Promise.all(docs.map(doc => {
        if(_.isEmpty(doc.filter) || _.isEmpty(doc.update)){
            return Promise.reject({code: 409, msg: "Please add the missing fields"})
        }
        return Schedule.findOneAndUpdate(doc.filter, doc.update, {upsert: true, runValidators: true, new: true}).exec()
            .catch(e => {
                log.error(`error upserting ${JSON.stringify(doc)} ${e}`);
                return false
            })
    }))
};

exports.getSchedules = (filter) => {

    if (_.isEmpty(filter)) {
        return Promise.reject({code: 409, msg: "Please add the missing fields"});
    }

    return Schedule.find(filter)
        .exec()
        .then(result => {
            if (!_.isEmpty(result)) {
                return result;
            }
            else {
                return false;
            }
        });

};

exports.deleteSchedules = (filter) => {
    if (_.isEmpty(filter)) {
        return Promise.reject({code: 409, msg: "Please add the missing fields"});
    }

    return Schedule.findOneAndRemove(filter)
        .then(result => {
            if (!_.isEmpty(result))
            {
                return result
            }
            else{
                return Promise.reject({code: 409, msg: "Requested resource does not exist"});
            }

        })
        .catch(err => {
            return Promise.reject(err);
        });
};

exports.updateSchedules = (filter, update) => {

    if (_.isEmpty(filter) || _.isEmpty(update)) {
        return Promise.reject({code: 409, msg: "Requested resource does not exist"});
    }

    return Schedule.updateOne(filter, update).exec()
        .then(result => {
            if (result.ok !== 1) {
                return Promise.reject({code: 400, msg: "Bad request, please contact us"});
            }
            else if (result.nModified >= 0) {
                return result;
            }
            else {
                return Promise.reject({code: 409, msg: "There was an unknown error while processing the request"})
            }
        })
        .catch(err => {
            return Promise.reject(err);
        });
};