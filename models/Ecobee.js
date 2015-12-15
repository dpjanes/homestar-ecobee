/*
 *  Ecobee.js
 *
 *  David Janes
 *  IOTDB
 *  2015-12-14
 */

var iotdb = require("iotdb");

exports.Model = iotdb.make_model('EcobeeSomething')
    // .facet(":lighting")
    .name("Ecobee")
    // .description("Ecobee")
    .io("on", iotdb.boolean.on)
    .make();

exports.binding = {
    bridge: require('../EcobeeBridge').Bridge,
    model: exports.Model,
};
