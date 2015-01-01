/**
 * Example 05 - Import a system with a main method
 * 
 */


// the system as it was exported in example 04
var exportedSystem = {
    "schemas": {
        "Example04Schema": {
            "_name": "Example04Schema",
            "_inherit": ["MonocoComponentSchema"],
            "hello": "method",
            "_id": "Example04Schema"
        },
        "Example04": {
            "_name": "Example04",
            "_schema": "Example04Schema",
            "_inherit": ["MonocoComponent"],
            "hello": {
                "params": [{
                        "name": "name",
                        "type": "string"
                    }],
                "result": "string"
            },
            "_id": "Example04"
        }
    },
    "types": {},
    "behaviors": {
        "1ab8f19f971d7ef": {
            "_id": "1ab8f19f971d7ef",
            "component": "Example04",
            "state": "hello",
            "action": "function (name) {\n    return 'Hello ' + name + '!';\n}",
            "useCoreAPI": false
        },
        "10ece11fca14278": {
            "_id": "10ece11fca14278",
            "component": "1ec8c1262a1e4f4",
            "state": "main",
            "action": "function () {\n    var Example04 = this.require('Example04');\n\n    var example04 = new Example04();\n    var message = example04.hello('world');\n    \n    console.log(message);\n}",
            "useCoreAPI": false
        }
    },
    "components": {
        "Example04": {
            "164d419b211d8e0": {
                "classInfo": "Example04Info",
                "_id": "164d419b211d8e0"
            }
        }
    },
    "name": "example04",
    "version": "0.0.1",
    "description": "",
    "_id": "1ec8c1262a1e4f4"
};

// import the system
var systemId = monoco.require('db').system(exportedSystem);

/* The import returns the id of the imported system. 
 * A system is also a component, so it can be required. Then we call its "main" function to execute the code. 
 */
var system = monoco.require(systemId);
system.main();