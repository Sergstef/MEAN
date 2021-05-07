const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

const ArticleSchema = mongoose.Schema({
	heading: {type: String, required: true},
    companyName: {type: String, required: true},
    articleText: {type: String, required: true}
});

const Article = module.exports = mongoose.model('Article', ArticleSchema);

module.exports.addArticle = function(newArticle, callback) {
	newArticle.save(callback);
};

module.exports.deleteArticle = function(articleId, callback) {
    Article.deleteOne({_id: articleId}, callback);
};

module.exports.getArticles = function(callback) {
    Article.find().exec(callback);
}