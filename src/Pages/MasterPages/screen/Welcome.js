import React, { Component } from 'react';
import { View, Text, Image, Dimensions, FlatList, TextInput } from 'react-native';
import LoopImages from 'react-native-loop-image';
import shuffleSeed from 'shuffle-seed';
import { Button, } from 'native-base';
import Imagess from '../../Components/Imagess';
class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 1,
            Details: [
                {
                    "destinationId": "1",
                    "image": require("../../../gift/a.gif")
                },
                {
                    "destinationId": "2",
                    "image": require("../../../gift/b.gif")
                },
                {
                    "destinationId": "3",
                    "image": require("../../../gift/c.gif")
                },
                {
                    "destinationId": "4",
                    "image": require("../../../gift/d.gif")
                }, {
                    "destinationId": "5",
                    "image": require("../../../gift/e.gif")
                },
            ]

        };

    }
    Shuffle = () => {
        let list = this.state.Details;
        list = shuffleSeed.shuffle(list, this.state.num);
        this.setState({
            Details: list
        })
    }
    random = () => {

    }
    render() {
        // var a = 1;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput keyboardType={'number-pad'} onChangeText={(num) => {
                        this.setState({
                            num
                        })
                    }} style={{ width: 100, borderWidth: 1, height: 50, borderColor: 'black' }}></TextInput>
                    <Button onPress={this.Shuffle} style={{ width: 100, margin: 5, alignItems: 'center', justifyContent: 'center' }}><Text>save</Text></Button>
                    <Button onPress={this.random} style={{ width: 100, alignItems: 'center', justifyContent: 'center' }}><Text>random</Text></Button>
                </View>
                <View style={{ flex: 1 }}>

                    <FlatList style={{ width: '100%' }} data={this.state.Details}
                        renderItem={
                            (info) => (
                                <Imagess info={info} id={5}></Imagess>
                                
                            )
                        }
                        keyExtractor={(info, index) => index.toString()}
                    >
                    </FlatList>
                </View>
            </View>
        )

    }
}

export default Welcome;
