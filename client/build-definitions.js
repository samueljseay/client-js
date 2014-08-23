//var c = require('../vendor/conformance.json');
YUI.add('fhir-build-definitions', function(Y) {
	var definitions = {};

	var camelCased = function(s){
		return s.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
	};

	c.rest[0].resource.forEach(function(r){
		var params = [];
		definitions[r.type] = {
			params: params
		};

		r.searchParam.forEach(function(sp){
			params.push({
				name: camelCased(sp.name),
				wireName: sp.name,
				type: sp.type
			});
		});
	});
});



