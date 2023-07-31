const Post = require('/Post');
const Blogger = require('/Blogger');
const Comment = require('/Comment');

Blogger.hasMany(Post, {
    foreignKey: 'blogger_id',
    onDelete: 'CASCADE',
});

Post.belongsTo(Blogger, {
    foreignKey: 'blogger_id',
  });

  Blogger.hasMany(Comment, {
    foreignKey: 'blogger_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Blogger, {
    foreignKey: 'blogger_id',
  });

  Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
  });

module.exports = { Post, Blogger, Comment };