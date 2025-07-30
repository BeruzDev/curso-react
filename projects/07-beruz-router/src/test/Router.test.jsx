import { render, screen, cleanup, vi } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { Router } from '../components/Router.jsx' 
import { getCurrentPath } from '../utils.js'

vi.mock('../utils.js', () => ({
  getCurrentPath: vi.fn(() => '/')
}))

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
    render(
      <Router routes={[]} defaultComponent={() => <h1>404</h1>} />
    )
    expect(await screen.findByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches' , () => {
    getCurrentPath.mockReturnValue('/about')
    
    const routes = [
      {
        path: '/',
        component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })
})
