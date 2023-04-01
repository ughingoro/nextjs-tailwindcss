import { Inter } from 'next/font/google'
import BlogGrid from './components/BlogGrid'
import Tweet from './components/Tweet'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      
      <BlogGrid />
      <Tweet />
    </div>

      )
}
