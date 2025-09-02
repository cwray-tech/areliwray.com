import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="container py-28">
      <div className="prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4">No se pudo encontrar esta página.</p>
      </div>
      <Button asChild variant="default">
        <Link href="/">Ir a la página de inicio</Link>
      </Button>
    </div>
  )
}
