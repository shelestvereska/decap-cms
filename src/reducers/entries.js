import { Map, List, fromJS } from 'immutable';
import {
  ENTRY_REQUEST, ENTRY_SUCCESS, ENTRIES_REQUEST, ENTRIES_SUCCESS, SEARCH_ENTRIES_REQUEST, SEARCH_ENTRIES_SUCCESS
} from '../actions/entries';

let collection, loadedEntries, page;

const entries = (state = Map({ entities: Map(), pages: Map() }), action) => {
  switch (action.type) {
    case ENTRY_REQUEST:
      return state.setIn(['entities', `${action.payload.collection}.${action.payload.slug}`, 'isFetching'], true);

    case ENTRY_SUCCESS:
      return state.setIn(
        ['entities', `${action.payload.collection}.${action.payload.entry.slug}`],
        fromJS(action.payload.entry)
      );

    case ENTRIES_REQUEST:
      return state.setIn(['pages', action.payload.collection, 'isFetching'], true);

    case ENTRIES_SUCCESS:
      collection = action.payload.collection;
      loadedEntries = action.payload.entries;
      page = action.payload.page;
      return state.withMutations((map) => {
        loadedEntries.forEach((entry) => (
          map.setIn(['entities', `${collection}.${entry.slug}`], fromJS(entry).set('isFetching', false))
        ));
        map.setIn(['pages', collection], Map({
          page: page,
          ids: map.getIn(['pages', collection, 'ids'], List()).concat(List(loadedEntries.map((entry) => entry.slug)))
        }));
      });

    case SEARCH_ENTRIES_REQUEST:
      return state.set('search', Map({ isFetching: true }));

    case SEARCH_ENTRIES_SUCCESS:
      loadedEntries = action.payload.entries;
      page = action.payload.page;
      return state.withMutations((map) => {
        loadedEntries.forEach((entry) => (
          map.setIn(['entities', `${entry.collection}.${entry.slug}`], fromJS(entry).set('isFetching', false))
        ));
        map.set('search', Map({
          page: page,
          ids: map.getIn(['search', 'ids'], List()).concat(List(loadedEntries.map(entry => (
            { collection: entry.collection, slug: entry.slug }
          ))))
        }));
      });


    default:
      return state;
  }
};

export const selectEntry = (state, collection, slug) => (
  state.getIn(['entities', `${collection}.${slug}`])
);

export const selectEntries = (state, collection) => {
  const slugs = state.getIn(['pages', collection, 'ids']);
  return slugs && slugs.map((slug) => selectEntry(state, collection, slug));
};

export const selectSearchedEntries = (state) => {
  const searchItems = state.getIn(['search', 'ids']);
  return searchItems && searchItems.map(({ collection, slug }) => selectEntry(state, collection, slug));
};

export default entries;
