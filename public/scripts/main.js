// VARIABLES
let age = $('input[name=age]').val();
let centimeters = $('input[placeholder=Centimeters]').val();
let weight = $('input[name=weight]').val();
let activityLevel = $('#activityLevel').val()
let str = '.exercise'


//EXERCISE ARRAYS
let exerciseBtnArray = ['.fullBody', '.backBicep', '.chestTricep', '.legGlute', '.shoulderAbs'];
let fullBodyArray = ['Squat', 'Push Up', 'Pull Up', 'Bicep Curls', 'Sit Ups', 'Tricep Extension'];
let backBicepsArray = ['Barbell Deadlift', 'Single Arm Rows', 'Bicep Curls', 'Lat Pull Downs', 'Hammer Curls', 'Pull Ups'];
let chestTricpesArray = ['Chest Press', 'Push Up', 'Tricep Extension', 'Incline Bench Press', 'Skullcrushers', 'Cable Flys']
let legGlutesArray = ['Squat', 'Romanian Deadlift', 'Leg Press', 'Leg Extension', 'Cable Kickbacks', 'Calve Raises']
let shoulderAbsArray = ['Overhead Press', 'Sit Ups', 'Arnold Press', 'Ab Bicylces', 'Lateral Raises', 'Russian Twists']


// FUNCTIONS
$('document').ready(function() {

	$('input[name=units]').on('change', function() {
		console.log('working');

		if ($(this).val() == "metric") {
			$('input[placeholder=Feet]').hide();
			$('input[placeholder=Inches]').attr('placeholder', 'Centimeters');
			$('input[placeholder=Centimeters]').removeClass('small-input');
			$('input[placeholder=Pounds]').attr('placeholder', 'Kilograms');

		} else {
			$('input[placeholder=Feet]').show();
			$('input[placeholder=Centimeters]').attr('placeholder', 'Inches').addClass('small-input');
			$('input[placeholder=Kilograms]').attr('placeholder', 'Pounds');
		}
	});

	$('#nutritionSubmit').click(function() {
		if ($('#unitsMetric:checked').val() == 'metric') {
			console.log('you chose metric!');

			if ($('#sexFemale:checked').val() == 'female') {
				console.log('you chose female!');

				let BMR = 655.1 + (9.563 * $('input[name=weight]').val()) + (1.850 * $('input[placeholder=Centimeters]').val()) - (4.676 * $('input[name=age]').val());

				printValues(BMR);

			} else if ($('#sexMale:checked').val() == 'male') {
				console.log('you chose male!');

				let BMR = 66.5 + (13.75 * $('input[name=weight]').val()) + (5.003 * $('input[placeholder=Centimeters]').val()) - (6.755 * $('input[name=age]').val());

				printValues(BMR);
			}
		} else {
			console.log('you chose imperial!');

			if ($('#sexFemale:checked').val() == 'female') {
				console.log('you chose female!');

				let BMR = 655.1 + (4.35 * $('input[name=weight]').val()) + (4.7 * ( 12 * $('input[placeholder=Feet]').val() + $('input[placeholder=Inches]').val())) - (4.7 * $('input[name=age]').val());

				printValues(BMR);

			} else if ($('#sexMale:checked').val() == 'male') {
				console.log('you chose male!');

				let BMR = 655.1 + (4.35 * $('input[name=weight]').val()) + (4.7 * ($('input[placeholder=Inches]').val() + ($('input[placeholder=Feet]').val() * 12)) - (4.7 * $('input[name=age]').val()));

				printValues(BMR);
			}
		}
		$('.card').toggleClass('flipped');
		return false;
	});

	$('.circle-set').click(function () {
		if($(this).hasClass('circle-click')) {
			$(this).removeClass('circle-click')
		} else {
		$(this).addClass('circle-click');
	}
	})

	$('.fullBody').click(function() {	
		checkButtons();
		$(this).addClass('exerciseBtn-clicked');

		for (let i = 1; i <= fullBodyArray.length; i++) {
			$(str + i).text(fullBodyArray[i]);
		}
	});

	$('.backBicep').click(function() {
		checkButtons();
		$(this).addClass('exerciseBtn-clicked');

		for (let i = 1; i <= backBicepsArray.length; i++) {
			$(str + i).text(backBicepsArray[i]);
		}
	});

	$('.chestTricep').click(function() {
		checkButtons();
		$(this).addClass('exerciseBtn-clicked');
		
		for (let i = 1; i <= chestTricpesArray.length; i++) {
			$(str + i).text(chestTricpesArray[i]);
		}
	});

	$('.legGlute').click(function() {
		checkButtons();
		$(this).addClass('exerciseBtn-clicked');

		for (let i = 1; i <= legGlutesArray.length; i++) {
			$(str + i).text(legGlutesArray[i]);
		}
	});

	$('.shoulderAbs').click(function() {
		checkButtons();
		$(this).addClass('exerciseBtn-clicked');
		
		for (let i = 1; i <= shoulderAbsArray.length; i++) {
			$(str + i).text(shoulderAbsArray[i]);
		}
	});
});

// REPEATABLE FUNCTIONS

function checkButtons() {
	for (var i = 0; i <= exerciseBtnArray.length; i++) {
		if ($(exerciseBtnArray[i]).hasClass('exerciseBtn-clicked')) {
			$(exerciseBtnArray[i]).removeClass('exerciseBtn-clicked')
		};
		}
}


function printValues(BMR) {
	let TDEE = BMR * $('#activityLevel').val();
	let Protein = (TDEE * 0.30) / 4;
	let Fats = (TDEE * 0.30) / 9;
	let Carbs = (TDEE * 0.4) / 4;
	$('p.resultBMR').text(Math.ceil(BMR) + ' Calories');
	$('p.resultTDEE').text(Math.ceil(TDEE) + ' Calories');
	$('p.resultProtein').text(Math.ceil(Protein) + ' Grams');
	$('p.resultCarbs').text(Math.ceil(Carbs) + ' Grams');
	$('p.resultFats').text(Math.ceil(Fats) + ' Grams');
}




