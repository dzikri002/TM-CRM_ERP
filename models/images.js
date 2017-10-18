/**
Copyright 2017 ToManage

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

@author    ToManage SAS <contact@tomanage.fr>
@copyright 2014-2017 ToManage SAS
@license   http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
International Registered Trademark & Property of ToManage SAS
*/



"use strict";

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ImagesSchema = new mongoose.Schema({
    imageSrc: { type: String, unique: true },
    size: {
        width: Number,
        height: Number
    },
    length: Number, //MB
    langs: [{
        _id: false,
        linker: { type: String, default: '' },
        name: { type: String, default: '' },
        description: { type: String, default: '' }
    }],
}, {
    collection: 'Images',
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

exports.Schema = mongoose.model('Images', ImagesSchema);
exports.name = 'Images';