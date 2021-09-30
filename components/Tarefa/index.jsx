import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import styled from 'styled-components/native';
import imagemMenu from '../../fotos/storage.png'
import imagemFechar from '../../fotos/close.png'
import { useDispatch } from 'react-redux'
import { removerTarefa } from '../../redux/tarefas'
import { useNavigation } from '@react-navigation/core'

export const Principal = styled.View`
  margin-top: 34px;
  height: 122px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 0 12px;
`

export const Topo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Titulo = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`
export const Texto = styled.Text`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  font-size: 14px;
`
function Tarefa({ tarefa }) {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  console.log(tarefa)

  function excluirTarefa() {
    dispatch(removerTarefa(tarefa.id))
  }

  function redirecionar() {
    navigation.navigate('Detalhe', { tarefa })
  }

  return (
    <Principal>
      <Topo>
        <TouchableOpacity onPress={redirecionar}>
          <Image source={imagemMenu} />
        </TouchableOpacity>
        <Titulo>{tarefa.titulo}</Titulo>
        <TouchableOpacity onPress={excluirTarefa}>
          <Image source={imagemFechar} />
        </TouchableOpacity>
      </Topo>

      <Texto>{tarefa.texto}</Texto>
    </Principal>
  )
}

export { Tarefa }