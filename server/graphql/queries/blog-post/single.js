import {
	GraphQLNonNull,
	GraphQLList,
	GraphQLID
} from 'graphql/type';
import { Types } from 'mongoose';

import GetProjection from '../../get-projection';
import BlogPostType from '../../types/blog-post';
import BlogPostModel from '../../../models/blog-post';

export default {
	type: BlogPostType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params, options, fieldASTs) {
		const projection = GetProjection(fieldASTs);
		return BlogPostModel.findById(params.id).select(projection).exec();
	}
}