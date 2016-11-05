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
