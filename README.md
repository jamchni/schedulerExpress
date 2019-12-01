# Scheduler Express

This repo is used to save, update, delete calendar schedules, working directly with the scheduler react project: https://github.com/jamchni/scheduler

## Terminology

MS = Microservice

CRUD = Create, Read, Update, Delete
## Requirements

* Nodejs

Modules needed are listed in package.json. No additional external dependencies.

## Setup

* clone Repository containing the project `git clone https://github.com/jamchni/schedulerExpress`
* cd project `cd schedulerExpress/src`
* Run `npm install` to install the needed node js packages.
* Setup Environment variables by including a .env file under the src folder


## Sample Environment Variables

DBURL=The database url that we want to store historical data

#### Note: the values of the environment variables are dummy values.

## How to run

Run this command to run the application `npm run dev` to run on a development environment and `npm start` to run on production environment.

## How to test
The service will be exposed via {localhost:3030} and you can use Postman to query it.

###Collection

Schedule = Holds information about the schedule

### Routes

This MS only exposes simple CRUD routes to query and edit the data. There are no other complex exposed methods.

They are available here `http://localhost:3030/schedulerExpress/{ROUTE_NAME}` 

**createSchedules**
```
{ fields:{from schedule collection},,id:{ID},... }
```

**getSchedules**

Retrieves a schedule that matches the passed input.
```
{ fields:{from schedule collection},id:{ID},... }
```

**updateSchedules**

Updates a schedule that matches the passed filter, with the new values in the update property. 
```
{ filter:{id:{ID}},update: {title: {TITLE}}
```

**deleteSchedules**

Deletes a schedule that matches the passed input.
```
{ id:{ID}}
```

**upsertSchedules**
Creates a schedule if one doesn't exist or updates it if it exists.
```
{ filter:{FILTER}, update: {UPDATE}
```
OR 

```
[{ filter:{FILTER}, update: {UPDATE},{ filter:{FILTER}, update: {UPDATE}]
```
