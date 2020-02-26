import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Triangle } from './triangle.js';

$(document).ready(function() {
	$('.input-form').submit(function(event) {
		event.preventDefault();
		let side1 = parseInt($('#input-side1').val());
		let side2 = parseInt($('#input-side2').val());
		let side3 = parseInt($('#input-side3').val());
		let triangle = new Triangle(side1, side2, side3);
		let result = triangle.checkType(side1, side2, side3);
		console.log(result);
		$('#display-output').text(result);
	});
});
