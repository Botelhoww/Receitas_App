    import React from 'react';
    import { View, Text, FlatList, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
    import { FontAwesome5 } from '@expo/vector-icons';
    import SwitchSelector from 'react-native-switch-selector';

    function TelaBuscaReceita(){

    const options = [
        { label: '', value: 'Não Selecionado ' },
        { label: '', value: 'Selecionado ' },
    ];

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
        nome_alimento: 'Peixe'
        },
        {
        id: '4',
        nome_alimento: 'Azeitona'
        },
        {
        id: '5',
        nome_alimento: 'Cebola'
        },
        {
        id: '6',
        nome_alimento: 'Pimentão'
        },
        {
        id: '6',
        nome_alimento: 'Ovo'
        },
    ];

    function renderItem({item: dados}){ //só pros alimentos
    return (
    <View style={styles.divListaPrincipal}>
        <View style={styles.divLista}>
            <Text style={styles.itensLista}>{dados.nome_alimento}
                <View style={styles.divSelecionado}>
                    <SwitchSelector style={styles.Selecionado} options={options} dados={dados} 
                    initial={0} onPress={value => console.log(value + '\"' + dados.nome_alimento + '\"' )}
                    />
                </View>
            </Text>
        </View>
    </View>
    )
    } //fim dela

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
                    <Button onPress = {handlePress} title = "Adicionar"/>
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
        divSelecionado: {
            flex: 1
        },
        Selecionado: {
            marginHorizontal: '62%',
            width: '20%',
            margin: 1,
            flexDirection: "row",
            flex: 1,
        },
        divListaPrincipal:{
            flex: 1,
        },
        divLista: {
            backgroundColor: '#FFF',
            width: '100%',
            height: 50,
        },
        itensLista: {
            backgroundColor: '#CFD8DC',
            height: '85%',
            width: '100%',
            color: '#7B8D93',
            fontFamily: 'Inria-Bold',
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
            marginVertical: 15,
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