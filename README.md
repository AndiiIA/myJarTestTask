```
   __  _____  __   _____   ___    ____________________  _________   ______ __
  /  |/  /\ \/ /_ / / _ | / _ \  /_  __/ __/ __/_  __/ /_  __/ _ | / __/ //_/
 / /|_/ /  \  / // / __ |/ , _/   / / / _/_\ \  / /     / / / __ |_\ \/ ,<   
/_/  /_/   /_/\___/_/ |_/_/|_|   /_/ /___/___/ /_/     /_/ /_/ |_/___/_/|_|  
```

System requirements
------------------

* Node.js v10 LTS
* Postgres >10

Quick Start
------------------

```
$ yarn install
```
* Update postgres Connection string in config (local.json)


Starting service
------------------

* Run `yarn start` to start the service.
* Run `yarn watch` to start the service with watching enabled (PM2).

Acceptance Criteria
--------------------
1. REST API endpoint for creating a client object. [Done]
2. REST API endpoint for reading client object. [Done]
3. REST API endpoint for reading all clients. [Done]
4. REST API endpoint for updating client object. [TODO]
5. REST API endpoint for deleting a client object. [Done]