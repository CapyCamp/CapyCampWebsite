import { promises as fs } from "node:fs"
import path from "node:path"

export type WlEntry = {
  address: `0x${string}`
  submittedAt: string
}

type WlStore = {
  version: 1
  entries: WlEntry[]
}

function getStoreDir() {
  return path.join(process.cwd(), ".wl")
}

function getJsonPath() {
  return path.join(getStoreDir(), "wl-signups.json")
}

function getCsvPath() {
  return path.join(getStoreDir(), "wl-signups.csv")
}

async function ensureDir() {
  await fs.mkdir(getStoreDir(), { recursive: true })
}

async function readStore(): Promise<WlStore> {
  await ensureDir()
  try {
    const raw = await fs.readFile(getJsonPath(), "utf8")
    const parsed = JSON.parse(raw) as Partial<WlStore>
    if (parsed.version !== 1 || !Array.isArray(parsed.entries)) {
      return { version: 1, entries: [] }
    }
    return { version: 1, entries: parsed.entries as WlEntry[] }
  } catch {
    return { version: 1, entries: [] }
  }
}

async function writeStore(store: WlStore) {
  await ensureDir()
  await fs.writeFile(getJsonPath(), JSON.stringify(store, null, 2) + "\n", "utf8")
  const csv = [
    "address,submittedAt",
    ...store.entries.map((e) => `${e.address},${e.submittedAt}`),
  ].join("\n")
  await fs.writeFile(getCsvPath(), csv + "\n", "utf8")
}

export async function appendWlAddress(address: `0x${string}`) {
  const store = await readStore()
  const exists = store.entries.some((e) => e.address.toLowerCase() === address.toLowerCase())
  if (exists) {
    return { added: false, total: store.entries.length }
  }

  const next: WlStore = {
    version: 1,
    entries: [
      ...store.entries,
      { address, submittedAt: new Date().toISOString() },
    ],
  }
  await writeStore(next)
  return { added: true, total: next.entries.length }
}

export async function listWlEntries() {
  const store = await readStore()
  return store.entries
}

