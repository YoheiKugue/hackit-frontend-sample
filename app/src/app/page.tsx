import Button from '@/components/Button/Button'
import { Card, Flex } from '@radix-ui/themes'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Flex direction="column" justify="center" align="center" height="100%">
        <Card variant="classic">
          <Flex direction="column" justify="center" align="center" height="100%" p="5">
            <h1>Hello World</h1>
            <Link href="/notes">
              <Button>Start</Button>
            </Link>
          </Flex>
        </Card>
      </Flex>
    </main>
  )
}
