import Button from '@/components/Button/Button'
import { Flex } from '@radix-ui/themes'

export default function Home() {
  return (
    <main>
      <Flex direction="column" pb="3" width="max-content">
        <h1>Hello World</h1>
        <Button>開始</Button>
      </Flex>
    </main>
  )
}
