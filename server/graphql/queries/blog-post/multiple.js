import { GraphQLList } from 'graphql/type';

import GetProjection from '../../get-projection';
import BlogPostType from '../../types/blog-post';
import BlogPostModel from '../../../models/blog-post';

export default {
	type: new GraphQLList(BlogPostType),
	args: {},
	resolve(root, params, options, fieldASTs) {
		const projection = GetProjection(fieldASTs);
		return BlogPostModel.find().select(projection).exec();
	}
}