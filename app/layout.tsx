import '../styles/globals.css'
import { Volkhov, Poppins } from 'next/font/google'
import React from "react";

export const metadata = {
  title: 'Jadoo',
  description: 'A Travel Agency Website'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
