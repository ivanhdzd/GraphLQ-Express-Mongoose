import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql/type';

import GetProjection from '../../get-projection';
import BlogPostType from '../../types/blog-post';
import BlogPostModel from '../../../models/blog-post';

export default {
	type: BlogPostType,
	args: {
		_id: {
			name: '_id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	async resolve(root, params, options, fieldASTs) {
		const projection = GetProjection(fieldASTs);
		const removedBlogPost = await BlogPostModel.findByIdAndRemove(params._id, {
			select: projection
		}).exec();

		if (!removedBlogPost)
			throw new Error('Error removing blog post.');

		return removedBlogPost;
	}
}