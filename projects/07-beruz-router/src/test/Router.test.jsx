import { describe, it, expect, beforeEach, vi, beforeAll } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

vi.mock('../utils.js', () => ({
  getCurrentPath: vi.fn()
}))

let Router, Route, Link, getCurrentPath

beforeAll(async () => {
  Router = (await import('../components/Router.jsx')).default
  Route = (await import('../components/Route.jsx')).default
  Link = (await import('../components/Link.jsx')).default
  getCurrentPath = (await import('../utils.js')).getCurrentPath
})

describe('Router', () => {
  

  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should render without problems', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', async () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(await screen.findByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', async () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(await screen.findByText('About')).toBeTruthy()
  })

  it('should navigate using Links', async () => {
    getCurrentPath.mockReturnValueOnce('/')

    render(
      <Router>
        <Route
          path='/' Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to='/about'>Go to About</Link>
              </>
            )
          }}
        />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )

    // Click on the link
    const anchor = await screen.findByText(/Go to About/)
    fireEvent.click(anchor)

    const aboutTitle = await screen.findByText('About')

    // Check that the new route is rendered
    expect(aboutTitle).toBeTruthy()
  })
})