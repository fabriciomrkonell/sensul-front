'use strict'

angular.module('Sensul.controllers', []);

angular.module('Sensul.services', []);

angular.module('Sensul', ['Sensul.controllers', 'Sensul.services']);

angular.element(document).ready(function() {
	angular.bootstrap(document, ['Sensul']);
});