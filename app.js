const express = require(`express`);
const path = require('path');
const productsRouter = require('./products');
const muppetRouter = require('./muppets');

const app = express();
const PORT = 1337;
app.use('*', (req, res, next) => {
	next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productsRouter);

app.use('/muppets', muppetRouter);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

// const list = [{ name: 'Levar' }, { name: 'Anthony' }, { name: 'Bobb-Semple' }];

// app.get('/products', (req, res) => {

// });

// app.get(`/products/:id`, (req, res) => {
// 	const id = req.params.id;
// 	res.send(
// 		`		<div>
// 			<h1>${list[id].name}</h1>
//       <img src='
// 		</div>`
// 	);
// });
