import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: String
}, {
	collection: 'BlogPost',
	timestamps: true
});

export default mongoose.model('BlogPost', BlogPostSchema);