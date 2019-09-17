const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes/posts');
// const client = require('./db');
// const postList = require('./views/postList');
// const postDetails = require('./views/postDetails');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.urlencoded({ extended: true }));
app.use('/posts', routes);

app.get('/', (req, res) => {
	res.redirect('/posts');
});

// app.get("/", async (req, res, next) => {
//   try {
//     const data = await client.query(baseQuery);
//     res.send(postList(data.rows));
//   } catch (error) { next(error) }
// });

// app.get("/posts/:id", async (req, res, next) => {
//   try {
//     const data = await client.query(baseQuery + "WHERE posts.id = $1", [req.params.id]);
//     const post = data.rows[0];
//     res.send(postDetails(post));
//   } catch (error) { next(error) }
// });

const PORT = 1337;

app.listen(PORT, () => {
	console.log(`App listening in port ${PORT}`);
});
