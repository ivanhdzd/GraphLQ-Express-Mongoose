import {
	GraphQLNonNull,
	GraphQLList,
	GraphQLID
} from 'graphql/type';
import { Types } from 'mongoose';

import GetProjection from '../../get-projection';
import CommentType from '../../types/comment';
import CommentModel from '../../../models/comment';

export default {
	type: CommentType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	async resolve(root,params, options, fieldASTs) {
		const projection = GetProjection(fieldASTs);
		return CommentModel.findById(params.id).select(projection).exec();
	}
}