var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/homepage');
var ctrlBlog = require('../controllers/blog');

/* GET home page. */
router.get('/', ctrlHome.home);

/* GET blogs lists */
router.get('/blogs', ctrlBlog.list);

/* Blog Show */
router.get('/blogs/:blogid/edit', ctrlBlog.edit);

/* Blog Edit Post */
router.put('/blogs/:blogid/save', ctrlBlog.editPost);

router.get('/blogs/:blogid', ctrlBlog.blogFindOne);

/* Blog Add */
router.get('/blogs/add', ctrlBlog.add);

/* Blog Add Post */
router.post('/blogs/add', ctrlBlog.addPost);

/* Blog Delete */
router.get('/blogs/:blogid/delete', ctrlBlog.del);

/* Blog Delete Post */
router.delete('/blogs/:blogid/delete', ctrlBlog.deletePost);

module.exports = router;
