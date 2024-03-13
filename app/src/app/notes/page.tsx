'use client'

import { Pencil1Icon } from '@radix-ui/react-icons'
import { Card, Flex } from '@radix-ui/themes'
import axios from 'axios'
import Link from 'next/link'
import useSWR from 'swr'

type Note = {
  id: number
  name: string
  text: string
}
const getNotes = async (url: string) => {
  const res = await axios.get(url)
  const data = res.data
  return data
}

export default function EditIndex() {
  const url = 'http://localhost:8000/notes'

  const { data: notes } = useSWR<Note[]>(url, () => getNotes(url))

  return (
    <main>
      <Flex direction="column" justify="center" align="center" height="100%">
        <Card variant="classic">
          {!!notes &&
            notes.map((note) => (
              <Link href={`/notes/${note.id}`}>
                <Flex align="center" justify="between" gap="5" p="5" className="hover:bg-slate-100">
                  <h2>{note.name}</h2>
                  <Pencil1Icon />
                </Flex>
              </Link>
            ))}
        </Card>
      </Flex>
    </main>
  )
}
