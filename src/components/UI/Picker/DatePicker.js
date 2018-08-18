import React, {Component} from 'react';
import { StyleSheet, Platform } from 'react-native';
import moment from 'moment';
import DatePicker from 'react-native-datepicker'

const datepicker = props => {

    return (
            <DatePicker
                //style={{marginTop: 15}}
                date={props.date}
                mode={props.mode}
                placeholder=""
                format= {props.format}
                //minDate="2016-05-01"
                //maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={props.onDateChange} //setState({date: date})
                showIcon={false}
                customStyles={{
                    dateInput: {
                        width: "100%",
                        borderWidth: 1,
                        borderColor: "#eee",
                        borderRadius: 10,
                        padding: 5,
                        marginTop: 8,
                        marginBottom: 8,
                        ...Platform.select({
                            ios: {
                                backgroundColor: "white",
                            },
                            android: {
                              backgroundColor: '#eee',
                            },
                          }),
                    }
                  }}
            />
        );
};


export default datepicker;