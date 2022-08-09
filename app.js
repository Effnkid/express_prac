const express = require(`express`);
const path = require('path');

const app = express();
const PORT = 1337;
app.use('*', (req, res, next) => {
	next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.get(`/`, (req, res) => {
	res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Hello World</h1>
     </body>
    </html>
  `);
});
app.get(`/puppies`, (req, res) => {
	res.send(`<h1>Puppies</h1>`);
});

app.get(`/kittens`, (req, res) => {
	res.send(`<h1>Kittens</h1>`);
});

const list = [{ name: 'Levar' }, { name: 'Anthony' }, { name: 'Bobb-Semple' }];

app.get('/products', (req, res) => {
	res.send(
		`<h1>${list.reduce((accum, next) => {
			accum += ` ${next.name}`;
			return accum;
		}, ' ')}</h1>`
	);
});

app.get(`/products/:id`, (req, res) => {
	const id = req.params.id;
	res.send(
		`		<div>
			<h1>${list[id].name}</h1>
      <img src='
		</div>`
	);
});
