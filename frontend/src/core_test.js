/**
 * Created by luiscunha on 3/23/16.
 */

import {List} from 'immutable';

export function setEntries0(state, entries) {
    return state.set('entries', entries);
}
export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}

export function next(state) {
    const entries = state.get('entries');
    return state.merge({
        vote: Map({pair: entries.take(2)}),
        entries: entries.skip(2)
    });
}