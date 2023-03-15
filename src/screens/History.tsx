import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';
import { Heading, VStack, SectionList, Text } from 'native-base';
import { useState } from 'react';

export function History() {

  const [exercises, setExercises] = useState([
    {
      title: '10/03/2023',
      data: ['aaa','bbbb','ccc']
    },
    {
      title: '13/03/2023',
      data: ['ddd','eee']
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader
        title="Histórico de Exercícios"
      />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <HistoryCard/>
        )}
        renderSectionHeader={({ section })=>(
          <Heading
            color="gray.200"
            fontSize="md"
            mt={10}
            mb={3}
          >
            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center'}}
        ListEmptyComponent={()=>(
          <Text
            color="gray.100"
            textAlign="center"
          >
            Não há exercícios registrados ainda.{'\n'}
            Vamos fazer exercício hoje ?
          </Text>
        )}
        showsVerticalScrollIndicator={false}

      />





    </VStack>
  )
}