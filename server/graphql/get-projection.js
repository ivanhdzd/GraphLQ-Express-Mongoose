export default function GetProjection(fieldASTs) {
	return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
		projections[selection.name.value] = 1;
		return projections;
	}, {});
}