interface RsvpBody {
  slug: string
  guestSlug: string
  names: string
  attending: boolean
  alcohol: 'yes' | 'no' | 'none' | null
  transfer: boolean | null
  note: string | null
}

interface Env {
  TELEGRAM_BOT_TOKEN?: string
  TELEGRAM_CHAT_ID?: string
  RSVP_SHEET_WEBHOOK?: string
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  let body: RsvpBody
  try {
    body = await request.json()
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400)
  }

  await Promise.allSettled([
    env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID
      ? sendTelegram(body, env.TELEGRAM_BOT_TOKEN, env.TELEGRAM_CHAT_ID)
      : null,
    env.RSVP_SHEET_WEBHOOK
      ? sendSheet(body, env.RSVP_SHEET_WEBHOOK)
      : null,
  ])

  return json({ ok: true })
}

async function sendTelegram(body: RsvpBody, token: string, chatId: string) {
  const icon = body.attending ? '✅' : '❌'
  const alcoholLabel = body.alcohol === 'yes' ? 'Так' : body.alcohol === 'no' ? 'Ні' : 'Не вживає'
  const transferLabel = body.transfer ? 'Потрібен' : 'Не потрібен'

  const lines = [
    `${icon} *${body.names}* — ${body.slug}`,
    body.attending
      ? `Алкоголь: ${alcoholLabel} · Трансфер: ${transferLabel}${body.note ? `\n📝 ${body.note}` : ''}`
      : 'Не прийде',
  ]

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: lines.join('\n'), parse_mode: 'Markdown' }),
  })
}

async function sendSheet(body: RsvpBody, webhookUrl: string) {
  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    redirect: 'follow',
  })
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}
