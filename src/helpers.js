export function formatPercentage(num) {
	return Math.round(num * 100) / 100;
};

export function getClassName(id) {
	const classes = {
		1: 'Warrior',
		2: 'Paladin',
		3: 'Hunter',
		4: 'Rogue',
		5: 'Priest',
		6: 'Death Knight',
		7: 'Shaman',
		8: 'Mage',
		9: 'Warlock',
		10: 'Monk',
		11: 'Druid',
		12: 'Demon Hunter'
	};

	return classes[id];
};

export function isEmpty(obj) {
	for (let prop in obj) {
		return false;
	}

	return true;
}

export function showLoader() {
	let overlay = document.getElementById('overlay');
	let loader = document.getElementById('loader');

	overlay.style.display = 'inline-block';
	loader.style.display = 'inline-block';
}

export function hideLoader() {
	let overlay = document.getElementById('overlay');
	let loader = document.getElementById('loader');

	overlay.style.display = 'none';
	loader.style.display = 'none';
}