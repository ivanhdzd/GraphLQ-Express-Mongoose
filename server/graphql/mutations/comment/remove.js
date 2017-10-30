import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql/type';

import GetProjection from '../../get-projection';
import CommentType from '../../types/comment';
import CommentModel from '../../../models/comment';

export default {
	type: CommentType,
	args: {
		_id: {
			name: '_id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	async resolve(root, params, options, fieldASTs) {
		const projection = GetProjection(fieldASTs);
		const removedComment = await CommentModel.findByIdAndRemove(params._id, {
			select: projection
		}).exec();

		if (!removedComment)
			throw new Error('Error removing comment.');

		return removedComment;
	}
}