import { type NextRequest } from 'next/server'
import { createClient, getInfo } from '@/app/api/utils/common'

export async function POST(request: NextRequest) {
  const client = createClient(request)

  const body = await request.json()
  const {
    inputs,
    files,
  } = body
  const { user } = getInfo(request)
  const res = await client.runWorkflow(inputs, user, true, files)
  return new Response(res.data as any)
}
