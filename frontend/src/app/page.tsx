import type { Metadata } from 'next'
import { getServerSession } from '@/actions/auth.actions'
import { adminDb } from '@/lib/firebase/admin'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  return (
    <div className="flex h-full w-full">
      <div className="rounded-xl bg-temp-darkgray flex-1 p-3 m-6 flex flex-col items-center justify-center">
      <h1 className="font-bold text-6xl text-white">Project Name</h1>

      <h2 className="text-2xl text-white">Short Project Description as flavour text</h2>
    </div>
    </div>
  )
}
