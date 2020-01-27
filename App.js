import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';


import Picker from 'react-native-wheel-picker'
var PickerItem = Picker.Item;

export default class App extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem : 0,
            selectedPage: 0,
            itemList: Array.from({ length: 500 }, (_, i) => 0 + i),
            showPicker: false,
        };
    }

    onPickerSelect (index) {
        this.setState({
            selectedItem: index,
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <Button title={'1 Page'} onPress={() => this.setState({itemList: Array.from({ length: 1 }, (_, i) => 0 + i)})}/>
                <Button title={'2 Pages'} onPress={() => this.setState({itemList: Array.from({ length: 2 }, (_, i) => 0 + i)})}/>
                <Button title={'5 Pages'} onPress={() => this.setState({itemList: Array.from({ length: 5 }, (_, i) => 0 + i)})}/>
                <Button title={'50 Pages'} onPress={() => this.setState({itemList: Array.from({ length: 50 }, (_, i) => 0 + i)})}/>
                <Button title={'500 Pages'} onPress={() => this.setState({itemList: Array.from({ length: 500 }, (_, i) => 0 + i)})}/>
                <Button title={'1000 Pages'} onPress={() => this.setState({itemList: Array.from({ length: 1000 }, (_, i) => 0 + i)})}/>
                {this.state.showPicker && (<View>
                <Button title={'top'} onPress={() => this.setState({selectedItem: 0})}/>
                <Picker style={{width: 150, height: 180}}
                        selectedValue={this.state.selectedItem}
                        itemStyle={{color:"black", fontSize:22, height: 200}}
                        onValueChange={(index) => this.onPickerSelect(index)}>
                    {this.state.itemList.map((i) => (
                        <PickerItem label={''+ (1+i)} value={i} key={"page"+i}/>
                    ))}
                </Picker>
                <Button title={'bottom'} onPress={() => this.setState({selectedItem: this.state.itemList.length - 1})}/>
                <View style={{height: 1, backgroundColor: '#333'}} />
                <Button
                    title={'select'}
                    onPress={() => this.setState({selectedPage: this.state.selectedItem, showPicker: false})}
                />
                </View>)}
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                    <View style={{width: 100, marginStart: 25, backgroundColor: '#eee'}}>
                        <Button
                            title={'previous'}
                            onPress={() => {
                                const prevPage = this.state.selectedPage - 1;
                                if (prevPage >= 0) {
                                    this.setState({
                                        selectedItem: prevPage,
                                        selectedPage: prevPage,
                                        showPicker: false,
                                    })
                                }
                            }
                            }
                        />
                    </View>
                    <View style={{width: 100, backgroundColor: '#ddd'}}>
                        <Button
                            title={this.state.itemList[this.state.selectedPage] + 1 + '/' + this.state.itemList.length}
                            style={{fontSize: 22, alignSelf: 'center'}}
                            onPress={() => this.setState({showPicker: !this.state.showPicker})} />
                    </View>
                    <View style={{width: 100, marginEnd: 25, backgroundColor: '#eee'}}>
                        <Button
                            title={'next'}
                            onPress={() => {
                                    const nextPage = this.state.selectedPage + 1;
                                    if (nextPage < this.state.itemList.length) {
                                        this.setState({
                                            selectedItem: nextPage,
                                            selectedPage: nextPage,
                                            showPicker: false,
                                        });
                                    }
                                }
                            }
                        />
                    </View>
                </View>
                <View style={{width: '100%', height: 80, marginTop: 10, padding: 10, backgroundColor: '#bbb'}}>
                    <Text>Tab Bar</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
