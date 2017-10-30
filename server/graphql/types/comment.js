import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql/type';

export default new GraphQLObjectType({
	name: 'Comment',
	fields: {
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		postId: {
			type: new GraphQLNonNull(GraphQLID)
		},
		text: {
			type: GraphQLString
		}
	}
});