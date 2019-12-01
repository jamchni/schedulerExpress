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
        return res.status(err.code).json(err.msg);
    });
});

router.post('/upsertSchedules', (req, res) => {
    scheduleUtils.upsertSchedules(req.body)
        .then(schedules => {
            return res.status(200).json(schedules);
        }).catch(err => {
        return res.status(err.code).json(err.msg);
    });
});

router.post('/getSchedules', (req, res) => {
    scheduleUtils.getSchedules(req.body)
        .then(result => {
            return res.status(200).json(result);
        }).catch(err => {
        return res.status(err.code).json(err.msg);
    });

});

router.put('/updateSchedules', (req, res) => {

    scheduleUtils.updateSchedules(req.body.filter, req.body.update)
        .then(value => {
            return res.status(200).json(value);
        }).catch(err => {
        return res.status(err.code).json(err.msg);
    });
});

router.delete('/deleteSchedules', (req, res) => {

    scheduleUtils.deleteSchedules(req.body)
        .then(schedule => {
            return res.status(200).json(schedule);
        }).catch(err => {
        return res.status(err.code).json(err.msg);
    });
});

router.get('/getAllSchedules', (req, res) => {
    return scheduleUtils.getAllSchedules()
        .then(doc => {
            return res.status(200).json(doc);
        })
        .catch(err => {
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
