import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID
} from 'graphql/type';

export default new GraphQLInputObjectType({
	name: 'CommentInput',
	fields: {
		_id: {
			type: GraphQLID
		},
		postId: {
			type: GraphQLID
		},
		text: {
			type: GraphQLString
		}
	}
});