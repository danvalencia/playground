import { Link, routes } from '@redwoodjs/router'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Code Playground</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.three()}>Three</Link>
            </li>
            <li>
              <Link to={routes.threeFiber()}>Three Fiber</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
