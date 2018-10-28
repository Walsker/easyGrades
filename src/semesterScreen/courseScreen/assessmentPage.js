// React Native imports
import React, {Component} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';

// Redux imports
import {connect} from 'react-redux';
import {deleteAssessment} from 'easyGrades/src/userData/actions';

// Custon imports
import {colors, containerStyle, textStyle} from 'easyGrades/src/common/appStyles';
import {ActionBar, Button, IconButton, Tile} from 'easyGrades/src/common';

class AssessmentPage extends Component
{
    showAlert(alertType)
	{
		switch(alertType)
		{
			case "Delete Assessment":

				Alert.alert(
					"Delete Assessment",
					"Are you sure you would like to delete this grade?\nThis action cannot be undone.",
					[
						{text: 'Yes', onPress: this.deleteAssessment.bind(this), style: 'cancel'},
						{text: 'No', onPress: () => {}},
					],
					{cancelable: true}
				);
				return;
		}
    }
    
    deleteAssessment()
    {
        this.props.navigation.navigate("Course");
        this.props.deleteAssessment(this.props.selectedAssessment);
    }

    render()
    {
        if (!this.props.assessment)
            return <View/>;

        return (
            <View style = {containerStyle.default}>
                <ActionBar
					leftButton =
					{
						<IconButton
							type = 'arrow-back'
							size = {30}
							color = {colors.titleAndIconColor}
							action = {() => this.props.navigation.pop()}
						/>
					}
					title = {this.props.assessment.name}
					// rightButton =
					// {
					// 	<IconButton
					// 		type = 'info-outline'
					// 		size = {30}
					// 		color = {colors.titleAndIconColor}
					// 		action = {this.viewCourseInfo.bind(this)}
					// 	/>
					// }
				/>
                <ScrollView style = {containerStyle.tileList}>
                    <Tile
                        title = "Grade"
                        content = 
                        {
                            <View>
                                <Text style = {textStyle.bold(100, 'center')}>
                                    {this.props.assessment.grade * 1000 / 10}
                                    <Text style = {textStyle.bold(75)}>%</Text>
                                </Text>
                                <Text style = {textStyle.italic(14, 'center')}>{this.props.assessment.grade * 100}%</Text>
                            </View>
                        }
                    />
                    <Tile
                        title = "Made a mistake?"
                        content =
                        {
                            <Button
                                label = "Edit Assessment"
                                color = {colors.primaryColor}
                                inverted = {false}
                                action = {() => this.props.navigation.navigate("EditAssessmentPage")}
                            />
                        }
                    />
                    <Tile
                        title = "Delete Assessment"
                        content =
                        {
                            <Button
                                label = "Delete Assessment"
                                color = {'red'}
                                inverted = {false}
                                action = {() => this.showAlert("Delete Assessment")}
                            />
                        }
                    />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        selectedAssessment: state.selectedAssessment,
        assessment: state.assessmentList[state.selectedAssessment]
    };
}
export default connect(mapStateToProps, {deleteAssessment})(AssessmentPage);