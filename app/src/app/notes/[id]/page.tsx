import { Card, Flex } from '@radix-ui/themes'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Flex direction="column" justify="center" align="center" height="100%">
        <Card variant="classic">
          <Flex p="5">Note ID: {params.id}</Flex>
        </Card>
      </Flex>
    </main>
  )
}
