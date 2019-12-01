'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const
    express = require('express'),
    scheduleUtils = require('../models/utils/scheduleUtills');

//=============================================================================
/**
 * Router instance
 */
//=============================================================================
const router = express.Router();

//=============================================================================
/**
 * Routes
 */
//=============================================================================
router.get('/test', (req, res) => {
  return res.json("Ok");
});

router.post('/createSchedules', (req, res) => {
    scheduleUtils.createSchedules(req.body)
        .then(schedules => {
            return res.status(200).json(schedules);
        }).catch(err => {
        log.error('/createSchedules err ' + JSON.stringify(err));
        return res.status(err.code).json(err.msg);
    });
});

router.post('/upsertSchedules', (req, res) => {
    scheduleUtils.upsertSchedules(req.body)
        .then(schedules => {
            return res.status(200).json(schedules);
        }).catch(err => {
        log.error('/upsertSchedules err ' + JSON.stringify(err));
        return res.status(err.code).json(err.msg);
    });
});

router.post('/getSchedules', (req, res) => {
    scheduleUtils.getSchedules(req.body)
        .then(result => {
            return res.status(200).json(result);
        }).catch(err => {
        log.error('/getSchedules err ' + JSON.stringify(err));
        return res.status(err.code).json(err.msg);
    });

});

router.put('/updateSchedules', (req, res) => {

    scheduleUtils.updateSchedules(req.body.filter, req.body.update)
        .then(value => {
            return res.status(200).json(value);
        }).catch(err => {
        log.error('/updateSchedules err ' + JSON.stringify(err));
        return res.status(err.code).json(err.msg);
    });
});

router.delete('/deletePerson', (req, res) => {

    scheduleUtils.deletePerson(req.body)
        .then(person => {
            return res.status(200).json(person);
        }).catch(err => {
        let error = errormessages.processError(err);
        log.error('/deleteSchedule err ' + JSON.stringify(error));
        return res.status(err.code).json(err.msg);
    });
});

//=============================================================================
/**
 * Export Router
 */
//=============================================================================
module.exports = router;
//=============================================================================
