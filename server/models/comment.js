import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
	postId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	text: {
		type: String,
		required: true
	}
}, {
	collection: 'Comment',
	timestamps: true
});

export default mongoose.model('Comment', CommentSchema);