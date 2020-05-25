    import React from 'react';
    import { View, Text, FlatList, StyleSheet, Button, TextInput, TouchableOpacity, Switch } from 'react-native';
    import { FontAwesome5 } from '@expo/vector-icons';

    function TelaBuscaReceita(){

    const [isSwitchEnable, setSwitch] = React.useState(false)

    const dados = [
    {
        id: '1',
        nome_alimento: 'Cenoura'
        },
        {
        id: '2',
        nome_alimento: 'Tomate'
        },
        {
        id: '3',
        nome_alimento: 'Ovo'
        },
        {
        id: '4',
        nome_alimento: 'Linguiça'
        },
        {
        id: '5',
        nome_alimento: 'Peixe'
        },
        {
        id: '6',
        nome_alimento: 'Pimentão'
        },
        {
        id: '7',
        nome_alimento: 'Cebola'
        },
         {
        id: '8',
        nome_alimento: 'Banana'
        },
        {
        id: '9',
        nome_alimento: 'Abacate'
        },
        {
        id: '10',
        nome_alimento: 'Carne Moída'
        },
    ];

    function renderItem({item: dados}){
    return (
    <View style={styles.divListaPrincipal}>
        <View style={styles.divLista}>
            <Text style={styles.itensLista}>{dados.nome_alimento}
                
                <View style={styles.divSwitch}>
                    <Switch style={styles.Switch}
                        value = {isSwitchEnable}
                        onValueChange = {(value) => setSwitch(value) }
                    />
                </View>
               
            </Text>
        </View>
    </View>
    )
    } 

    const handlePress = () => false
    
    return (
        <View style={styles.divPrincipal}> 

                <View style={styles.Header}>
                    <View style={styles.Header}>
                        <Text style={styles.textoHeader}>Receitas</Text>
                    </View>
                    
                    <View>
                        <TouchableOpacity>
                            <FontAwesome5 name="bars" size={24} style={styles.hamb}></FontAwesome5>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={styles.nAchou}>Não achou algo?</Text>
                    <Text style={styles.AddAlimentos}>Adicione alimentos que há em sua casa.</Text>
                </View>

                <TextInput style={styles.input} placeholder = "Digite aqui..."/>

                <View style={styles.divBotao}>
                    <Button title = "Adicionar"/>
                </View>

                <FlatList 
                    data = {dados}
                    keyExtractor = {(item) => {item.id}}
                    renderItem = {renderItem}
                /> 
        </View>
    );
    }

    const styles = StyleSheet.create({
        Switch: {
            marginHorizontal: '82%',
            marginVertical: '2%'
        },
        divListaPrincipal: {
            width: '100%',
            paddingVertical: 1,
            backgroundColor: '#fff'
        },
        itensLista: {
            backgroundColor: '#CFD8DC',
            color: '#7B8D93',
            fontFamily: 'Inria-Bold',
            fontSize: 18,
        },
        divPrincipal: {
            backgroundColor: '#455357',
            height: '100%',
            width: '100%',
        },
        input: {
            borderWidth: 1.5,
            width: '95%',
            backgroundColor: '#fff',
            height: '5.5%',
            borderColor: '#777',
            padding: 7,
            margin: 10,
        },
        divBotao: {
            marginHorizontal: '62%',
            backgroundColor: '#fff',
            borderRadius: 6,
            width: '35%',
            height: 40,
            justifyContent: "center",
            margin: 8,
            marginVertical: 15
        },
        AddAlimentos: {
            color: '#fff',
            fontSize: 15,
            width: '100%',
            paddingHorizontal: 11,
        },
        nAchou: {
            margin: 11,
            width: '100%',
            marginVertical: '10%',
            color: '#fff',
            fontSize: 20,
        },
        textoHeader: {
            color: '#000',
            fontSize: 25,
            marginHorizontal: 20,
            marginVertical: 18,
            height: 30,
            fontFamily: 'Roboto',
        },
        Header:{
            backgroundColor: '#B8B8B8',
            height: '7%',
            width: '100%',
        },
        hamb: {
            color: '#FFF',
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: '90%',
            marginVertical: 15
        }
    })

    export default TelaBuscaReceita;