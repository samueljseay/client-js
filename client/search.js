YUI.add('fhir-search', function(Y) {
	var Q = Y.Q;

	function Search(p) {

		var search = {};

		search.client = p.client;
		search.spec = p.spec;
		search.count = p.count || 50;

		var nextPageUrl = null;

		function gotFeed(d){
			return function(tx, response) {
				nextPageUrl = null;
				var feed = Y.JSON.parse(response.responseText);

				if(feed.link) {
					var next = feed.link.filter(function(l){
						return l.rel === "next";
					});

					if (next.length === 1) {
						nextPageUrl = next[0].href
					}
				}

				var results = search.client.indexFeed(feed);
				d.resolve(results, search);
			};
		};

		function failedFeed(d){
			return function(failure){
				d.reject("Search failed.", arguments);
			}
		};

		search.hasNext = function(){
			return nextPageUrl !== null;
		};

		search.next = function() {
			var ret = Q.defer();

			if (nextPageUrl === null) {
				throw "Next page of search not available!";
			}

			var searchParams = {
				method: 'GET',
				url: nextPageUrl,
				traditional: true,
				headers: {
					'Accept': 'application/json'
				},
				on: {
					success: gotFeed(ret),
					failure: failedFeed(ret)
				}
			};

			console.log("Nexting", searchParams);

			Y.io(searchParams.url, search.client.authenticated(searchParams));

			return ret;
		};

		search.execute = function() {
			var ret = Q.defer();

			var searchParams = {
				method: 'GET',
				url: search.client.urlFor(search.spec),
				data: search.spec.queryParams(),
				traditional: true,
				headers: {
					'Accept': 'application/json'
				},
				on: {
					success: gotFeed(ret),
					failure: failedFeed(ret)
				}
			};

			Y.io(searchParams.url,
				search.client.authenticated(searchParams)
			);

			return ret.promise;
		};

		return search;
	}

	Y.namespace('FHIR').Search = Search;
}, '0.0.1', {
    requires: ['io-base', 'yui-q','json-parse']
});
