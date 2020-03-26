var fs = require('fs');
var utility = require('util');
var unuiqId = require('uuid/v1');
var readFile = utility.promisify(fs.readFile);
var writeFile = utility.promisify(fs.writeFile);

class DB{
    read(){
        return readFile ('db/db.json','utf8')
    }
    write(note){
        return writeFile ('db/db.json',JSON.stringify(note))
    }
    getNotes () {
        return this.read().then(notes => {
            let parsedNotes:
            try { parsedNotes =[].concat(JSON.parse(notes)) 

            }
        })

    }
}