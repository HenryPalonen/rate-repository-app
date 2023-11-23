import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from '../FormikTextInput'; 

const styles = StyleSheet.create({
    container: {
        padding: 10,
 
    },

});

// Define validation schema
const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner username is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number().required('Rating is required').min(0).max(100),
    text: yup.string(),
});

// ReviewFormContainer now contains the form UI
const ReviewContainer = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ ownerName: '', repositoryName: '', rating: '', text: '' }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <FormikTextInput name="ownerName" placeholder="Repository owner's username" />
                    <FormikTextInput name="repositoryName" placeholder="Repository's name" />
                    <FormikTextInput name="rating" placeholder="Rating between 0 and 100" keyboardType="numeric" />
                    <FormikTextInput name="text" placeholder="Review" multiline />
                    <Button title="Create a review" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
};

export default ReviewContainer;

