/**
 * Created by luiscunha on 3/23/16.
 * http://redux.js.org/docs/recipes/WritingTests.html
 */

import {expect, should, have} from 'chai';
import "./test_helper.js";
import {List, Map} from 'immutable';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';
import {setEntries} from '../src/core_test.js';
import deepFreeze from 'deep-freeze';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as requesterActions from '../src/actions/userInfo'
import * as dpccActions from '../src/actions/newRequest'
import * as types from '../src/actions/ActionTypes'
import adduserReducer from '../src/reducers/user'
import {API_ENDPOINT} from "../src/config"
import {checkStatus, parseJSON} from '../src/utils/utils';
import 'isomorphic-fetch';

//import {SampleID} from '../src/components/sample.js';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('immutability', () => {

    describe('a number', () => {

        function increment(currentState) {
            return currentState + 1;
        }

        it('is immutable', () => {
            let state = 42;
            let nextState = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });

    });

    describe('A List', () => {

        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }

        it('is immutable', () => {
            let state = List.of('Trainspotting', '28 Days Later');
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine'
            ));
            expect(state).to.equal(List.of(
                'Trainspotting',
                '28 Days Later'
            ));
        });

    });

    describe('a tree', () => {

        function addMovie(currentState, movie) {
            return currentState.set(
                'movies',
                currentState.get('movies').push(movie)
            );
        }

        it('is immutable', () => {
            let state = Map({
                movies: List.of('Trainspotting', '28 Days Later')
            });
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later',
                    'Sunshine'
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later'
                )
            }));
        });

    });

    describe('application logic', () => {

        describe('setEntries', () => {

            it('adds the entries to the state', () => {
                const state = Map();
                const entries = List.of('Trainspotting', '28 Days Later');
                const nextState = setEntries(state, entries);
                expect(nextState).to.equal(Map({
                    entries: List.of('Trainspotting', '28 Days Later')
                }));
            });

        });

    });

    describe('application logic', () => {

        describe('setEntries', () => {

            it('converts to immutable', () => {
                const state = Map();
                const entries = ['Trainspotting', '28 Days Later'];
                const nextState = setEntries(state, entries);
                expect(nextState).to.equal(Map({
                    entries: List.of('Trainspotting', '28 Days Later')
                }));
            });
        });

    });

    describe('samples', () => {

        it('creates list of samples', () => {
            const addCounter = (list) => {
                "use strict";
                return [...list, 0];
            }

            const testAddCounter = () => {
                "use strict";
                const listBefore = [];
                const listAfter = [0];

                deepFreeze(listBefore);

                expect(addCounter(listBefore)).to.eql(listAfter);
            };
            testAddCounter();
        });

    });
});


describe('Store', () => {
    describe('User store.', () => {
        const userInfo = {
            name: "Stephan Bour",
            institution: "DIFZ",
            street_addres: "656 Quince Orchard",
            city: "Gaithersburg",
            state_province: "Maryland",
            zipcode: "80878",
            country: "USA",
            daytime_phone: "240-417-7945",
            email: "stephanb@difz.com"
        }
        const action = {type: types.ADD_USER, user: userInfo}

        it('Executes addUser action', () => {
            const store = mockStore({user: []})


            const expectedActions = [
                action
            ]

            return store.dispatch(requesterActions.addUser(userInfo)).then(() => {
                expect(store.getActions()).to.eql(expectedActions)
                //console.log(store.getState());
                //console.log(store.getActions());
            })
        }),

            it('Adds a user to the store', () => {
                var _ = adduserReducer([], action)
                expect(
                    adduserReducer([], action)
                ).to.eql(
                    userInfo
                )
            })
    })
    /*
     describe('dpccSamples store.', () => {
     const userInfo={name: "Stephan Bour"}
     const sample = [{
     authorized:true,
     center_name:"CRIP",
     collection_country:"USA",
     contributing_institution:"CIP119",
     host_category:"Non-human Mammal",
     host_common_name:"Northern fur seal",
     host_family:"Otariidae",
     host_genus:"Callorhinus",
     host_natural_state:"W",
     host_order:"Carnivora",
     host_species:"Callorhinus ursinus",
     id:0,
     influenza_test_array:["NA"],
     influenza_test_interpretation:["NA"],
     influenza_test_positivity:"U",
     influenza_test_type:["NA"],
     lat_long:"37.8349,-122.5309",
     modified_date:"2016-01-20T12:50:37Z",
     new_sample:false,
     project_identifier:"SP4-Boyce_5004",
     sample_id:1135970047824,
     sample_identifier:"NFS-281-S",
     sample_status:"Completed",
     submission_id:1135969561619,
     submission_time_id:"2015-04-03T03:08:00Z",
     submission_type:"Animal Surveillance",
     submitter_name:"MMRichter",
     template_type:"Submission for Non-Human Mammal Surveillance"
     }]
     var s = {}
     s["sample"] = s
     s["sampleID"] = "sample"

     const action = { type: types.ADD_SAMPLE, sample: sample, id:0, "sampleID": "sample"}

     it('Adds sample', () => {
     const store = mockStore({ dpccSamples: [] })

     const userInfo={name: "Stephan Bour"}
     const expectedActions = [
     action
     ]

     store.dispatch(dpccActions.dpccSamplesSuccess("sample", s))
     expect(store.getActions()).to.eql(expectedActions)
     //console.log(store.getState());
     //console.log(store.getActions());

     }),
     })*/

})


