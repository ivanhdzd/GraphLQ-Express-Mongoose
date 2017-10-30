import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID
} from 'graphql/type';

export default new GraphQLInputObjectType({
	name: 'BlogPostInput',
	fields: {
		_id: {
			type: GraphQLID
		},
		title: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		}
	}
});