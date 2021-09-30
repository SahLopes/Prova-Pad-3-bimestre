import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { useDispatch } from 'react-redux'
import { removerTarefa } from '../../redux/tarefas'
import styled from 'styled-components/native';
const App = styled.View`
  flex: 1;
  padding: 0 30px;
  background-color: #E5E5E5;
`
const TituloContainer = styled.View`
  height: 128px;
  width: 100%;
  background-color: #fff;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  align-items: center;
  justify-content: center;
`

const TituloTxt = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
const Todo =styled.View`
  margin-top: 46px;
  width: 100%;
  height: 370px;
  background: #fff;
  border-radius: 10px;
`
const TarefaNome= styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`

const TarefaTexto = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 14px;
  color: rgba(0, 0, 0, 0.5);
`

const Botão1=styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #6200EE;
  border-radius: 4px;
  margin-top: 26px;
  align-items: center;
  justify-content: center;
`

const Botão2 = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #EB3223;
  border-radius: 4px;
  margin-top: 26px;
  align-items: center;
  justify-content: center;
`
const BotoõesTexto = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`





export function Detalhe({ route }) {
  const { tarefa } = route.params

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remover() {
    dispatch(removerTarefa(tarefa.id))
    navigation.goBack()
  }

  return (
    <App>
      <TituloContainer>
        <TituloTxt>Aplicativo ToDo list</TituloTxt>
      </TituloContainer>
      
      <Todo>
        <TarefaNome>{tarefa.titulo}</TarefaNome>
        <TarefaTexto>{tarefa.texto}</TarefaTexto>
      </Todo>
      
      <Botão1>
        <BotoõesTexto>EDITAR TAREFA</BotoõesTexto>
      </Botão1>

      <Botão2 onPress={remover}>
        <BotoõesTexto>REMOVER TAREFA</BotoõesTexto>
      </Botão2>
    </App>
  )
}