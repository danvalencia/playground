import { render } from '@redwoodjs/testing'

import ThreePage from './ThreePage'

describe('ThreePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThreePage />)
    }).not.toThrow()
  })
})
