import {
	GraphQLNonNull,
	GraphQLBoolean
} from 'graphql/type';

import CommentInputType from '../../inputs/comment-input';
import CommentModel from '../../../models/comment';

export default {
	type: GraphQLBoolean,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(CommentInputType)
		}
	},
	async resolve(root, params, options) {
		const commentModel = new CommentModel(params.data);
		const newComment = await commentModel.save();

		if (!newComment)
			throw new Error('Error adding new comment.');

		return true;
	}
}