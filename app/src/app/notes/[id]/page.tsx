import { Flex } from '@radix-ui/themes'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      My Post: {params.id}
      <Flex height="100%">
        <div></div>
        <div></div>
      </Flex>
    </div>
  )
}
