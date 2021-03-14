# JSON-PARSE

This is a small command line utility. The purpose it to read and write to local json files. Hoping to build out features like filtering and sorting sections of json to be returned back, but just starting.


**Install** 

The install requires dowload of the app and a simple `npm i` from the root dir. From this point the app should be fully funtional.


**Current Features**

Currently, the user must manually enter all commands:

- All commands must begin with `node app.js`, and contain either `--r` to READ or `--w` to WRITE.
- All commands must include `--file=[fileName]`, although no need to specify `.json` file extension.
- If choosing to WRITE, you can also enter the keys and values to write. 
- Keys are identified by `--keys=array,of,keys`. Each key is split by a comma.
- Values are identified by `--values=array,of,values`. Values are also split by commas. Also, the object's length is defined by the number of keys enteres, and the indexes are mapped from keys to values. Keys that have no corresponding values will be entered as `null`



