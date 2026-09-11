import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Aprender from './pages/Aprender'
import Jugar from './pages/Jugar'
import Modalidades from './pages/Modalidades'
import Torneos from './pages/Torneos'
import Ranking from './pages/Ranking'
import Comunidad from './pages/Comunidad'
import Equipamiento from './pages/Equipamiento'
import Noticias from './pages/Noticias'
import Perfil from './pages/Perfil'

export type Page =
  | 'inicio' | 'aprender' | 'jugar' | 'modalidades'
  | 'torneos' | 'ranking' | 'comunidad' | 'equipamiento'
  | 'noticias' | 'perfil'

export type Navigate = (page: Page) => void

export default function App() {
  const [page, setPage] = useState<Page>('inicio')

  const navigate: Navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0 })
  }

  return (
    <div style={{ minHeight: '100%', backgroundColor: '#08090d' }}>
      <Header page={page} navigate={navigate} />
      {page === 'inicio' && <Home navigate={navigate} />}
      {page === 'aprender' && <Aprender navigate={navigate} />}
      {page === 'jugar' && <Jugar navigate={navigate} />}
      {page === 'modalidades' && <Modalidades navigate={navigate} />}
      {page === 'torneos' && <Torneos navigate={navigate} />}
      {page === 'ranking' && <Ranking navigate={navigate} />}
      {page === 'comunidad' && <Comunidad navigate={navigate} />}
      {page === 'equipamiento' && <Equipamiento navigate={navigate} />}
      {page === 'noticias' && <Noticias navigate={navigate} />}
      {page === 'perfil' && <Perfil navigate={navigate} />}
    </div>
  )
}
