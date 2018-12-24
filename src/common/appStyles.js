import {StyleSheet} from 'react-native';

export const colors =
{
	spaceColor: 'rgb(250, 250, 250)',
	darkSpaceColor: 'rgb(200, 200, 200)',
	accentColor: '#FFC107',
	primaryColor: '#3F51B5',
	darkPrimaryColor: '#303F9F',
	lightPrimaryColor: '#C5CAE9',
	// accentColor: '#FF5252',
	// primaryColor: '#009688',
	// darkPrimaryColor: '#00796B',
	// lightPrimaryColor: '#B2DFDB',
	primaryTextColor: '#212121',
	secondaryTextColor: '#757575',
	dividerColor: 'rgba(0, 0, 0, 0.1)',
	titleAndIconColor: '#FFFFFF'
}

export const containerStyle = StyleSheet.create(
{
	default:
	{
		flex: 1,
		backgroundColor: colors.spaceColor
	},
	assessmentCard:
	{
		alignSelf: 'stretch',
		backgroundColor: colors.lightPrimaryColor,
		borderColor: colors.primaryTextColor
	},
	assessmentCardTitle:
	{
		backgroundColor: 'rgba(255, 255, 255, 0.25)',
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	assessmentCardDisplay:
	{
		flexDirection: 'row',
	},
	assessmentGradeBar:
	{
		flex: 4.5,
		paddingLeft: 20,
		paddingRight: 10,
		paddingVertical: 15,
	},
	assessmentGradePercent:
	{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 20
	},
	assessmentList:
	{
		alignSelf: 'stretch',
		marginVertical: 5
	},
	courseCard:
	{
		padding: 10,
		margin: 5,
		borderRadius: 5,
		borderColor: colors.dividerColor,
		borderWidth: 1
	},
	drawerHeader:
	{
		// flex: 0.25,
		backgroundColor: colors.primaryColor,
		justifyContent: 'center',
		paddingVertical: 10,
		paddingLeft: 10
	},
	form:
	{
		flex: 1,
		margin: 20
	},
	formSection: {marginBottom: 20},
	modal:
	{
		flex: 1,
		backgroundColor: colors.spaceColor
	},
	page:
	{
		flex: 1,
		backgroundColor: colors.spaceColor,
		padding: 5
	},
	rowBox:
	{
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	tileList:
	{
		flex: 1,
		backgroundColor: colors.darkSpaceColor,
		paddingVertical: 5
	},
	tile:
	{
		backgroundColor: colors.spaceColor,
		marginVertical: 5,
		paddingVertical: 10,
		alignItems: 'center',
		justifyContent: 'flex-start',
		alignSelf: 'stretch',
		// elevation: 3
	},
	tileTitle:
	{
		padding: 5,
		flexDirection: 'row'
	},
	tileContent:
	{
		paddingVertical: 5,
		alignItems: 'center',
		justifyContent: 'flex-start',
		alignSelf: 'stretch'
	}
});

const createFont = (size, alignment, color) =>
{
	var style = {color: colors.primaryTextColor};

	if (size)
		style["fontSize"] = size;

	if (alignment)
		style["textAlign"] = alignment;

	if (color)
		style["color"] = color

	return style;
};

export const textStyle =
{
	light: (size, alignment, color) =>
	{
		return Object.assign({fontFamily: 'Lato-Light'}, createFont(size, alignment, color));
	},
	regular: (size, alignment, color) =>
	{
		return Object.assign({fontFamily: 'Lato-Regular'}, createFont(size, alignment, color));
	},
	bold: (size, alignment, color) =>
	{
		return Object.assign({fontFamily: 'Lato-Black'}, createFont(size, alignment, color));
	},
	italic: (size, alignment, color) =>
	{
		return Object.assign({fontFamily: 'Lato-Italic'}, createFont(size, alignment, color));
	}
}