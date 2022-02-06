const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req,res) =>{
	Post.find()
		.then(Posts => res.json(Posts))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const username = req.body.username;
	const type = req.body.type;
	const data = req.body.data;
	const newPost = new Post({username, type, data});
	newPost.save()
		.then(() => res.json('post added'))
		.catch(err => res.status(400).json('error' + err));
});

router.route('/:id').get((req, res) =>{
	Post.findById(req.params.id)
		.then(post => res.json(post))
		.catch(err => res.status(400).json("error: " + err));
});

router.route('/delete/:id').delete((req, res) =>{
	Post.findByIdAndDelete(req.params.id)
		.then(() => res.json('Post deleted'))
		.catch(err => res.status(400).json("error: " + err));
});

router.route('/update/:id').post((req, res) =>{
	Post.findById(req.params.id)
		.then(post => {
			post.username = req.body.username;
			post.type = req.body.type;
			post.data = req.body.data;
			post.save()
				.then(() => res.json('post updated'))
				.catch(err => res.status(400).json("error: " + err));
		})
});

module.exports = router;
