import {
	GraphQLNonNull,
	GraphQLBoolean
} from 'graphql/type';

import BlogPostInputType from '../../inputs/blog-post-input';
import BlogPostModel from '../../../models/blog-post';

export default {
	type: GraphQLBoolean,
	args: {
		data: {
			name: 'data',
			type: new GraphQLNonNull(BlogPostInputType)
		}
	},
	async resolve(root, params, options) {
		const blogPostModel = new BlogPostModel(params.data);
		const newBlogPost = await blogPostModel.save();

		if (!newBlogPost)
			throw new Error('Error adding new blog post.');

		return true;
	}
};