import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState('light')

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Head>
        <title>Simple MVP Test</title>
        <meta name="description" content="Test project for simplified MVP architecture" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple MVP Test</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Test project for simplified MVP architecture</p>
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Toggle Theme
          </button>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Modern Design</h3>
            <p>Built with Next.js 14 and TypeScript for optimal performance</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Responsive</h3>
            <p>Mobile-first design that works on all devices</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
            <p>Optimized for speed with Lighthouse score > 90</p>
          </div>
        </section>
      </main>
    </div>
  )
}