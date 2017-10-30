import {
	GraphQLNonNull,
	GraphQLList,
	GraphQLID
} from 'graphql/type';

import GetProjection from '../../get-projection';
import CommentType from '../../types/comment';
import CommentModel from '../../../models/comment';

export default {
	type: new GraphQLList(CommentType),
	args: {
		postId: {
			name: 'postId',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params, options, fieldASTs) {
		const projection = GetProjection(fieldASTs);
		return CommentModel.find({ postId: params.postId }).select(projection).exec();
	}
}