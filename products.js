const router = require('express').Router();
const list = [{ name: 'Levar' }, { name: 'Anthony' }, { name: 'Bobb-Semple' }];
router.get('/', (req, res) => {
	res.send(
		`<h1>${list.reduce((accum, next) => {
			accum += ` ${next.name}`;
			return accum;
		}, ' ')}</h1>`
	);
});

router.get(`/:id`, (req, res) => {
	const id = req.params.id;
	res.send(
		`		<div>
			<h1>${list[id].name}</h1>
      <img src='
		</div>`
	);
});

module.exports = router;
