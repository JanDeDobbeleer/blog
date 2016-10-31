SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: 'https://herebedragons.io/search.json',
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: '¯\\_(ツ)_/¯',
    limit: 10,
    fuzzy: false,
    exclude: ['Welcome']
});