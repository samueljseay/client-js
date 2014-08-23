YUI.add('fhir-namespace', function(Y) {
	Y.namespace('FHIR').Namespace = {
		any: 'special::any_namespace',
		none: 'special::no_namespace',
		loinc: 'http://loinc.org',
		ucum: 'http://unitsofmeasure.org',
		snomed: 'http://snomed.info/sct',
		rxnorm: 'http://rxnav.nlm.nih.gov/REST/rxcui'
	};
});


