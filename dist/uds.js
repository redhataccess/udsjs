(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["uds"] = factory();
	else
		root["uds"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports);
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports);
	        global.uds = mod.exports;
	    }
	})(this, function (exports) {
	    'use strict';

	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.fetchCaseDetails = fetchCaseDetails;
	    exports.fetchCaseComments = fetchCaseComments;
	    exports.fetchComments = fetchComments;
	    exports.fetchCaseAssociateDetails = fetchCaseAssociateDetails;
	    exports.getlock = getlock;
	    exports.releaselock = releaselock;
	    exports.fetchAccountDetails = fetchAccountDetails;
	    exports.fetchAccountNotes = fetchAccountNotes;
	    exports.fetchUserDetails = fetchUserDetails;
	    exports.fetchUser = fetchUser;
	    exports.fetchCases = fetchCases;
	    exports.generateBomgarSessionKey = generateBomgarSessionKey;
	    exports.postPublicComments = postPublicComments;
	    exports.postPrivateComments = postPrivateComments;
	    exports.updateCaseDetails = updateCaseDetails;
	    exports.updateCaseOwner = updateCaseOwner;
	    exports.fetchCaseHistory = fetchCaseHistory;
	    exports.addAssociates = addAssociates;
	    exports.getCQIQuestions = getCQIQuestions;
	    exports.getCQIs = getCQIs;
	    exports.postCQIScore = postCQIScore;
	    exports.getSolutionDetails = getSolutionDetails;
	    exports.getSQIQuestions = getSQIQuestions;
	    exports.getSQIs = getSQIs;
	    exports.postSQIScore = postSQIScore;
	    exports.getSbrList = getSbrList;
	    exports.fetchCaseSbrs = fetchCaseSbrs;
	    exports.pinSolutionToCase = pinSolutionToCase;
	    exports.removeUserSbr = removeUserSbr;
	    exports.getRoleList = getRoleList;
	    exports.getRoleDetails = getRoleDetails;
	    exports.removeUserRole = removeUserRole;
	    exports.updateUserRole = updateUserRole;
	    exports.postAddUsersToSBR = postAddUsersToSBR;
	    exports.postAddUsersToRole = postAddUsersToRole;
	    exports.getOpenCasesForAccount = getOpenCasesForAccount;
	    exports.getCallLogsForCase = getCallLogsForCase;
	    exports.getQuestionDependencies = getQuestionDependencies;
	    exports.postRoleLevel = postRoleLevel;
	    exports.postEditPrivateComments = postEditPrivateComments;
	    exports.postPvtToPubComments = postPvtToPubComments;
	    exports.createCaseNep = createCaseNep;
	    exports.updateCaseNep = updateCaseNep;
	    exports.removeCaseNep = removeCaseNep;
	    exports.getAvgCSATForAccount = getAvgCSATForAccount;
	    exports.getCaseContactsForAccount = getCaseContactsForAccount;
	    exports.getCaseGroupsForContact = getCaseGroupsForContact;
	    exports.getRMECountForAccount = getRMECountForAccount;
	    exports.deleteAssociates = deleteAssociates;
	    exports.updateCaseAssociate = updateCaseAssociate;
	    exports.fetchSolutionDetails = fetchSolutionDetails;
	    exports.setHandlingSystem = setHandlingSystem;
	    exports.fetchSolr = fetchSolr;
	    exports.fetchCaseSolr = fetchCaseSolr;
	    exports.addCaseSbrs = addCaseSbrs;
	    exports.removeCaseSbrs = removeCaseSbrs;
	    exports.getAllRolesList = getAllRolesList;
	    exports.createRole = createRole;
	    exports.updateRole = updateRole;
	    exports.deleteRole = deleteRole;
	    exports.getAdditionalContacts = getAdditionalContacts;
	    exports.removeAdditionalContacts = removeAdditionalContacts;
	    exports.addAdditionalContacts = addAdditionalContacts;
	    exports.getBrmsResponse = getBrmsResponse;
	    exports.fetchTopCasesFromSolr = fetchTopCasesFromSolr;
	    exports.getUserDetailsFromSFDC = getUserDetailsFromSFDC;
	    exports.updateUserDetailsInSFDC = updateUserDetailsInSFDC;
	    exports.getCallCenterFromSFDC = getCallCenterFromSFDC;
	    exports.getCaseTagsList = getCaseTagsList;
	    exports.addCaseTags = addCaseTags;
	    exports.removeCaseTags = removeCaseTags;
	    exports.fetchPriorityTemplates = fetchPriorityTemplates;
	    exports.fetchCaseLanguages = fetchCaseLanguages;
	    exports.fetchBugzillas = fetchBugzillas;
	    exports.fetchBugzillaComments = fetchBugzillaComments;
	    exports.addLanguageToUser = addLanguageToUser;
	    exports.removeLanguagesFromUser = removeLanguagesFromUser;
	    exports.addTagToUser = addTagToUser;
	    exports.removeTagsFromUser = removeTagsFromUser;
	    exports.addUserAsQB = addUserAsQB;
	    exports.removeUserQBs = removeUserQBs;
	    exports.addNNOToUser = addNNOToUser;
	    exports.removeNNOsFromUser = removeNNOsFromUser;
	    exports.setGbdSuperRegion = setGbdSuperRegion;
	    exports.setOutOfOfficeflag = setOutOfOfficeflag;
	    var udsHostName = new Uri('https://unified-ds-ci.gsslab.brq.redhat.com/');

	    if (window.location.hostname === 'access.redhat.com' || window.location.hostname === 'prod.foo.redhat.com' || window.location.hostname === 'fooprod.redhat.com') {
	        udsHostName = new Uri('https://unified-ds.gsslab.rdu2.redhat.com/');
	    } else {
	        if (window.location.hostname === 'access.qa.redhat.com' || window.location.hostname === 'qa.foo.redhat.com' || window.location.hostname === 'fooqa.redhat.com') {
	            udsHostName = new Uri('https://unified-ds-qa.gsslab.pnq2.redhat.com/');
	        } else {
	            if (window.location.hostname === 'access.devgssci.devlab.phx1.redhat.com' || window.location.hostname === 'ci.foo.redhat.com' || window.location.hostname === 'fooci.redhat.com') {
	                udsHostName = new Uri('https://unified-ds-ci.gsslab.brq.redhat.com/');
	            } else {
	                if (window.location.hostname === 'access.stage.redhat.com' || window.location.hostname === 'stage.foo.redhat.com' || window.location.hostname === 'foostage.redhat.com') {
	                    udsHostName = new Uri('https://unified-ds-stage.gsslab.pnq2.redhat.com/');
	                }
	            }
	        }
	    }

	    if (localStorage && localStorage.getItem('udsHostname')) {
	        udsHostName = localStorage.getItem('udsHostname');
	    }

	    var baseAjaxParams = {
	        accepts: {
	            jsonp: 'application/json, text/json'
	        },
	        crossDomain: true,
	        type: 'GET',
	        method: 'GET',
	        //beforeSend: function(xhr) {
	        //    xhr.setRequestHeader('X-Omit', 'WWW-Authenticate');
	        //    //xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(unescape(encodeURIComponent('<username>' + ':' + '<password>'))))
	        //},
	        //headers: {
	        //    Accept: 'application/json, text/json'
	        //},
	        xhrFields: {
	            withCredentials: true
	        },
	        data: {},
	        dataType: ''
	    };

	    var executeUdsAjaxCall = function executeUdsAjaxCall(url, httpMethod) {
	        return new Promise(function (resolve, reject) {
	            return $.ajax($.extend({}, baseAjaxParams, {
	                url: url,
	                type: httpMethod,
	                method: httpMethod,
	                success: function success(response, status, xhr) {
	                    return resolve(xhr.status === 204 ? null : response);
	                },
	                error: function error(xhr, status) {
	                    return reject(xhr);
	                }
	            }));
	        });
	        return Promise.resolve();
	    };

	    var executeUdsAjaxCallWithData = function executeUdsAjaxCallWithData(url, data, httpMethod, dataType) {
	        return new Promise(function (resolve, reject) {
	            return $.ajax($.extend({}, baseAjaxParams, {
	                url: url,
	                data: JSON.stringify(data),
	                contentType: 'application/json',
	                type: httpMethod,
	                method: httpMethod,
	                dataType: dataType || '',
	                success: function success(response, status, xhr) {
	                    return resolve(xhr.status === 204 ? null : response);
	                },
	                error: function error(xhr, status) {
	                    return reject(xhr);
	                }
	            }));
	        });
	    };

	    function fetchCaseDetails(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchCaseComments(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments");
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchComments(uql) {
	        var url = udsHostName.clone().setPath('/case/comments').addQueryParam('where', uql);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchCaseAssociateDetails(uql) {
	        var url = udsHostName.clone().setPath('/case/associates').addQueryParam('where', uql);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    //hold the lock on the case
	    function getlock(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/lock");
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    //release the lock on the case
	    function releaselock(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/lock");
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function fetchAccountDetails(accountNumber, resourceProjection) {

	        var url = udsHostName.clone().setPath('/account/' + accountNumber);
	        if (resourceProjection != null) {
	            url.addQueryParam('resourceProjection', resourceProjection);
	        } else {
	            url.addQueryParam('resourceProjection', 'Minimal');
	        }
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchAccountNotes(accountNumber) {
	        var url = udsHostName.clone().setPath('/account/' + accountNumber + '/notes');
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchUserDetails(ssoUsername) {
	        var url = udsHostName.clone().setPath('/user/') + ssoUsername;
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchUser(userUql, resourceProjection) {
	        var url = udsHostName.clone().setPath('/user').addQueryParam('where', userUql);
	        if (resourceProjection != null) {
	            url.addQueryParam('resourceProjection', resourceProjection);
	        }
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchCases(uql, resourceProjection, limit, sortOption, statusOnly, nepUql) {
	        var path = '/case';
	        if (statusOnly) {
	            path = '/case/list-status-only';
	        }
	        var url = udsHostName.clone().setPath(path).addQueryParam('where', uql);
	        if (nepUql != null) {
	            url.addQueryParam('nepWhere', nepUql);
	        }
	        if (resourceProjection != null) {
	            url.addQueryParam('resourceProjection', resourceProjection);
	        } else {
	            url.addQueryParam('resourceProjection', 'Minimal');
	        }
	        if (limit != null) {
	            url.addQueryParam('limit', limit);
	        }
	        if (sortOption != null) {
	            url.addQueryParam('orderBy', sortOption);
	        }
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function generateBomgarSessionKey(caseId) {
	        var url = udsHostName.clone().setPath('/case/' + caseId + '/remote-session-key');
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function postPublicComments(caseNumber, caseComment, doNotChangeSbt, hoursWorked) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/public");
	        if (hoursWorked !== undefined) {
	            url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/public/hoursWorked/" + hoursWorked);
	        }
	        if (doNotChangeSbt) {
	            url.addQueryParam('doNotChangeSbt', doNotChangeSbt);
	        }
	        return executeUdsAjaxCallWithData(url, caseComment, 'POST');
	    }

	    function postPrivateComments(caseNumber, caseComment, hoursWorked) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/private");
	        if (hoursWorked === undefined) {
	            url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/private");
	        } else {
	            url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/private/hoursWorked/" + hoursWorked);
	        }
	        return executeUdsAjaxCallWithData(url, caseComment, 'POST');
	    }

	    function updateCaseDetails(caseNumber, caseDetails) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber);
	        return executeUdsAjaxCallWithData(url, caseDetails, 'PUT');
	    }

	    function updateCaseOwner(caseNumber, ownerSSO) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + '/owner/' + ownerSSO);
	        return executeUdsAjaxCall(url, 'PUT');
	    }

	    function fetchCaseHistory(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/history");
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function addAssociates(caseId, jsonAssociates) {
	        var url = udsHostName.clone().setPath('/case/' + caseId + "/associate");
	        return executeUdsAjaxCallWithData(url, jsonAssociates, 'POST');
	    }

	    function getCQIQuestions(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + '/reviews/questions');
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    // Allows for UQL for fetching CQIs
	    function getCQIs(uql) {
	        var url = udsHostName.clone().setPath('/case/reviews').addQueryParam('where', uql);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function postCQIScore(caseNumber, reviewData) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + '/reviews');
	        return executeUdsAjaxCallWithData(url, reviewData, 'POST');
	    }

	    function getSolutionDetails(solutionNumber, resourceProjection) {
	        var url = udsHostName.clone().setPath('/documentation/solution/' + solutionNumber);
	        if (resourceProjection !== undefined) {
	            url.addQueryParam('resourceProjection', resourceProjection);
	        }
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function getSQIQuestions(solutionNumber) {
	        var url = udsHostName.clone().setPath('/documentation/solution/' + solutionNumber + '/reviews/questions');
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    // Allows for UQL for fetching SQIs
	    function getSQIs(uql) {
	        var url = udsHostName.clone().setPath('/documentation/solution/reviews').addQueryParam('where', uql);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function postSQIScore(solutionNumber, reviewData) {
	        var url = udsHostName.clone().setPath('/documentation/solution/' + solutionNumber + '/reviews');
	        return executeUdsAjaxCallWithData(url, reviewData, 'POST');
	    }

	    function getSbrList(resourceProjection, query) {
	        var url = udsHostName.clone().setPath('/user/metadata/sbrs');
	        url.addQueryParam('resourceProjection', resourceProjection);
	        url.addQueryParam('where', query);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchCaseSbrs() {
	        var url = udsHostName.clone().setPath('/case/sbrs');
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function pinSolutionToCase(caseNumber, solutionJson) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber);
	        return executeUdsAjaxCallWithData(url, solutionJson, 'PUT');
	    }

	    function removeUserSbr(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/sbr').addQueryParam('where', query);
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function getRoleList(query) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles');
	        url.addQueryParam('where', query);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function getRoleDetails(roleId) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/' + roleId);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function removeUserRole(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/role').addQueryParam('where', query);
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function updateUserRole(userId, role) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/role/' + role.externalModelId);
	        return executeUdsAjaxCallWithData(url, role.resource, 'PUT');
	    }

	    function postAddUsersToSBR(userId, uql, data) {
	        if (uql == null || uql == undefined || uql === '') {
	            throw 'User Query is mandatory';
	        }
	        var url = udsHostName.clone().setPath('/user/' + userId + '/sbr').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithData(url, data, 'POST');
	    }

	    function postAddUsersToRole(userId, uql, data) {
	        if (uql == null || uql == undefined || uql === '') {
	            throw 'User Query is mandatory';
	        }
	        var url = udsHostName.clone().setPath('/user/' + userId + '/role').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithData(url, data, 'POST');
	    }

	    function getOpenCasesForAccount(uql) {
	        var path = '/case';
	        var url = udsHostName.clone().setPath(path).addQueryParam('where', uql);
	        url.addQueryParam('resourceProjection', 'Minimal');
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function getCallLogsForCase(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/calls");
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function getQuestionDependencies() {
	        var path = '/case/ktquestions';
	        var url = udsHostName.clone().setPath(path);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function postRoleLevel(userId, roleName, roleLevel) {
	        var url = udsHostName.clone().setPath('/user/' + userId + "/role-level/" + roleName);
	        return executeUdsAjaxCallWithData(url, roleLevel, 'PUT');
	    }

	    function postEditPrivateComments(caseNumber, caseComment, caseCommentId, draft) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/" + caseCommentId + "/private");
	        url.addQueryParam('draft', draft);
	        return executeUdsAjaxCallWithData(url, caseComment, 'PUT');
	    }

	    function postPvtToPubComments(caseNumber, caseComment, caseCommentId, draft) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/" + caseCommentId + "/public");
	        url.addQueryParam('draft', draft);
	        return executeUdsAjaxCallWithData(url, caseComment, 'PUT');
	    }

	    function createCaseNep(caseNumber, nep) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/nep");
	        return executeUdsAjaxCallWithData(url, nep, 'POST');
	    }

	    function updateCaseNep(caseNumber, nep) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/nep");
	        return executeUdsAjaxCallWithData(url, nep, 'PUT');
	    }

	    function removeCaseNep(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/nep");
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function getAvgCSATForAccount(uql) {
	        var url = udsHostName.clone().setPath('/metrics/CsatAccountAvg').addQueryParam('where', uql);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function getCaseContactsForAccount(accountNumber) {
	        var url = udsHostName.clone().setPath('/account/' + accountNumber + "/contacts");
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function getCaseGroupsForContact(contactSSO) {
	        var url = udsHostName.clone().setPath('/case/casegroups/user/' + contactSSO);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function getRMECountForAccount(uql) {
	        var url = udsHostName.clone().setPath('/case/history').addQueryParam('where', uql);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function deleteAssociates(caseId, associateId) {
	        var url = udsHostName.clone().setPath('/case/' + caseId + '/associate/' + associateId);
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function updateCaseAssociate(caseId, jsonAssociates) {
	        var url = udsHostName.clone().setPath('/case/' + caseId + "/associate");
	        return executeUdsAjaxCallWithData(url, jsonAssociates, 'PUT');
	    }

	    function fetchSolutionDetails(solutionIdQuery) {
	        var url = udsHostName.clone().setPath('/documentation/solution').addQueryParam('where', solutionIdQuery);
	        url.addQueryParam('resourceProjection', 'Minimal');
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function setHandlingSystem(caseNumber, handlingSystemArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/handlingsystems");
	        return executeUdsAjaxCallWithData(url, handlingSystemArray, 'PUT');
	    }

	    function fetchSolr(query) {
	        if (query.q == null || query.q === '') throw 'SOLR Query is mandatory';

	        var url = udsHostName.clone().setPath('/solr');
	        url.addQueryParam('wt', 'json');
	        url.addQueryParam('q', query.q);
	        if (query.fq != null && query.fq !== '') {
	            url.addQueryParam('fq', query.fq);
	        }
	        if (query.start != null) {
	            url.addQueryParam('start', query.start);
	        }
	        if (query.rows != null) {
	            url.addQueryParam('rows', query.rows);
	        }
	        if (query.sort != null && query.sort !== '') {
	            url.addQueryParam('sort', query.sort);
	        }
	        if (query.fl != null && query.fl !== '') {
	            url.addQueryParam('fl', query.fl);
	        }

	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchCaseSolr(query) {
	        if (query.q == null || query.q === '') throw 'SOLR Query is mandatory';

	        var url = udsHostName.clone().setPath('/solr/cases');
	        url.addQueryParam('wt', 'json');
	        url.addQueryParam('q', query.q);
	        if (query.fq != null && query.fq !== '') {
	            url.addQueryParam('fq', query.fq);
	        }
	        if (query.start != null) {
	            url.addQueryParam('start', query.start);
	        }
	        if (query.rows != null) {
	            url.addQueryParam('rows', query.rows);
	        }
	        if (query.sort != null && query.sort !== '') {
	            url.addQueryParam('sort', query.sort);
	        }
	        if (query.fl != null && query.fl !== '') {
	            url.addQueryParam('fl', query.fl);
	        }

	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function addCaseSbrs(caseNumber, sbrArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/sbrs");
	        return executeUdsAjaxCallWithData(url, sbrArray, 'PUT');
	    }

	    function removeCaseSbrs(caseNumber, sbrArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/sbrs");
	        return executeUdsAjaxCallWithData(url, sbrArray, 'DELETE');
	    }

	    function getAllRolesList(query) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/query');
	        url.addQueryParam('where', query);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function createRole(roleDetails) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/add');
	        return executeUdsAjaxCallWithData(url, roleDetails, 'POST');
	    }

	    function updateRole(roleId, rolePayload) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/' + roleId);
	        return executeUdsAjaxCallWithData(url, rolePayload, 'PUT');
	    }

	    function deleteRole(roleId) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/' + roleId);
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function getAdditionalContacts(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/contacts");
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function removeAdditionalContacts(caseNumber, contacts) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/contacts");
	        return executeUdsAjaxCallWithData(url, contacts, 'DELETE');
	    }

	    function addAdditionalContacts(caseNumber, contacts) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/contacts");
	        return executeUdsAjaxCallWithData(url, contacts, 'PUT');
	    }

	    function getBrmsResponse(jsonObject) {
	        var url = udsHostName.clone().setPath('/brms');
	        return executeUdsAjaxCallWithData(url, jsonObject, 'POST', 'text');
	    }

	    function fetchTopCasesFromSolr(queryString) {
	        var url = udsHostName.clone().setPath('/solr?' + queryString);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function getUserDetailsFromSFDC(userID) {
	        var url = udsHostName.clone().setPath('/salesforce/user/' + userID);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function updateUserDetailsInSFDC(ssoUsername, data) {
	        var url = udsHostName.clone().setPath('/user/salesforce/' + ssoUsername);
	        return executeUdsAjaxCallWithData(url, data, 'PUT');
	    }

	    function getCallCenterFromSFDC(callCenterId) {
	        var url = udsHostName.clone().setPath('/callcenter/' + callCenterId);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function getCaseTagsList() {
	        var url = udsHostName.clone().setPath('/case/tags');
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function addCaseTags(caseNumber, tagsArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/tags");
	        return executeUdsAjaxCallWithData(url, tagsArray, 'PUT');
	    }

	    function removeCaseTags(caseNumber, tagsArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/tags");
	        return executeUdsAjaxCallWithData(url, tagsArray, 'DELETE');
	    }

	    function fetchPriorityTemplates(uql) {
	        var url = udsHostName.clone().setPath('/user/metadata/templates');
	        url.addQueryParam('where', uql);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchCaseLanguages() {
	        var url = udsHostName.clone().setPath('/case/languages');
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchBugzillas(uql) {
	        var url = udsHostName.clone().setPath('/bug');
	        url.addQueryParam('where', uql);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function fetchBugzillaComments(uql) {
	        var url = udsHostName.clone().setPath('/bug/comments');
	        url.addQueryParam('where', uql);
	        return executeUdsAjaxCall(url, 'GET');
	    }

	    function addLanguageToUser(userId, language, type) {
	        if (type !== "primary" && type !== "secondary") type = "primary";
	        var url = udsHostName.clone().setPath('/user/' + userId + '/language/' + type + '/' + language);
	        return executeUdsAjaxCall(url, 'POST');
	    }

	    function removeLanguagesFromUser(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/language').addQueryParam('where', query);
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function addTagToUser(userId, tagName) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/tag/' + tagName);
	        return executeUdsAjaxCall(url, 'POST');
	    }

	    function removeTagsFromUser(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/tag').addQueryParam('where', query);
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function addUserAsQB(qbUserId, userId) {
	        var url = udsHostName.clone().setPath('/user/' + qbUserId + '/queuebuddy/' + userId);
	        return executeUdsAjaxCall(url, 'POST');
	    }

	    function removeUserQBs(qbUserId, query) {
	        var url = udsHostName.clone().setPath('/user/' + qbUserId + '/queuebuddy').addQueryParam('where', query);
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function addNNOToUser(userId, nnoRegion) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/nnoregion/' + nnoRegion);
	        executeUdsAjaxCall(url, 'POST');
	    }

	    function removeNNOsFromUser(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/nnoregion').addQueryParam('where', query);
	        return executeUdsAjaxCall(url, 'DELETE');
	    }

	    function setGbdSuperRegion(userId, value) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/virtualoffice/' + value);
	        return executeUdsAjaxCall(url, 'PUT');
	    }

	    function setOutOfOfficeflag(userId, value) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/out-of-office');
	        return executeUdsAjaxCallWithData(url, value, 'POST');
	    }
	});

/***/ }
/******/ ])
});
;