import { render } from '@redwoodjs/testing'

import ThreeFiberPage from './ThreeFiberPage'

describe('ThreeFiberPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThreeFiberPage />)
    }).not.toThrow()
  })
})
