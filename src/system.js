/*
 * System Runtime
 *
 * https://designfirst.io/systemruntime/
 *
 * Copyright 2022 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* !! This file has been generated, do not edit it !! */

/**
 * @module system
 * @description This module contains System Runtime core system.
 */

/* Public properties */

/**
 * System Runtime core system
 * @property {Object} system
 */
export default {
  system: {
    name: 'system-runtime',
    master: false,
    version: '6.0.0-beta.4',
    description: 'System Runtime',
    schemas: {
      '1ac07185641fa9f': {
        _name: '_Behavior',
        _inherit: ['_Component'],
        _core: true,
        core: 'property',
        component: 'property',
        action: 'property',
        state: 'property',
        useCoreAPI: 'property',
        context: 'property',
        _id: '1ac07185641fa9f',
      },
      '104ad1f48518376': {
        _id: '104ad1f48518376',
        _name: '_Channel',
        _inherit: ['_Component'],
        _core: true,
        send: 'event',
        $systemInstalled: 'event',
        $systemResolved: 'event',
        $systemStarted: 'event',
        $systemStopped: 'event',
        $systemUninstalled: 'event',
      },
      '111df11e2b19fde': {
        _id: '111df11e2b19fde',
        _name: '_Component',
        _inherit: [],
        _core: true,
        on: 'method',
        off: 'method',
        require: 'method',
        destroy: 'method',
        init: 'method',
        error: 'event',
      },
      '1723516a30132ac': {
        _name: '_Database',
        _inherit: ['_Component'],
        _core: true,
        collections: 'method',
        insert: 'event',
        update: 'event',
        remove: 'event',
        _id: '1723516a30132ac',
      },
      '1268f1dddd1fea7': {
        _name: '_Logger',
        _core: true,
        level: 'property',
        debug: 'method',
        info: 'method',
        warn: 'method',
        error: 'method',
        _id: '1268f1dddd1fea7',
      },
      '14caa1c46414ee1': {
        _name: '_Message',
        _inherit: ['_Component'],
        _core: true,
        event: 'property',
        from: 'property',
        data: 'property',
        _id: '14caa1c46414ee1',
      },
      '193f1166eb16609': {
        _name: '_Metamodel',
        _inherit: ['_Component'],
        _core: true,
        schema: 'method',
        model: 'method',
        type: 'method',
        create: 'method',
        _id: '193f1166eb16609',
      },
      '157931f7a31b61d': {
        _id: '157931f7a31b61d',
        _name: '_OSGi',
        _inherit: ['_Component'],
        _core: true,
        install: 'method',
        uninstall: 'method',
        start: 'method',
        stop: 'method',
        status: 'method',
        bundle: 'method',
      },
      '12e211d4cd120a6': {
        _id: '12e211d4cd120a6',
        _name: '_Runtime',
        _inherit: ['_OSGi'],
        _core: true,
        version: 'property',
        system: 'method',
        message: 'method',
        ready: 'event',
      },
      '1cb761fa4510dca': {
        _id: '1cb761fa4510dca',
        _name: '_System',
        _inherit: ['_SystemOSGi'],
        _core: true,
        name: 'property',
        master: 'property',
        version: 'property',
        description: 'property',
        schemas: 'property',
        models: 'property',
        behaviors: 'property',
        types: 'property',
        components: 'property',
      },
      '145fe10c7514298': {
        _id: '145fe10c7514298',
        _name: '_SystemOSGi',
        _inherit: ['_Component'],
        _core: true,
        state: 'property',
        location: 'property',
        start: 'method',
        stop: 'method',
      },
      'e018483e-4254-455c-83e9-99bb8dc3b233': {
        _id: 'e018483e-4254-455c-83e9-99bb8dc3b233',
        _name: '_History',
        _core: true,
        _inherit: ['_Component'],
        back: 'method',
        forward: 'method',
        from: 'method',
        dump: 'method',
        get: 'method',
        load: 'method',
        start: 'method',
        stop: 'method',
        clear: 'method',
      },
    },
    models: {
      '166971fd9d107fd': {
        _name: '_Behavior',
        _core: true,
        context: {
          type: 'any',
          readOnly: false,
          mandatory: false,
          default: null,
        },
        core: {
          type: 'boolean',
          readOnly: false,
          mandatory: false,
          default: false,
        },
        useCoreAPI: {
          type: 'any',
          readOnly: false,
          mandatory: false,
          default: false,
        },
        component: {
          type: 'string',
          readOnly: false,
          mandatory: true,
          default: '',
        },
        action: {
          type: 'javascript',
          readOnly: false,
          mandatory: true,
          default: '',
        },
        state: {
          type: 'string',
          readOnly: false,
          mandatory: true,
          default: '',
        },
        _id: '166971fd9d107fd',
      },
      '135c71078810af2': {
        _id: '135c71078810af2',
        _name: '_Channel',
        _core: true,
        send: { params: [{ name: 'message', type: 'message' }] },
        $systemInstalled: {
          params: [
            { name: 'id', type: 'string', mandatory: true, default: '' },
          ],
        },
        $systemResolved: {
          params: [
            { name: 'id', type: 'string', mandatory: true, default: '' },
          ],
        },
        $systemUninstalled: {
          params: [
            { name: 'id', type: 'string', mandatory: true, default: '' },
          ],
        },
        $systemStarted: {
          params: [
            { name: 'id', type: 'string', mandatory: true, default: '' },
          ],
        },
        $systemStopped: {
          params: [
            { name: 'id', type: 'string', mandatory: true, default: '' },
          ],
        },
      },
      '123751cb591de26': {
        _id: '123751cb591de26',
        _name: '_Component',
        _core: true,
        on: {
          params: [
            { name: 'state', type: 'string' },
            { name: 'action', type: 'function' },
            {
              name: 'useCoreAPI',
              type: 'any',
              mandatory: false,
              default: false,
            },
            {
              name: 'isCore',
              type: 'boolean',
              mandatory: false,
              default: false,
            },
          ],
        },
        off: {
          params: [
            { name: 'state', type: 'string', mandatory: false },
            { name: 'behaviorId', type: 'string', mandatory: false },
          ],
        },
        require: { params: [{ name: 'id', type: 'string' }] },
        destroy: { params: [] },
        init: { params: [{ name: 'document', type: 'object' }] },
        error: { params: [{ name: 'e', type: 'errorInfo' }] },
      },
      '18a51169d7112d4': {
        _name: '_Database',
        _core: true,
        collections: { result: 'object' },
        insert: { params: [{ name: 'event', type: 'dbInsertEvent' }] },
        update: { params: [{ name: 'event', type: 'dbUpdateEvent' }] },
        remove: { params: [{ name: 'event', type: 'dbRemoveEvent' }] },
        _id: '18a51169d7112d4',
      },
      '16b9d1ac2216ffe': {
        _id: '16b9d1ac2216ffe',
        _name: '_Logger',
        _core: true,
        level: {
          type: 'log',
          readOnly: false,
          mandatory: false,
          default: 'warn',
        },
        debug: { params: [{ name: 'message', type: 'any' }] },
        info: { params: [{ name: 'message', type: 'any' }] },
        warn: { params: [{ name: 'message', type: 'any' }] },
        error: { params: [{ name: 'message', type: 'any' }] },
      },
      '1d9b6139411aa91': {
        _name: '_Message',
        _core: true,
        event: {
          type: 'string',
          readOnly: false,
          mandatory: true,
          default: '',
        },
        from: {
          type: 'string',
          readOnly: false,
          mandatory: true,
          default: '',
        },
        data: {
          type: 'array',
          readOnly: false,
          mandatory: true,
          default: [],
        },
        _id: '1d9b6139411aa91',
      },
      '1628c13c22152e6': {
        _name: '_Metamodel',
        _core: true,
        schema: {
          params: [
            { name: 'name', type: 'any', default: '', mandatory: false },
            {
              name: 'schema',
              type: 'object',
              default: {},
              mandatory: false,
            },
          ],
          result: 'any',
        },
        model: {
          params: [
            { name: 'name', type: 'any', default: '', mandatory: false },
            {
              name: 'model',
              type: 'object',
              default: {},
              mandatory: false,
            },
          ],
          result: 'any',
        },
        type: {
          params: [
            { name: 'name', type: 'any', default: '', mandatory: false },
            {
              name: 'type',
              type: 'object',
              default: {},
              mandatory: false,
            },
          ],
          result: 'any',
        },
        create: { params: [] },
        _id: '1628c13c22152e6',
      },
      '100b91ed2211b15': {
        _id: '100b91ed2211b15',
        _name: '_OSGi',
        install: {
          params: [
            { name: 'url', type: 'any', mandatory: true, default: '' },
            {
              name: 'async',
              type: 'boolean',
              mandatory: false,
              default: true,
            },
          ],
          result: 'string',
        },
        uninstall: {
          params: [
            { name: 'id', type: 'string', mandatory: true, default: '' },
          ],
        },
        start: {
          params: [
            { name: 'id', type: 'string', mandatory: true, default: '' },
          ],
        },
        stop: {
          params: [
            { name: 'id', type: 'string', mandatory: true, default: '' },
          ],
        },
        status: { result: 'object' },
        _core: true,
        bundle: { result: 'string' },
      },
      '14c7c105b31a160': {
        _id: '14c7c105b31a160',
        _name: '_Runtime',
        _core: true,
        version: {
          type: 'string',
          readOnly: true,
          mandatory: true,
          default: '6.0.0-beta.4',
        },
        system: {
          params: [{ name: 'params', type: 'any', mandatory: false }],
          result: 'object',
        },
        message: {
          params: [{ name: 'msg', type: 'message', mandatory: true }],
        },
        ready: {},
      },
      '170521b88614387': {
        _name: '_System',
        _core: true,
        name: {
          type: 'string',
          readOnly: false,
          mandatory: true,
          default: '',
        },
        master: {
          type: 'boolean',
          readOnly: false,
          mandatory: false,
          default: false,
        },
        version: {
          type: 'string',
          readOnly: false,
          mandatory: false,
          default: '0.0.1',
        },
        description: {
          type: 'string',
          readOnly: false,
          mandatory: false,
          default: '',
        },
        schemas: {
          type: 'object',
          readOnly: false,
          mandatory: false,
          default: {},
        },
        models: {
          type: 'object',
          readOnly: false,
          mandatory: false,
          default: {},
        },
        behaviors: {
          type: 'object',
          readOnly: false,
          mandatory: false,
          default: {},
        },
        types: {
          type: 'object',
          readOnly: false,
          mandatory: false,
          default: {},
        },
        components: {
          type: 'object',
          readOnly: false,
          mandatory: false,
          default: {},
        },
        _id: '170521b88614387',
      },
      '1b2811b092143f5': {
        _id: '1b2811b092143f5',
        _name: '_SystemOSGi',
        start: {},
        stop: {},
        _core: true,
        state: {
          type: 'string',
          readOnly: false,
          mandatory: false,
          default: 'none',
        },
        location: {
          type: 'string',
          readOnly: false,
          mandatory: false,
          default: '',
        },
      },
      'bd8d7e02-cd1f-4e4e-857f-077d6425cc1a': {
        _id: 'bd8d7e02-cd1f-4e4e-857f-077d6425cc1a',
        _name: '_History',
        _description: '',
        back: { result: 'number' },
        forward: { result: 'number' },
        dump: { result: 'string' },
        _core: true,
        from: {
          params: [
            {
              name: 'index',
              type: 'number',
              mandatory: true,
              default: -1,
            },
          ],
          result: 'any',
        },
        get: {
          params: [
            {
              name: 'index',
              type: 'number',
              mandatory: true,
              default: -1,
            },
          ],
          result: 'object',
        },
        load: {
          params: [{ name: 'dump', type: 'any', mandatory: true, default: '' }],
          result: 'boolean',
        },
        start: { result: 'any' },
        stop: { result: 'any' },
        clear: { result: 'any' },
      },
    },
    behaviors: {
      '12e491859c13918': {
        _id: '12e491859c13918',
        component: '_Channel',
        state: '$systemStarted',
        action:
          "function $systemStarted(id) { \n  let systems = null;\n    \n  if (id !== 'e89c617b6b15d24') {\n    if (typeof document !== 'undefined') {\n      systems = document.querySelectorAll('link[rel=system]');\n         \n      if ($state.get('runtime') && $state.get('runtime').state === 'ready') {    \n      } else {\n        if (systems.length + 1 === $db.collections._System.count()) {\n          $component.get('runtime').ready();\n        }\n      }\n    }\n  }\n}",
        useCoreAPI: true,
        core: true,
      },
      '1e9021bd4e1bc6e': {
        _id: '1e9021bd4e1bc6e',
        component: '_Channel',
        state: '$systemInstalled',
        action:
          "function $systemInstalled(id) {\n  let systems = null,\n    dependencies = [],\n    master = [],\n    canStart = true;\n\n  if (id !== 'e89c617b6b15d24') {\n    // if all systems are installed\n    systems = $db.collections._System.find({});\n\n    systems.forEach(function (system) {\n      let sys = this.require(system._id);\n      if (sys && sys.state && sys.state() === 'none') {\n        canStart = false;\n      }\n    }.bind(this));\n\n    // start all the systems\n    if (canStart) {\n      dependencies = $db.collections._System.find({\n        'master': false\n      });\n\n      dependencies.forEach(function (dep) {\n        let system = this.require(dep._id);\n        channel = this.require('channel');\n\n        if (system.state() === 'resolved') {\n          system.state('starting');\n          system.start();\n          channel.$systemStarted(dep._id);\n          system.state('active');\n        }\n      }.bind(this));\n\n      master = $db.collections._System.find({\n        'master': true\n      });\n\n      master.forEach(function (dep) {\n        let system = this.require(dep._id);\n        channel = this.require('channel');\n\n        if (system && system.state && system.state() === 'resolved') {\n          system.state('starting');\n          system.start();\n          channel.$systemStarted(dep._id);\n          system.state('active');\n        }\n      }.bind(this));\n    }\n  }\n}",
        useCoreAPI: true,
        core: true,
      },
      '1ba721201114b6b': {
        _id: '1ba721201114b6b',
        component: '_Component',
        state: 'destroy',
        action: 'function destroy() {\n  $component.destroy(this.id());\n}',
        core: true,
        useCoreAPI: true,
      },
      '15486186f41a48c': {
        _id: '15486186f41a48c',
        component: '_Component',
        state: 'off',
        action:
          'function off(state, behaviorId) {\n  let args = [],\n    i = 0,\n    numInjectedParams = 9,\n    length = arguments.length;\n\n  if ($helper.isOnNode()) {\n    numInjectedParams = numInjectedParams +1;\n  }\n\n  for (i = 0; i < length - numInjectedParams; i++) {\n    args.push(arguments[i]);\n  }\n\n  if ($workflow.checkInput({\n    "component": this,\n    "methodName": "off",\n    "args": args\n  })) {\n\n    if (state || behaviorId) {\n      if ($metamodel.isValidState(state, this.constructor.name)) {\n        $behavior.remove({\n          "behaviorId": behaviorId,\n          "componentId": this.id(),\n          "state": state\n        });\n      } else {\n        this.require(\'logger\').warn("invoke \\\'off\\\' method of component \'" + this.id() + "\' with an invalid state \'" + state + "\'");\n      }\n    } else {\n      $behavior.remove({\n        "componentId": this.id()\n      });\n    }\n  }\n}',
        core: true,
        useCoreAPI: true,
      },
      '1da0a17878104c3': {
        _id: '1da0a17878104c3',
        component: '_Component',
        state: 'require',
        action: 'function require(id) {\n  return $component.get(id);\n}',
        core: true,
        useCoreAPI: true,
      },
      '1a5111d17a1800c': {
        _id: '1a5111d17a1800c',
        component: '_Database',
        state: 'collections',
        action:
          "function collections() {\n  let result = {},\n    collectionName = '';\n\n  for (collectionName in $db.store) {\n    if ($db.store.hasOwnProperty(collectionName)) {\n      result[collectionName] = $db.collections[collectionName];\n    }\n  }\n  return result;\n}",
        core: true,
        useCoreAPI: true,
      },
      '1d993108fa18ef2': {
        _id: '1d993108fa18ef2',
        component: '_Logger',
        state: 'debug',
        action:
          "function debug(message) {\n  if (this.level() === 'debug') {\n    console.log('runtime: ' + message);\n  }\n}",
        core: true,
      },
      '1a37a188e11fe73': {
        _id: '1a37a188e11fe73',
        component: '_Logger',
        state: 'error',
        action:
          "function error(message) {\n  if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug' || this.level() === 'error') {\n    console.error('runtime: ' + message);\n  }\n}",
        core: true,
      },
      '1edd21e12a16534': {
        _id: '1edd21e12a16534',
        component: '_Logger',
        state: 'info',
        action:
          "function info(message) {\n  if (this.level() === 'info' || this.level() === 'debug') {\n    console.info('runtime: ' + message);\n  }\n}",
        core: true,
      },
      '141f2143d3122a4': {
        _id: '141f2143d3122a4',
        component: '_Logger',
        state: 'level',
        action: 'function level(val) {\n  $log.level(val);\n}',
        core: true,
        useCoreAPI: true,
      },
      '192401bab21304e': {
        _id: '192401bab21304e',
        component: '_Logger',
        state: 'warn',
        action:
          "function warn(message) {\n  if (this.level() === 'info' || this.level() === 'warn' || this.level() === 'debug') {\n    console.warn('runtime: ' + message);\n  }\n}",
        core: true,
      },
      '11fc715e2f1a31e': {
        _id: '11fc715e2f1a31e',
        component: '_Metamodel',
        state: 'create',
        action: 'function create() {\n  $metamodel.create();\n}',
        core: true,
        useCoreAPI: true,
      },
      '1232f1f107142cf': {
        _id: '1232f1f107142cf',
        component: '_Metamodel',
        state: 'model',
        action:
          'function model(name, model) {\n  return $metamodel.model(name, model);\n}',
        core: true,
        useCoreAPI: true,
      },
      '1365412f69153d2': {
        _id: '1365412f69153d2',
        component: '_Metamodel',
        state: 'schema',
        action:
          'function schema(name, schema) {\n  return $metamodel.schema(name, schema);\n}',
        core: true,
        useCoreAPI: true,
      },
      '194db147fe161a2': {
        _id: '194db147fe161a2',
        component: '_Metamodel',
        state: 'type',
        action:
          'function type(name, type) {\n  return $metamodel.type(name, type);\n}',
        core: true,
        useCoreAPI: true,
      },
      '1ef951f1411b895': {
        _id: '1ef951f1411b895',
        component: '_OSGi',
        state: 'install',
        action:
          "function install(url, async) {\n  let importedSystem = null,\n    system = {},\n    systemId = '',\n    callbackLoad = null,\n    xhr = null,\n    result = '',\n    channel = $component.get('channel');\n\n  if (typeof url === 'object') {\n    importedSystem = url;\n  } else {\n    if (url.indexOf('{') === 0) {\n      importedSystem = JSON.parse(url);\n    }\n  }\n\n  if (importedSystem) {\n    systemId = $db.importSystem(importedSystem);\n    if (systemId) {\n      system = this.require(systemId);\n\n      if (typeof url === 'string') {\n        system.location(url);\n      }\n      system.state('installed');\n      channel.$systemInstalled(systemId);\n      system.state('resolved');\n      channel.$systemResolved(systemId);\n\n      result = systemId;\n    }\n  } else {\n    xhr = new XMLHttpRequest();\n    callbackLoad = function callbackLoad(system, url) {\n      let sysId = $db.importSystem(system),\n        sys = $component.get(sysId),\n        channel = $component.get('channel');\n\n      if (typeof url === 'string') {\n        sys.location(url);\n      }\n      sys.state('installed');\n      channel.$systemInstalled(sysId);\n      sys.state('resolved');\n      channel.$systemResolved(sysId);\n\n      result = sysId;\n    };\n\n    if (async) {\n      xhr.open('GET', url, true);\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n          if (xhr.status === 200 || xhr.status === 0) {\n            if (xhr.response !== '') {\n              callbackLoad(JSON.parse(xhr.response), url);\n            }\n          }\n        }\n      };\n      xhr.send(null);\n    } else {\n      xhr.open('GET', url, false);\n      xhr.send(null);\n      if (xhr.status === 200 || xhr.status === 0) {\n        callbackLoad(JSON.parse(xhr.response), url);\n      }\n    }\n  }\n  return result;\n}",
        useCoreAPI: true,
        core: true,
      },
      '14c1517b711cb78': {
        _id: '14c1517b711cb78',
        component: '_OSGi',
        state: 'uninstall',
        action:
          "function uninstall(id) {\n  let search = {},\n    system = null,\n    behaviorId = '',\n    collection = '',\n    componentId = '',\n    length = 0,\n    i = 0,\n    coreComponents = ['admin', 'channel', 'db', 'logger', 'metamodel', 'runtime'];\n\n  search = $db.collections._System.find({\n    '_id': id\n  });\n\n  if (search.length) {\n    system = search[0];\n    // remove behaviors\n    if (system.behaviors) {\n      for (behaviorId in system.behaviors) {\n        $db.collections._Behavior.remove({\n          '_id': system.behaviors[behaviorId]._id\n        });\n      }\n    }\n    // remove components\n    if (system.components) {\n      for (collection in system.components) {\n        for (componentId in system.components[collection]) {\n          if (coreComponents.indexOf(componentId) === -1) {\n            $db.collections[collection].remove({\n              '_id': componentId\n            });\n          }\n        }\n      }\n    }\n  }\n  if (this.require(id) && this.require(id).state) {\n    this.require(id).state('uninstalled');\n    this.require('channel').$systemUninstalled(id);\n  }\n}",
        useCoreAPI: true,
        core: true,
      },
      '105f219c6813643': {
        _id: '105f219c6813643',
        component: '_OSGi',
        state: 'start',
        action:
          "function start(id) {\n  let system = this.require(id),\n    channel = this.require('channel');\n\n  if (system && system.state() === 'resolved' || system.state() === 'installed') {\n    system.state('starting');\n    if (system.start) {\n      system.start();\n    }\n    channel.$systemStarted(id);\n    system.state('active');\n  }\n}",
        useCoreAPI: false,
        core: true,
      },
      '1a81a1f00d17269': {
        _id: '1a81a1f00d17269',
        component: '_OSGi',
        state: 'stop',
        action:
          "function stop(id) {\n  let system = this.require(id),\n    channel = this.require('channel');\n\n  if (system && system.state() === 'active') {\n    system.state('stopping');\n    if (system.stop) {\n      system.stop();\n    }\n    channel.$systemStopped(id);\n    system.state('resolved');\n    channel.$systemResolved(id);\n  }\n}",
        useCoreAPI: false,
        core: true,
      },
      '116851b602128d1': {
        _id: '116851b602128d1',
        component: '_OSGi',
        state: 'status',
        action:
          "function status() {\n  let result = {},\n    system = null,\n    length = 0,\n    i = 0;\n\n  systems = $db.collections._System.find({});\n\n  length = systems.length;\n  for (i = 0; i < length; i++) {\n    system = systems[i];\n    result[system.name] = {\n      'id': system._id,\n      'state': system.state,\n      'name': system.name,\n      'version': system.version,\n      'location': system.location,\n      'master': system.master\n    };\n  }\n\n  return result;\n}",
        useCoreAPI: true,
        core: true,
      },
      '19cf317d7217331': {
        _id: '19cf317d7217331',
        component: '_OSGi',
        state: 'bundle',
        action:
          'function bundle() { \n\tlet result = $db.exportSystem();\n\treturn result;\n}',
        useCoreAPI: true,
        core: true,
      },
      '13010167f313f87': {
        _id: '13010167f313f87',
        component: '_Runtime',
        state: 'system',
        action:
          "function system(params) {\n  let RuntimeSystem = null,\n    system = {},\n    systemId = '',\n    result = [],\n    conf = {};\n\n  if (params) {\n    if (typeof params === 'string') {\n      conf.master = true;\n      conf.name = params;\n    } else {\n      conf = params;\n      conf.master = true;\n    }\n    RuntimeSystem = this.require('_System');\n    system = new RuntimeSystem(conf);\n    system.state('active');\n  } else {\n    result = $db.collections._System.find({\n      'master': true\n    });\n    if (result.length) {\n      systemId = result[0]._id;\n      system = $component.get(systemId);\n    }\n  }\n  return system;\n}",
        core: true,
        useCoreAPI: true,
      },
      '1cfa4145f614da8': {
        _id: '1cfa4145f614da8',
        component: '_Runtime',
        state: 'message',
        action:
          'function message(msg) { \n  $db.collections._Message.insert(msg);\n}',
        useCoreAPI: true,
        core: true,
      },
      '1cb9d103d41dd97': {
        _id: '1cb9d103d41dd97',
        component: 'e89c617b6b15d24',
        state: 'start',
        action:
          "function start() {\n  if (typeof document !== 'undefined') {\n    document.addEventListener('DOMContentLoaded', function DOMContentLoaded(e) {\n      let systems = [],\n        system = null,\n        scripts = [],\n        script = null,\n        logLevel = 'warn',\n        i = 0,\n        length = 0;\n    \n      systems = document.querySelectorAll('link[rel=system]');\n      length = systems.length;\n  \n      // logger\n      scripts = document.querySelectorAll('script[log]');\n      if (scripts.length) {\n        logLevel = scripts[0].getAttribute('log');\n        this.require('logger').level(logLevel);\n      }\n  \n      // systems\n      for (i = 0; i < length; i++) {\n        system = systems[i];\n  \n        if (system.getAttribute('async') === 'false') {\n          this.require('runtime').install(system.href, false);\n        } else {\n          this.require('runtime').install(system.href, true);\n        }\n      }\n  \n      // ready event\n      if (length === 0) {\n        this.require('runtime').ready();\n      }\n  }.bind(this));\n  }\n}",
        useCoreAPI: true,
        core: true,
      },
      'e2848b60-99a1-472f-b0e1-5923077f6c61': {
        _id: 'e2848b60-99a1-472f-b0e1-5923077f6c61',
        component: '_History',
        state: 'back',
        action: 'function back() { \n  return $history.back();\n}',
        useCoreAPI: true,
        core: true,
      },
      'cebc40ad-c704-405c-b499-e60390b1bb82': {
        _id: 'cebc40ad-c704-405c-b499-e60390b1bb82',
        component: '_History',
        state: 'forward',
        action: 'function forward() { \n  return $history.forward();\n}',
        useCoreAPI: true,
        core: true,
      },
      'c35af0df-2fc6-4af5-a476-4f2ee089c30e': {
        _id: 'c35af0df-2fc6-4af5-a476-4f2ee089c30e',
        component: '_History',
        state: 'dump',
        action: 'function dump() { \n  return $history.dump();\n}',
        useCoreAPI: true,
        core: true,
      },
      'f06254ad-187e-400c-a582-b5ab81f24747': {
        _id: 'f06254ad-187e-400c-a582-b5ab81f24747',
        component: '_History',
        state: 'get',
        action: 'function get(index) { \n  return $history.get(index);\n}',
        useCoreAPI: true,
        core: true,
      },
      'aa731445-8d7c-4dd7-a78f-5dd70f750f87': {
        _id: 'aa731445-8d7c-4dd7-a78f-5dd70f750f87',
        component: '_History',
        state: 'from',
        action: 'function from(index) { \n  return $history.from(index);\n}',
        useCoreAPI: true,
        core: true,
      },
      'f565e46e-daee-492d-99ca-d9ed123132ba': {
        _id: 'f565e46e-daee-492d-99ca-d9ed123132ba',
        component: '_History',
        state: 'load',
        action: 'function load(dump) { \n  return $history.load(dump);\n}',
        useCoreAPI: true,
        core: true,
      },
      'd3827b91-f6db-46d9-833e-351564cb6e91': {
        _id: 'd3827b91-f6db-46d9-833e-351564cb6e91',
        component: '_History',
        state: 'start',
        action: 'function start() { \n  return $history.start();\n}',
        useCoreAPI: true,
        core: true,
      },
      'aa3b13ab-8b69-4962-bc44-e975cd42a206': {
        _id: 'aa3b13ab-8b69-4962-bc44-e975cd42a206',
        component: '_History',
        state: 'stop',
        action: 'function stop() { \n  return $history.stop();\n}',
        useCoreAPI: true,
        core: true,
      },
      'b112782c-3633-443e-8d7a-8d379b44e32d': {
        _id: 'b112782c-3633-443e-8d7a-8d379b44e32d',
        component: '_History',
        state: 'clear',
        action: 'function clear() { \n  return $history.clear();\n}',
        useCoreAPI: true,
        core: true,
      },
    },
    types: {
      css: {
        _id: 'h1d88311ac019211',
        name: 'css',
        type: 'string',
        core: true,
      },
      date: {
        _id: 'c17cad1bc3d17752',
        name: 'date',
        type: 'object',
        core: true,
      },
      json: {
        _id: 'e1d25a12e67127ed',
        name: 'json',
        type: 'object',
        core: true,
      },
      dbInsertEvent: {
        _id: '148ef1e19810e6d',
        core: true,
        name: 'dbInsertEvent',
        type: 'object',
        schema: {
          collection: { type: 'string', mandatory: true, default: '' },
          document: { type: 'object', mandatory: true, default: {} },
        },
      },
      dbRemoveEvent: {
        _id: '1952e1ac4213f4a',
        name: 'dbRemoveEvent',
        type: 'object',
        core: true,
        schema: {
          collection: { type: 'string', mandatory: true, default: '' },
          id: { type: 'string', mandatory: true, default: '' },
        },
      },
      dbUpdateEvent: {
        _id: '1f5c41309711752',
        core: true,
        name: 'dbUpdateEvent',
        type: 'object',
        schema: {
          collection: { type: 'string', mandatory: true, default: '' },
          id: { type: 'string', mandatory: true, default: '' },
          field: { type: 'string', mandatory: true, default: '' },
          value: { type: 'any', mandatory: true, default: null },
        },
      },
      collection: {
        _id: 'd1c0d0130c616199',
        name: 'collection',
        type: 'object',
        schema: {
          type: { type: ['string'], mandatory: true },
          readOnly: { type: 'boolean', mandatory: true },
          mandatory: { type: 'boolean', mandatory: true },
          default: { type: 'array', mandatory: true },
          description: { type: 'string', mandatory: false },
          label: { type: 'string', mandatory: false },
          kind: { type: 'string', mandatory: false },
        },
        core: true,
      },
      event: {
        _id: 'g1668d1de2d1ff6f',
        name: 'event',
        type: 'object',
        schema: {
          params: { type: ['parameter'], mandatory: false },
          description: { type: 'string', mandatory: false },
        },
        core: true,
      },
      html: {
        _id: 'y161c21320b11acb',
        name: 'html',
        type: 'string',
        core: true,
      },
      javascript: {
        _id: 's13d4c1fdf916504',
        name: 'javascript',
        type: 'string',
        core: true,
      },
      link: {
        _id: 'p124601801d1dbfa',
        name: 'link',
        type: 'object',
        schema: {
          type: { type: 'string', mandatory: true },
          readOnly: { type: 'boolean', mandatory: true },
          mandatory: { type: 'boolean', mandatory: true },
          default: { type: '{type}', mandatory: true },
          description: { type: 'string', mandatory: false },
          label: { type: 'string', mandatory: false },
          kind: { type: 'string', mandatory: false },
        },
        core: true,
      },
      log: {
        _id: 'd1fd161a4a4149fc',
        name: 'log',
        type: 'string',
        value: ['debug', 'info', 'warn', 'error', 'off'],
        core: true,
      },
      message: {
        _id: 'l13b061ac571272d',
        name: 'message',
        type: 'object',
        schema: {
          event: { type: 'string', mandatory: true },
          from: { type: 'string', mandatory: false },
          data: { type: 'array', mandatory: true },
        },
        core: true,
      },
      method: {
        _id: 'x1227218eed1f3e9',
        name: 'method',
        type: 'object',
        schema: {
          result: { type: 'any', mandatory: false },
          params: { type: ['parameter'], mandatory: false },
          description: { type: 'string', mandatory: false },
        },
        core: true,
      },
      osgiStates: {
        _id: 'q1f0ca120fc13fb3',
        name: 'osgiStates',
        type: 'string',
        value: [
          'none',
          'installed',
          'resolved',
          'starting',
          'active',
          'stopping',
          'uninstalled',
        ],
        core: true,
      },
      parameter: {
        _id: 'e1b18e16c6c195ad',
        name: 'parameter',
        type: 'object',
        schema: {
          description: { type: 'string', mandatory: false },
          name: { type: 'string', mandatory: true },
          type: { type: 'any', mandatory: true },
          mandatory: { type: 'boolean', mandatory: false },
          default: { type: '{type}', mandatory: false },
        },
        core: true,
      },
      property: {
        _id: 'a16a3a1ae051a55d',
        name: 'property',
        type: 'object',
        schema: {
          type: { type: 'string', mandatory: true },
          readOnly: { type: 'boolean', mandatory: true },
          mandatory: { type: 'boolean', mandatory: true },
          default: { type: '{type}', mandatory: true },
          description: { type: 'string', mandatory: false },
          label: { type: 'string', mandatory: false },
        },
        core: true,
      },
      text: {
        _id: 'c136fc129a912f54',
        name: 'text',
        type: 'string',
        core: true,
      },
      errorInfo: {
        _id: 'e198761fc0b1ae8a',
        name: 'errorInfo',
        type: 'object',
        schema: {
          message: { type: 'string', mandatory: true },
          stack: { type: 'object', mandatory: true },
        },
        core: true,
      },
    },
    components: {
      _Channel: { channel: { _id: 'channel' } },
      _Database: { db: { _id: 'db' } },
      _Logger: { logger: { _id: 'logger', level: 'warn' } },
      _Metamodel: { metamodel: { _id: 'metamodel' } },
      _Runtime: { runtime: { _id: 'runtime', version: '6.0.0-beta.4' } },
      _History: { history: { _id: 'history' } },
    },
    _id: 'e89c617b6b15d24',
  },
}
