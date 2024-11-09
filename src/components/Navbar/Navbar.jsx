import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './NavBar.css'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <a href="https://react.dev/" target='_blank'><img src="https://img.icons8.com/?size=256&id=0Da6k7SMq0hs&format=png"alt=""/></a>
        <div id="nav-part2">
            <h4><a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" target='_blank'>Learn</a></h4>
            <h4><a href="https://react.dev/reference/react" target='_blank'>Reference</a></h4>
            <h4><a href="https://legacy.reactjs.org/versions" target='blank'>v.18.2.0</a></h4>
        </div>
      </nav>
    </>
  )
}

export default Navbar