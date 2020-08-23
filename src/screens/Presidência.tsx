import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, useWindowDimensions } from "react-native";
import Image from 'react-native-scalable-image';
import Footer from '../components/Footer';
import { List } from 'react-native-paper';

const Pres = ({ navigation } : { navigation:any }) => {
    
        const screen=useWindowDimensions();
        
        return (
        <ScrollView style={{flex:1}}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>
                    O Departamento de Presidência é responsável pela representatividade da EJ, acompanhamento das Diretorias e pelo Administrativo-Financeiro.
                </Text>

                <Text style={[{marginTop: 30, fontSize: 15, marginLeft: 10, marginBottom: 15}, styles.text]}> 
                    O Presidente, em conjunto com seus Assessores, são responsáveis por representar a EJ perante a instituição de ensino, o MEJ e juridicamente
                    perante qualquer outra entidade. Também somos responsáveis pelo administrativo-financeiro da empresa, que engloba planejamento financeiro, 
                    repasse de fluxo de caixa e regulamentação jurídica.
                </Text>

                <Text style={[{fontSize: 15, marginLeft: 10, marginBottom: 15}, styles.text]}> 
                    O departamento é composto por três cargos: o Diretor Presidente, o Assessor Financeiro e o
                    Gerente de Negócios. Abaixo você pode encontrar mais informações sobre as funções específicas
                    de cada um desses cargos.
                </Text>

                <Image style={{marginTop: 10, marginBottom: 10, borderWidth: 3, 
                    borderColor: '#ffffff', alignSelf: "center"}}
                    width={(screen.width)/1.2}
                    source={require('../static/img/pres.jpg')}
                />

                <Text style={[{fontSize: 30, marginTop: 10} ,styles.title]}>Cargos</Text>
                
                <List.Section style={styles.accordionStyle}>
                    <List.Accordion
                        title="Assessor Financeiro"
                        titleStyle={styles.accorTitle}
                        >
                        <List.Item 
                            title="First item"
                            titleStyle={styles.accorText}
                        />
                    </List.Accordion>
                </List.Section>
                <List.Section style={styles.accordionStyle}>
                    <List.Accordion
                        title="Diretor Presidente"
                        titleStyle={styles.accorTitle}
                        >
                        <List.Item 
                            title="First item"
                            description="First item descripition"     
                        />
                    </List.Accordion>
                </List.Section>

            </ScrollView>
        <Footer/>
        </ScrollView>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0075C9',
        padding: 20,
        flexDirection: "column",
    },
    title: {
        color: '#ffffff',
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        color: '#ffffff',
        textAlign: "justify",
    },
    accordionStyle: {
        backgroundColor: '#ffffff',
    },
    accorTitle: {
        color: '#000000',
        fontWeight: "bold",
        fontSize: 20,
    },
    accorText:{
            
    },
}) 

export default Pres;