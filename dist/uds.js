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
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require('jsuri'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.jsuri);
	        global.uds = mod.exports;
	    }
	})(this, function (exports, Uri) {
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
	    exports.getCQIQuestions = getCQIQuestions;
	    exports.getCQIs = getCQIs;
	    exports.postCQIScore = postCQIScore;
	    exports.getSolutionDetails = getSolutionDetails;
	    exports.getSQIQuestions = getSQIQuestions;
	    exports.getSQIs = getSQIs;
	    exports.postSQIScore = postSQIScore;
	    exports.getSbrList = getSbrList;
	    exports.fetchCaseSbrs = fetchCaseSbrs;
	    exports.fetchCaseSbrsExternal = fetchCaseSbrsExternal;
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
	    exports.addAssociates = addAssociates;
	    exports.deleteAssociates = deleteAssociates;
	    exports.fetchSolutionDetails = fetchSolutionDetails;
	    exports.setHandlingSystem = setHandlingSystem;
	    exports.fetchKCSFromDrupal = fetchKCSFromDrupal;
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
	    exports.updateResourceLink = updateResourceLink;
	    exports.updateNightShiftForUser = updateNightShiftForUser;
	    exports.updateCaseAttachment = updateCaseAttachment;


	    var udsHostName = new Uri('https://unified-ds-ci.gsslab.brq.redhat.com/');

	    if (window.location.hostname === 'access.redhat.com' || window.location.hostname === 'prod.foo.redhat.com' || window.location.hostname === 'fooprod.redhat.com' || window.location.hostname === 'skedge.redhat.com') {
	        udsHostName = new Uri('https://unified-ds.gsslab.rdu2.redhat.com/');
	    } else {
	        if (window.location.hostname === 'access.qa.redhat.com' || window.location.hostname === 'qa.foo.redhat.com' || window.location.hostname === 'fooqa.redhat.com' || window.location.hostname === 'skedge.qa.redhat.com') {
	            udsHostName = new Uri('https://unified-ds-qa.gsslab.pnq2.redhat.com/');
	        } else {
	            if (window.location.hostname === 'access.devgssci.devlab.phx1.redhat.com' || window.location.hostname === 'ci.foo.redhat.com' || window.location.hostname === 'fooci.redhat.com' || window.location.hostname === 'skedge.ci.redhat.com') {
	                udsHostName = new Uri('https://unified-ds-ci.gsslab.brq.redhat.com/');
	            } else {
	                if (window.location.hostname === 'access.stage.redhat.com' || window.location.hostname === 'stage.foo.redhat.com' || window.location.hostname === 'foostage.redhat.com' || window.location.hostname === 'skedge.stage.redhat.com') {
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

	    // If the token is expiring within 5 seconds, go ahead and refresh it.  Using 5 seconds as that is what keycloak uses as the default minValidity
	    function isTokenExpired() {
	        return window.sessionjs && window.sessionjs._state && window.sessionjs._state.keycloak && window.sessionjs._state.keycloak.isTokenExpired(5) === true;
	    }

	    function forceTokenRefresh() {
	        console.warn('Udsjs detected the JWT token has expired, forcing an update');
	        // -1 here forces the token to refresh
	        return window.sessionjs._state.keycloak.updateToken(-1);
	    }

	    function getToken() {
	        if (window.sessionjs && window.sessionjs._state.keycloak.token) {
	            if (window.sessionjs.isAuthenticated()) {
	                return 'Bearer ' + window.sessionjs._state.keycloak.token;
	            } else {
	                window.sessionjs.login();
	            }
	        }
	        return '';
	    }

	    var executeUdsAjaxCall = function executeUdsAjaxCall(url, httpMethod) {
	        return new Promise(function (resolve, reject) {
	            return $.ajax($.extend({}, baseAjaxParams, {
	                url: url,
	                type: httpMethod,
	                method: httpMethod,
	                beforeSend: function beforeSend(xhr) {
	                    if (getToken() !== '') {
	                        xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());
	                    }
	                },
	                success: function success(response, status, xhr) {
	                    return resolve(xhr.status === 204 ? null : response);
	                },
	                error: function error(xhr, status, errorThrown) {
	                    return reject(xhr);
	                }
	            }));
	        });
	        return Promise.resolve();
	    };

	    var executeUdsAjaxCallWithJwt = function executeUdsAjaxCallWithJwt(url, httpMethod) {
	        return new Promise(function (resolve, reject) {
	            if (isTokenExpired()) {
	                return forceTokenRefresh().success(function () {
	                    executeUdsAjaxCall(url, httpMethod).then(function (response) {
	                        return resolve(response);
	                    }).catch(function (error) {
	                        return reject(error);
	                    });
	                }).error(function () {
	                    // Even if there was an error updating the token, we still need to hit udsjs, which at this point would probably return the "JWT expired" though this edge case is very unlikely.
	                    console.warn('Udsjs unable to force an update of the JWT token.');
	                    executeUdsAjaxCall(url, httpMethod).then(function (response) {
	                        return resolve(response);
	                    }).catch(function (error) {
	                        return reject(error);
	                    });
	                });
	            } else {
	                // Else we have a valid token and continue as always.
	                executeUdsAjaxCall(url, httpMethod).then(function (response) {
	                    return resolve(response);
	                }).catch(function (error) {
	                    return reject(error);
	                });
	            }
	        });
	    };

	    var executeUdsAjaxCallUnAuthed = function executeUdsAjaxCallUnAuthed(url, httpMethod) {
	        return new Promise(function (resolve, reject) {
	            return $.ajax($.extend({}, baseAjaxParams, {
	                url: url,
	                type: httpMethod,
	                method: httpMethod,
	                xhrFields: {
	                    withCredentials: false
	                },
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
	                beforeSend: function beforeSend(xhr) {
	                    // xhr.setRequestHeader('X-Omit', 'WWW-Authenticate');
	                    if (window.sessionjs && window.sessionjs.isAuthenticated() && window.sessionjs._state.keycloak.token) {
	                        xhr.setRequestHeader('Authorization', 'Bearer ' + window.sessionjs._state.keycloak.token);
	                    }
	                },
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

	    var executeUdsAjaxCallWithDataWithJwt = function executeUdsAjaxCallWithDataWithJwt(url, data, httpMethod, dataType) {
	        return new Promise(function (resolve, reject) {
	            if (isTokenExpired()) {
	                return forceTokenRefresh().success(function () {
	                    executeUdsAjaxCallWithData(url, data, httpMethod, dataType).then(function (response) {
	                        return resolve(response);
	                    }).catch(function (error) {
	                        return reject(error);
	                    });
	                }).error(function () {
	                    // Even if there was an error updating the token, we still need to hit udsjs, which at this point would probably return the "JWT expired" though this edge case is very unlikely.
	                    console.warn('Udsjs unable to force an update of the JWT token.');
	                    executeUdsAjaxCallWithData(url, data, httpMethod, dataType).then(function (response) {
	                        return resolve(response);
	                    }).catch(function (error) {
	                        return reject(error);
	                    });
	                });
	            } else {
	                // Else we have a valid token and continue as always.
	                executeUdsAjaxCallWithData(url, data, httpMethod, dataType).then(function (response) {
	                    return resolve(response);
	                }).catch(function (error) {
	                    return reject(error);
	                });
	            }
	        });
	    };

	    function fetchCaseDetails(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchCaseComments(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments");
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchComments(uql) {
	        var url = udsHostName.clone().setPath('/case/comments').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchCaseAssociateDetails(uql) {
	        var url = udsHostName.clone().setPath('/case/associates').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    //hold the lock on the case
	    function getlock(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/lock");
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    //release the lock on the case
	    function releaselock(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/lock");
	        return executeUdsAjaxCallWithJwt(url, 'DELETE');
	    }

	    function fetchAccountDetails(accountNumber, resourceProjection) {

	        var url = udsHostName.clone().setPath('/account/' + accountNumber);
	        if (resourceProjection != null) {
	            url.addQueryParam('resourceProjection', resourceProjection);
	        } else {
	            url.addQueryParam('resourceProjection', 'Minimal');
	        }
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchAccountNotes(accountNumber) {
	        var url = udsHostName.clone().setPath('/account/' + accountNumber + '/notes');
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchUserDetails(ssoUsername) {
	        var url = udsHostName.clone().setPath('/user/') + ssoUsername;
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchUser(userUql, resourceProjection) {
	        var url = udsHostName.clone().setPath('/user').addQueryParam('where', userUql);
	        if (resourceProjection != null) {
	            url.addQueryParam('resourceProjection', resourceProjection);
	        }
	        return executeUdsAjaxCallWithJwt(url, 'GET');
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
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function generateBomgarSessionKey(caseId) {
	        var url = udsHostName.clone().setPath('/case/' + caseId + '/remote-session-key');
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function postPublicComments(caseNumber, caseComment, doNotChangeSbt, hoursWorked) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/public");
	        if (hoursWorked !== undefined) {
	            url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/public/hoursWorked/" + hoursWorked);
	        }
	        if (doNotChangeSbt) {
	            url.addQueryParam('doNotChangeSbt', doNotChangeSbt);
	        }
	        return executeUdsAjaxCallWithDataWithJwt(url, caseComment, 'POST');
	    }

	    function postPrivateComments(caseNumber, caseComment, hoursWorked) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/private");
	        if (hoursWorked === undefined) {
	            url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/private");
	        } else {
	            url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/private/hoursWorked/" + hoursWorked);
	        }
	        return executeUdsAjaxCallWithDataWithJwt(url, caseComment, 'POST');
	    }

	    function updateCaseDetails(caseNumber, caseDetails) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber);
	        return executeUdsAjaxCallWithDataWithJwt(url, caseDetails, 'PUT');
	    }

	    function updateCaseOwner(caseNumber, ownerSSO) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + '/owner/' + ownerSSO);
	        return executeUdsAjaxCallWithJwt(url, 'PUT');
	    }

	    function fetchCaseHistory(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/history");
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getCQIQuestions(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + '/reviews/questions');
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    // Allows for UQL for fetching CQIs
	    function getCQIs(uql) {
	        var url = udsHostName.clone().setPath('/case/reviews').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function postCQIScore(caseNumber, reviewData) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + '/reviews');
	        return executeUdsAjaxCallWithDataWithJwt(url, reviewData, 'POST');
	    }

	    function getSolutionDetails(solutionNumber, resourceProjection) {
	        var url = udsHostName.clone().setPath('/documentation/solution/' + solutionNumber);
	        if (resourceProjection !== undefined) {
	            url.addQueryParam('resourceProjection', resourceProjection);
	        }
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getSQIQuestions(solutionNumber) {
	        var url = udsHostName.clone().setPath('/documentation/solution/' + solutionNumber + '/reviews/questions');
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    // Allows for UQL for fetching SQIs
	    function getSQIs(uql) {
	        var url = udsHostName.clone().setPath('/documentation/solution/reviews').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function postSQIScore(solutionNumber, reviewData) {
	        var url = udsHostName.clone().setPath('/documentation/solution/' + solutionNumber + '/reviews');
	        return executeUdsAjaxCallWithDataWithJwt(url, reviewData, 'POST');
	    }

	    function getSbrList(resourceProjection, query) {
	        var url = udsHostName.clone().setPath('/user/metadata/sbrs');
	        url.addQueryParam('resourceProjection', resourceProjection);
	        url.addQueryParam('where', query);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchCaseSbrs() {
	        var url = udsHostName.clone().setPath('/case/sbrs');
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    // Unauthed sbrs
	    function fetchCaseSbrsExternal() {
	        var url = udsHostName.clone().setPath('/external/case/sbrs');
	        return executeUdsAjaxCallUnAuthed(url, 'GET');
	    }

	    function pinSolutionToCase(caseNumber, solutionJson) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber);
	        return executeUdsAjaxCallWithDataWithJwt(url, solutionJson, 'PUT');
	    }

	    function removeUserSbr(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/sbr').addQueryParam('where', query);
	        return executeUdsAjaxCallWithJwt(url, 'DELETE');
	    }

	    function getRoleList(query) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles');
	        url.addQueryParam('where', query);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getRoleDetails(roleId) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/' + roleId);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function removeUserRole(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/role').addQueryParam('where', query);
	        return executeUdsAjaxCallWithJwt(url, 'DELETE');
	    }

	    function updateUserRole(userId, role) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/role/' + role.externalModelId);
	        return executeUdsAjaxCallWithDataWithJwt(url, role.resource, 'PUT');
	    }

	    function postAddUsersToSBR(userId, uql, data) {
	        if (uql == null || uql == undefined || uql === '') {
	            throw 'User Query is mandatory';
	        }
	        var url = udsHostName.clone().setPath('/user/' + userId + '/sbr').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithDataWithJwt(url, data, 'POST');
	    }

	    function postAddUsersToRole(userId, uql, data) {
	        if (uql == null || uql == undefined || uql === '') {
	            throw 'User Query is mandatory';
	        }
	        var url = udsHostName.clone().setPath('/user/' + userId + '/role').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithDataWithJwt(url, data, 'POST');
	    }

	    function getOpenCasesForAccount(uql) {
	        var path = '/case';
	        var url = udsHostName.clone().setPath(path).addQueryParam('where', uql);
	        url.addQueryParam('resourceProjection', 'Minimal');
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getCallLogsForCase(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/calls");
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getQuestionDependencies() {
	        var path = '/case/ktquestions';
	        var url = udsHostName.clone().setPath(path);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function postRoleLevel(userId, roleName, roleLevel) {
	        var url = udsHostName.clone().setPath('/user/' + userId + "/role-level/" + roleName);
	        return executeUdsAjaxCallWithDataWithJwt(url, roleLevel, 'PUT');
	    }

	    function postEditPrivateComments(caseNumber, caseComment, caseCommentId, draft) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/" + caseCommentId + "/private");
	        url.addQueryParam('draft', draft);
	        return executeUdsAjaxCallWithDataWithJwt(url, caseComment, 'PUT');
	    }

	    function postPvtToPubComments(caseNumber, caseComment, caseCommentId, draft) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/comments/" + caseCommentId + "/public");
	        url.addQueryParam('draft', draft);
	        return executeUdsAjaxCallWithDataWithJwt(url, caseComment, 'PUT');
	    }

	    function createCaseNep(caseNumber, nep) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/nep");
	        return executeUdsAjaxCallWithDataWithJwt(url, nep, 'POST');
	    }

	    function updateCaseNep(caseNumber, nep) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/nep");
	        return executeUdsAjaxCallWithDataWithJwt(url, nep, 'PUT');
	    }

	    function removeCaseNep(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/nep");
	        return executeUdsAjaxCallWithJwt(url, 'DELETE');
	    }

	    function getAvgCSATForAccount(uql) {
	        var url = udsHostName.clone().setPath('/metrics/CsatAccountAvg').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getCaseContactsForAccount(accountNumber) {
	        var url = udsHostName.clone().setPath('/account/' + accountNumber + "/contacts");
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getCaseGroupsForContact(contactSSO) {
	        var url = udsHostName.clone().setPath('/case/casegroups/user/' + contactSSO);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getRMECountForAccount(uql) {
	        var url = udsHostName.clone().setPath('/case/history').addQueryParam('where', uql);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function addAssociates(caseNumber, jsonAssociates) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/associate");
	        return executeUdsAjaxCallWithDataWithJwt(url, jsonAssociates, 'POST');
	    }

	    function deleteAssociates(caseNumber, jsonAssociates) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/associate");
	        return executeUdsAjaxCallWithDataWithJwt(url, jsonAssociates, 'DELETE');
	    }

	    function fetchSolutionDetails(solutionIdQuery) {
	        var url = udsHostName.clone().setPath('/documentation/solution').addQueryParam('where', solutionIdQuery);
	        url.addQueryParam('resourceProjection', 'Minimal');
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function setHandlingSystem(caseNumber, handlingSystemArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/handlingsystems");
	        return executeUdsAjaxCallWithDataWithJwt(url, handlingSystemArray, 'PUT');
	    }

	    function fetchKCSFromDrupal(id) {
	        var url = udsHostName.clone().setPath('/documentation/drupalapi/' + id);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
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

	        return executeUdsAjaxCallWithJwt(url, 'GET');
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

	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function addCaseSbrs(caseNumber, sbrArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/sbrs");
	        return executeUdsAjaxCallWithDataWithJwt(url, sbrArray, 'PUT');
	    }

	    function removeCaseSbrs(caseNumber, sbrArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/sbrs");
	        return executeUdsAjaxCallWithDataWithJwt(url, sbrArray, 'DELETE');
	    }

	    function getAllRolesList(query) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/query');
	        url.addQueryParam('where', query);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function createRole(roleDetails) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/add');
	        return executeUdsAjaxCallWithDataWithJwt(url, roleDetails, 'POST');
	    }

	    function updateRole(roleId, rolePayload) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/' + roleId);
	        return executeUdsAjaxCallWithDataWithJwt(url, rolePayload, 'PUT');
	    }

	    function deleteRole(roleId) {
	        var url = udsHostName.clone().setPath('/user/metadata/roles/' + roleId);
	        return executeUdsAjaxCallWithJwt(url, 'DELETE');
	    }

	    function getAdditionalContacts(caseNumber) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/contacts");
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function removeAdditionalContacts(caseNumber, contacts) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/contacts");
	        return executeUdsAjaxCallWithDataWithJwt(url, contacts, 'DELETE');
	    }

	    function addAdditionalContacts(caseNumber, contacts) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/contacts");
	        return executeUdsAjaxCallWithDataWithJwt(url, contacts, 'PUT');
	    }

	    function getBrmsResponse(jsonObject) {
	        var url = udsHostName.clone().setPath('/brms');
	        return executeUdsAjaxCallWithDataWithJwt(url, jsonObject, 'POST', 'text');
	    }

	    function fetchTopCasesFromSolr(queryString) {
	        var url = udsHostName.clone().setPath('/solr?' + queryString);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getUserDetailsFromSFDC(userID) {
	        var url = udsHostName.clone().setPath('/salesforce/user/' + userID);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function updateUserDetailsInSFDC(ssoUsername, data) {
	        var url = udsHostName.clone().setPath('/user/salesforce/' + ssoUsername);
	        return executeUdsAjaxCallWithDataWithJwt(url, data, 'PUT');
	    }

	    function getCallCenterFromSFDC(callCenterId) {
	        var url = udsHostName.clone().setPath('/callcenter/' + callCenterId);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function getCaseTagsList() {
	        var url = udsHostName.clone().setPath('/case/tags');
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function addCaseTags(caseNumber, tagsArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/tags");
	        return executeUdsAjaxCallWithDataWithJwt(url, tagsArray, 'PUT');
	    }

	    function removeCaseTags(caseNumber, tagsArray) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + "/tags");
	        return executeUdsAjaxCallWithDataWithJwt(url, tagsArray, 'DELETE');
	    }

	    function fetchPriorityTemplates(uql) {
	        var url = udsHostName.clone().setPath('/user/metadata/templates');
	        url.addQueryParam('where', uql);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchCaseLanguages() {
	        var url = udsHostName.clone().setPath('/case/languages');
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchBugzillas(uql) {
	        var url = udsHostName.clone().setPath('/bug');
	        url.addQueryParam('where', uql);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function fetchBugzillaComments(uql) {
	        var url = udsHostName.clone().setPath('/bug/comments');
	        url.addQueryParam('where', uql);
	        return executeUdsAjaxCallWithJwt(url, 'GET');
	    }

	    function addLanguageToUser(userId, language, type) {
	        if (type !== "primary" && type !== "secondary") type = "primary";
	        var url = udsHostName.clone().setPath('/user/' + userId + '/language/' + type + '/' + language);
	        return executeUdsAjaxCallWithJwt(url, 'POST');
	    }

	    function removeLanguagesFromUser(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/language').addQueryParam('where', query);
	        return executeUdsAjaxCallWithJwt(url, 'DELETE');
	    }

	    function addTagToUser(userId, tagName) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/tag/' + tagName);
	        return executeUdsAjaxCallWithJwt(url, 'POST');
	    }

	    function removeTagsFromUser(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/tag').addQueryParam('where', query);
	        return executeUdsAjaxCallWithJwt(url, 'DELETE');
	    }

	    function addUserAsQB(qbUserId, userId) {
	        var url = udsHostName.clone().setPath('/user/' + qbUserId + '/queuebuddy/' + userId);
	        return executeUdsAjaxCallWithJwt(url, 'POST');
	    }

	    function removeUserQBs(qbUserId, query) {
	        var url = udsHostName.clone().setPath('/user/' + qbUserId + '/queuebuddy').addQueryParam('where', query);
	        return executeUdsAjaxCallWithJwt(url, 'DELETE');
	    }

	    function addNNOToUser(userId, nnoRegion) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/nnoregion/' + nnoRegion);
	        return executeUdsAjaxCallWithJwt(url, 'POST');
	    }

	    function removeNNOsFromUser(userId, query) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/nnoregion').addQueryParam('where', query);
	        return executeUdsAjaxCallWithJwt(url, 'DELETE');
	    }

	    function setGbdSuperRegion(userId, value) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/virtualoffice/' + value);
	        return executeUdsAjaxCallWithJwt(url, 'PUT');
	    }

	    function setOutOfOfficeflag(userId, value) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/out-of-office');
	        return executeUdsAjaxCallWithDataWithJwt(url, value, 'POST');
	    }

	    function updateResourceLink(caseNumber, resourceLink) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + '/resourcelink');
	        return executeUdsAjaxCallWithDataWithJwt(url, resourceLink, 'PUT');
	    }

	    function updateNightShiftForUser(userId, value) {
	        var url = udsHostName.clone().setPath('/user/' + userId + '/nightshift/' + value);
	        return executeUdsAjaxCallWithJwt(url, 'PUT');
	    }

	    function updateCaseAttachment(caseNumber, attachmentId, attachmentDetails) {
	        var url = udsHostName.clone().setPath('/case/' + caseNumber + '/attachment/' + attachmentId);
	        return executeUdsAjaxCallWithDataWithJwt(url, attachmentDetails, 'PUT');
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jsUri
	 * https://github.com/derek-watson/jsUri
	 *
	 * Copyright 2013, Derek Watson
	 * Released under the MIT license.
	 *
	 * Includes parseUri regular expressions
	 * http://blog.stevenlevithan.com/archives/parseuri
	 * Copyright 2007, Steven Levithan
	 * Released under the MIT license.
	 */

	 /*globals define, module */

	(function(global) {

	  var re = {
	    starts_with_slashes: /^\/+/,
	    ends_with_slashes: /\/+$/,
	    pluses: /\+/g,
	    query_separator: /[&;]/,
	    uri_parser: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@]*))?)?@)?(\[[0-9a-fA-F:.]+\]|[^:\/?#]*)(?::(\d+|(?=:)))?(:)?)((((?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	  };

	  /**
	   * Define forEach for older js environments
	   * @see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach#Compatibility
	   */
	  if (!Array.prototype.forEach) {
	    Array.prototype.forEach = function(callback, thisArg) {
	      var T, k;

	      if (this == null) {
	        throw new TypeError(' this is null or not defined');
	      }

	      var O = Object(this);
	      var len = O.length >>> 0;

	      if (typeof callback !== "function") {
	        throw new TypeError(callback + ' is not a function');
	      }

	      if (arguments.length > 1) {
	        T = thisArg;
	      }

	      k = 0;

	      while (k < len) {
	        var kValue;
	        if (k in O) {
	          kValue = O[k];
	          callback.call(T, kValue, k, O);
	        }
	        k++;
	      }
	    };
	  }

	  /**
	   * unescape a query param value
	   * @param  {string} s encoded value
	   * @return {string}   decoded value
	   */
	  function decode(s) {
	    if (s) {
	        s = s.toString().replace(re.pluses, '%20');
	        s = decodeURIComponent(s);
	    }
	    return s;
	  }

	  /**
	   * Breaks a uri string down into its individual parts
	   * @param  {string} str uri
	   * @return {object}     parts
	   */
	  function parseUri(str) {
	    var parser = re.uri_parser;
	    var parserKeys = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "isColonUri", "relative", "path", "directory", "file", "query", "anchor"];
	    var m = parser.exec(str || '');
	    var parts = {};

	    parserKeys.forEach(function(key, i) {
	      parts[key] = m[i] || '';
	    });

	    return parts;
	  }

	  /**
	   * Breaks a query string down into an array of key/value pairs
	   * @param  {string} str query
	   * @return {array}      array of arrays (key/value pairs)
	   */
	  function parseQuery(str) {
	    var i, ps, p, n, k, v, l;
	    var pairs = [];

	    if (typeof(str) === 'undefined' || str === null || str === '') {
	      return pairs;
	    }

	    if (str.indexOf('?') === 0) {
	      str = str.substring(1);
	    }

	    ps = str.toString().split(re.query_separator);

	    for (i = 0, l = ps.length; i < l; i++) {
	      p = ps[i];
	      n = p.indexOf('=');

	      if (n !== 0) {
	        k = decode(p.substring(0, n));
	        v = decode(p.substring(n + 1));
	        pairs.push(n === -1 ? [p, null] : [k, v]);
	      }

	    }
	    return pairs;
	  }

	  /**
	   * Creates a new Uri object
	   * @constructor
	   * @param {string} str
	   */
	  function Uri(str) {
	    this.uriParts = parseUri(str);
	    this.queryPairs = parseQuery(this.uriParts.query);
	    this.hasAuthorityPrefixUserPref = null;
	  }

	  /**
	   * Define getter/setter methods
	   */
	  ['protocol', 'userInfo', 'host', 'port', 'path', 'anchor'].forEach(function(key) {
	    Uri.prototype[key] = function(val) {
	      if (typeof val !== 'undefined') {
	        this.uriParts[key] = val;
	      }
	      return this.uriParts[key];
	    };
	  });

	  /**
	   * if there is no protocol, the leading // can be enabled or disabled
	   * @param  {Boolean}  val
	   * @return {Boolean}
	   */
	  Uri.prototype.hasAuthorityPrefix = function(val) {
	    if (typeof val !== 'undefined') {
	      this.hasAuthorityPrefixUserPref = val;
	    }

	    if (this.hasAuthorityPrefixUserPref === null) {
	      return (this.uriParts.source.indexOf('//') !== -1);
	    } else {
	      return this.hasAuthorityPrefixUserPref;
	    }
	  };

	  Uri.prototype.isColonUri = function (val) {
	    if (typeof val !== 'undefined') {
	      this.uriParts.isColonUri = !!val;
	    } else {
	      return !!this.uriParts.isColonUri;
	    }
	  };

	  /**
	   * Serializes the internal state of the query pairs
	   * @param  {string} [val]   set a new query string
	   * @return {string}         query string
	   */
	  Uri.prototype.query = function(val) {
	    var s = '', i, param, l;

	    if (typeof val !== 'undefined') {
	      this.queryPairs = parseQuery(val);
	    }

	    for (i = 0, l = this.queryPairs.length; i < l; i++) {
	      param = this.queryPairs[i];
	      if (s.length > 0) {
	        s += '&';
	      }
	      if (param[1] === null) {
	        s += param[0];
	      } else {
	        s += param[0];
	        s += '=';
	        if (typeof param[1] !== 'undefined') {
	          s += encodeURIComponent(param[1]);
	        }
	      }
	    }
	    return s.length > 0 ? '?' + s : s;
	  };

	  /**
	   * returns the first query param value found for the key
	   * @param  {string} key query key
	   * @return {string}     first value found for key
	   */
	  Uri.prototype.getQueryParamValue = function (key) {
	    var param, i, l;
	    for (i = 0, l = this.queryPairs.length; i < l; i++) {
	      param = this.queryPairs[i];
	      if (key === param[0]) {
	        return param[1];
	      }
	    }
	  };

	  /**
	   * returns an array of query param values for the key
	   * @param  {string} key query key
	   * @return {array}      array of values
	   */
	  Uri.prototype.getQueryParamValues = function (key) {
	    var arr = [], i, param, l;
	    for (i = 0, l = this.queryPairs.length; i < l; i++) {
	      param = this.queryPairs[i];
	      if (key === param[0]) {
	        arr.push(param[1]);
	      }
	    }
	    return arr;
	  };

	  /**
	   * removes query parameters
	   * @param  {string} key     remove values for key
	   * @param  {val}    [val]   remove a specific value, otherwise removes all
	   * @return {Uri}            returns self for fluent chaining
	   */
	  Uri.prototype.deleteQueryParam = function (key, val) {
	    var arr = [], i, param, keyMatchesFilter, valMatchesFilter, l;

	    for (i = 0, l = this.queryPairs.length; i < l; i++) {

	      param = this.queryPairs[i];
	      keyMatchesFilter = decode(param[0]) === decode(key);
	      valMatchesFilter = param[1] === val;

	      if ((arguments.length === 1 && !keyMatchesFilter) || (arguments.length === 2 && (!keyMatchesFilter || !valMatchesFilter))) {
	        arr.push(param);
	      }
	    }

	    this.queryPairs = arr;

	    return this;
	  };

	  /**
	   * adds a query parameter
	   * @param  {string}  key        add values for key
	   * @param  {string}  val        value to add
	   * @param  {integer} [index]    specific index to add the value at
	   * @return {Uri}                returns self for fluent chaining
	   */
	  Uri.prototype.addQueryParam = function (key, val, index) {
	    if (arguments.length === 3 && index !== -1) {
	      index = Math.min(index, this.queryPairs.length);
	      this.queryPairs.splice(index, 0, [key, val]);
	    } else if (arguments.length > 0) {
	      this.queryPairs.push([key, val]);
	    }
	    return this;
	  };

	  /**
	   * test for the existence of a query parameter
	   * @param  {string}  key        add values for key
	   * @param  {string}  val        value to add
	   * @param  {integer} [index]    specific index to add the value at
	   * @return {Uri}                returns self for fluent chaining
	   */
	  Uri.prototype.hasQueryParam = function (key) {
	    var i, len = this.queryPairs.length;
	    for (i = 0; i < len; i++) {
	      if (this.queryPairs[i][0] == key)
	        return true;
	    }
	    return false;
	  };

	  /**
	   * replaces query param values
	   * @param  {string} key         key to replace value for
	   * @param  {string} newVal      new value
	   * @param  {string} [oldVal]    replace only one specific value (otherwise replaces all)
	   * @return {Uri}                returns self for fluent chaining
	   */
	  Uri.prototype.replaceQueryParam = function (key, newVal, oldVal) {
	    var index = -1, len = this.queryPairs.length, i, param;

	    if (arguments.length === 3) {
	      for (i = 0; i < len; i++) {
	        param = this.queryPairs[i];
	        if (decode(param[0]) === decode(key) && decodeURIComponent(param[1]) === decode(oldVal)) {
	          index = i;
	          break;
	        }
	      }
	      if (index >= 0) {
	        this.deleteQueryParam(key, decode(oldVal)).addQueryParam(key, newVal, index);
	      }
	    } else {
	      for (i = 0; i < len; i++) {
	        param = this.queryPairs[i];
	        if (decode(param[0]) === decode(key)) {
	          index = i;
	          break;
	        }
	      }
	      this.deleteQueryParam(key);
	      this.addQueryParam(key, newVal, index);
	    }
	    return this;
	  };

	  /**
	   * Define fluent setter methods (setProtocol, setHasAuthorityPrefix, etc)
	   */
	  ['protocol', 'hasAuthorityPrefix', 'isColonUri', 'userInfo', 'host', 'port', 'path', 'query', 'anchor'].forEach(function(key) {
	    var method = 'set' + key.charAt(0).toUpperCase() + key.slice(1);
	    Uri.prototype[method] = function(val) {
	      this[key](val);
	      return this;
	    };
	  });

	  /**
	   * Scheme name, colon and doubleslash, as required
	   * @return {string} http:// or possibly just //
	   */
	  Uri.prototype.scheme = function() {
	    var s = '';

	    if (this.protocol()) {
	      s += this.protocol();
	      if (this.protocol().indexOf(':') !== this.protocol().length - 1) {
	        s += ':';
	      }
	      s += '//';
	    } else {
	      if (this.hasAuthorityPrefix() && this.host()) {
	        s += '//';
	      }
	    }

	    return s;
	  };

	  /**
	   * Same as Mozilla nsIURI.prePath
	   * @return {string} scheme://user:password@host:port
	   * @see  https://developer.mozilla.org/en/nsIURI
	   */
	  Uri.prototype.origin = function() {
	    var s = this.scheme();

	    if (this.userInfo() && this.host()) {
	      s += this.userInfo();
	      if (this.userInfo().indexOf('@') !== this.userInfo().length - 1) {
	        s += '@';
	      }
	    }

	    if (this.host()) {
	      s += this.host();
	      if (this.port() || (this.path() && this.path().substr(0, 1).match(/[0-9]/))) {
	        s += ':' + this.port();
	      }
	    }

	    return s;
	  };

	  /**
	   * Adds a trailing slash to the path
	   */
	  Uri.prototype.addTrailingSlash = function() {
	    var path = this.path() || '';

	    if (path.substr(-1) !== '/') {
	      this.path(path + '/');
	    }

	    return this;
	  };

	  /**
	   * Serializes the internal state of the Uri object
	   * @return {string}
	   */
	  Uri.prototype.toString = function() {
	    var path, s = this.origin();

	    if (this.isColonUri()) {
	      if (this.path()) {
	        s += ':'+this.path();
	      }
	    } else if (this.path()) {
	      path = this.path();
	      if (!(re.ends_with_slashes.test(s) || re.starts_with_slashes.test(path))) {
	        s += '/';
	      } else {
	        if (s) {
	          s.replace(re.ends_with_slashes, '/');
	        }
	        path = path.replace(re.starts_with_slashes, '/');
	      }
	      s += path;
	    } else {
	      if (this.host() && (this.query().toString() || this.anchor())) {
	        s += '/';
	      }
	    }
	    if (this.query().toString()) {
	      s += this.query().toString();
	    }

	    if (this.anchor()) {
	      if (this.anchor().indexOf('#') !== 0) {
	        s += '#';
	      }
	      s += this.anchor();
	    }

	    return s;
	  };

	  /**
	   * Clone a Uri object
	   * @return {Uri} duplicate copy of the Uri
	   */
	  Uri.prototype.clone = function() {
	    return new Uri(this.toString());
	  };

	  /**
	   * export via AMD or CommonJS, otherwise leak a global
	   */
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return Uri;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	    module.exports = Uri;
	  } else {
	    global.Uri = Uri;
	  }
	}(this));


/***/ }
/******/ ])
});
;