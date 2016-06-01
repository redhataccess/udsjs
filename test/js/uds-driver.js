/**
 * Created by pbathia on 3/12/15.
 */

require.config({
    paths: {
        jquery: 'js/jquery-1.11.0',
        jsUri: 'js/Uri',
        uds: '../uds',
        bluebird: 'js/bluebird.min'
    }
});
require(['uds'], function (uds) {

    Promise.longStackTraces = true;

    'use strict';
    var errorFunc = function(error) {
        console.debug(error.statusText + "\n" + error.responseText);
    };

    uds.getSbrList('Minimal', 'sbrName like "%"').then(function(sbrs) {
        console.debug("Successfully fetched " + sbrs.length + " sbrs.");
    }, errorFunc);

    uds.fetchCaseDetails("1332755").then(function(kase) {
        console.debug("Successfully fetched case details for case: " + kase.resource.caseNumber);
    }, errorFunc);

    uds.fetchCaseDetails("1332755").then(function(kase) {
        console.debug("Successfully fetched case details for case: " + kase.resource.caseNumber);
    }, errorFunc);

    uds.fetchCaseComments("01278378").then(function(comments) {
        console.debug("Successfully fetched case comments " + comments.length)
    }, errorFunc);
    
    uds.fetchComments('ownerId is "005A0000000zqMTIAY" AND (lastModifiedDate >= 2016-05-01 AND lastModifiedDate <= 2016-05-03)').then(function(comments) {
        console.debug("Fetched " + comments.length + " comments via UQL and a date range.")
    }, errorFunc);

    uds.fetchUserDetails("rhn-support-rmanes").then(function(user) {
        console.debug("Fetched user details for: " + user[0].externalModelId)
    }, errorFunc);
    uds.fetchUser('SSO is "rhn-support-rmanes"').then(function(user) {
        console.debug("Fetched user: " + user[0].externalModelId)
    }, errorFunc);
    
    //sample query for getting owned cases based on roles 
    uds.fetchCases(        
        '((((((ownerId is "005A0000000gPRIIA2" and (status is "Waiting on Red Hat" or internalStatus is "Waiting on Owner")) or (ftsRole like "%strataapi2%" and status ne "Closed"))) or ((internalStatus is "Waiting on Collaboration" and (status ne "Closed")) and nnoSuperRegion is null)) or (isFTS is true and (ftsRole is ""))) and requiresSecureHandling is false)',
        'Minimal',
        6
    ).then(function(cases) {
        console.debug("Fetched " + cases.length + " cases");
    }, errorFunc);
    uds.updateCaseDetails(
        '01278378',
        '{"resource":{"caseSummary":{"resource":{"summary":"test"}}}}'
    ).then(function() {
        console.debug("Updated case.");
    }, errorFunc);
    
    // Unclear right now what the UQL for this one is
    // uds.fetchCaseAssociateDetails('005A0000005n18tIAA').then(function() {
    //    
    // }, errorFunc)
});
