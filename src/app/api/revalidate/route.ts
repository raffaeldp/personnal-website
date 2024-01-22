import { parseBody } from 'next-sanity/webhook'
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { TagByTypes } from '../../../utils/tagByTypes'
import { revalidateSecret } from '@/sanity/env'

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string
      slug?: string | undefined
    }>(req, revalidateSecret)

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 })
    }

    if (!body?._type) {
      return new Response('Bad Request: missing _type', { status: 400 })
    }

    revalidateTag(TagByTypes[body._type])
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new Response(error.message, { status: 500 })
  }
}
