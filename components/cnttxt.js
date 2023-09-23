import { Text, View, StyleSheet, Button, Pressable } from 'react-native';
import { useState } from 'react';

export default function Cnttxt(props) {
    console.log(props);
    return (
        <Text style={{color: props.color, fontSize: props.fontSize, margin: props.margin}}>
            {props.children}
        </Text>
    );
}