/* ************************************************************
 * ***************   TEST API    ******************************
 * ************************************************************/

var _fetch = function (fetch_params, url) {
    "use strict";

    var fetchParams = fetch_params
    return new Promise(function (resolve, reject) {

        fetch(url, fetchParams)
            .then(checkStatus)
            .then(parseJSON)
            .then(json => {
                resolve(json)

            })
            .catch(error => {
                resolve("OOPS")
                const response = error.response;
                console.log("Err", response)
                if (response === undefined) {
                    console.error("fail")
                } else {
                    parseJSON(response)
                        .then(json => {
                            error.status = response.status;
                            error.statusText = response.statusText;
                            error.message = json.message;
                            console.log("Res", response, "error", error)
                        });
                }
            });
    })
}


var getAuthToken = (username) => {
    "use strict";
    var fetchParams = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': '',
            'Host': 'localhost',
        }
    }
    var url = "http://localhost:8070/authorizationtoken/" + username
    return _fetch(fetchParams, url)
}

describe('Extracts: ', () => {
    var url = "http://localhost:8070/extracts/"
    var fetchParams = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': '',
            'Host': 'localhost',
        }
    }

    describe('Receive only intended results: ', () => {
        "use strict";
        it('Does not receive data for user not in ldap', () => {

            var authorization_token = getAuthToken("lfcunha")
            return authorization_token.then(function (token) {
                fetchParams.headers['AuthToken'] = 'Bearer ' + token
                var result = _fetch(fetchParams, url);
                return result.then(function (data) {
                    expect(data).to.eql({status: false, error: 'no such user'});
                });
            });
        })


        it("Core User Receive data only from own core", () => {
            var authorization_token = getAuthToken("mtsinaivanbakelcoretest4")
            return authorization_token.then(function (token) {
                fetchParams.headers['AuthToken'] = 'Bearer ' + token
                var result = _fetch(fetchParams, url);
                return result.then(function (data) {
                    expect(data.core).to.eql(true);
                    data.extracts.map(function (extract, index) {
                        expect(extract.digs).to.eql("MtSinai-van Bakel Core")
                    })
                })
            });
        })

        it("Non core User Receive data from institutions defined in Read Roles", () => {
            var authorization_token = getAuthToken("mmrichter")
            return authorization_token.then(function (token) {
                fetchParams.headers['AuthToken'] = 'Bearer ' + token
                var result = _fetch(fetchParams, url);
                return result.then(function (data) {
                    expect(data.core).to.eql(false);
                    data.extracts.map(function (extract, index) {
                        expect(data.user_roles).to.include.keys(extract.institution)
                    })
                })
            });
        })

        it("Wide roles User Receive data from all institutions defined in Read Roles", () => {
            var authorization_token = getAuthToken("mdegrace")
            return authorization_token.then(function (token) {
                fetchParams.headers['AuthToken'] = 'Bearer ' + token
                var result = _fetch(fetchParams, url);
                return result.then(function (data) {
                    expect(data.core).to.eql(false);
                    data.extracts.map(function (extract, index) {
                        expect(data.user_roles).to.include.keys(extract.institution)
                    })
                })
            });
        })
    })
})

