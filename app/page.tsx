import { Inter } from 'next/font/google'
import Tweet from './components/Tweet'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

      <Tweet />

      )
}
