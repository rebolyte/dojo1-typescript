require({
	baseUrl: '.',
	packages: [
		{
			name: 'dojo',
			location: '../lib/dojo-sdk/dojo'
		}, {
			name: 'dijit',
			location: '../lib/dojo-sdk/dijit'
		}, {
			name: 'dojox',
			location: '../lib/dojo-sdk/dojox'
		},{
			name: 'src',
			location: 'built'
		}
	]
}, ['src/main', 'dojo/domReady!' ], function (main) {

	console.log('bootstrapping');

	main.init();
	
});