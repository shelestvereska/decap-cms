import Algolia from './search/algolia/implementation';

class Search {
  constructor(implementation) {
    this.implementation = implementation;
  }

  search(collection, query) {
    return this.implementation.search(collection, query).then((response) => {
      return {
        pagination: response.page,
        entries: response.entries.map(this.entryWithFormat(collection))
      };
    });
  }

  entries(collection, page, perPage) {
    return this.implementation.entries(collection, page, perPage);
  }

  entry(collection, slug) {
    return this.implementation.entry(collection, slug);
  }

}

export function resolveSearchIntegration(config) {
  const name = config.getIn(['integrations', 'search', 'name']);
  if (name == null) {
    throw 'No Search defined in configuration';
  }
  switch (name) {
    case 'algolia':
      return new Search(new Algolia(config));
    default:
      throw `Search provider not found: ${name}`;
  }
}

export const currentSearchIntegration = (function() {
  let search = null;

  return (config) => {
    if (search) { return search; }
    if (config.getIn(['integrations', 'search'])) {
      return search = resolveSearchIntegration(config);
    }
  };
})();
