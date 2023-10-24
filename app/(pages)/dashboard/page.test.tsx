import { render, screen } from '@testing-library/react'
import Page from './page'

it('App Router: Works with Client Components', () => {
  render(<Page />)
  expect(screen.getByRole('heading')).toHaveTextContent('Client Component')
})
