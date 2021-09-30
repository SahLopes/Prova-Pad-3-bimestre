import React, { useState } from 'react'
import { ScrollView} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/native';

import { adicionarTarefa } from '../../redux/tarefas'
import { Tarefa } from '../../components/Tarefa'
const App = styled.View`
  flex: 1;
  padding: 0 30px;
  background-color: #E5E5E5;
`;

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
const ParteAdicionar = styled.View`
margin-top: 40px;
  width: 100%;
  background: #FFFFFF;
  border-radius: 12px;
  height: 206px;
  padding: 18px 22px;
  align-items: center;
`
const TituloAdd = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
const Input = styled.TextInput`
  width: 100%;
  background: #E5E5E5;
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 60px;
  border-radius: 10px;
  margin-top: 18px;
  padding: 0 17px;
  font-size: 18px;

`




const BotãoCriar = styled.TouchableOpacity`
  margin-top: 28px;
  background: #6200EE;
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
const TextoBotãoCriar = styled.Text`
  font-size: 18px;
  color: #fff;
`
export function Principal() {
  const dispatch = useDispatch()
  const tarefas = useSelector(estado => estado.tarefas)

  const [texto, setTexto] = useState('')

  function addTodo() {
    dispatch(adicionarTarefa({ titulo: `Tarefa#${tarefas.length}`, texto }))
  }
  return (
    <App>
      <TituloContainer>
        <TituloTxt>Aplicativo ToDo list</TituloTxt>
      </TituloContainer>

      <ParteAdicionar>
        <TituloAdd>Adicione aqui uma tarefa</TituloAdd>

        <Input placeholder="tarefa" onChangeText={(e) => setTexto(e)} />

        <BotãoCriar onPress={addTodo}>
          <TextoBotãoCriar>ADICIONAR TAREFA</TextoBotãoCriar>
        </BotãoCriar>
      </ParteAdicionar>

      <ScrollView style={{marginTop: 14}} showsVerticalScrollIndicator={false}>
        {tarefas.map(tarefa => (
          <Tarefa key={new Date().toISOString()} tarefa={tarefa} />
        ))}
      </ScrollView>
    </App>
  )
}