const router = require('express').Router();
const Characters = [
	{
		name: 'Kermit',
		movieId: 1,
		animal: 'frog',
	},
	{
		name: 'Fozzie',
		movieId: 2,
		animal: 'bear',
	},
	{
		name: 'Gonzo',
		movieId: 3,
		animal: 'alien',
	},
	{
		name: 'Ms Piggy',
		movieId: 4,
		animal: 'pig',
	},
];

router.get('/', (req, res) => {
	res.send(Characters);
});
router.get('/:id', (req, res) => {
	const id = req.params.id;
	res.send(
		`<div><p>${Characters[id].name} is a ${Characters[id].animal}</p></div>`
	);
});

module.exports = router;
