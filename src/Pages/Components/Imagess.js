import React from 'react'
import { View, Text, Image } from 'react-native';
const Imagess = (props) => (
    <View>
{
    (props.info.item.destinationId==props.id)?
    ( <Image source={props.info.item.image} style={{ flex: 1, width: '100%' }} ></Image>):
    (null)
}
    </View>
);
export default Imagess