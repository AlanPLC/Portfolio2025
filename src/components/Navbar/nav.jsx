import './nav.scss'

function Nav() {

  return (
    <>
      <nav>
        <div className='nav1'>
            <h2>Alan.</h2>
        </div>
        <div className='nav2'>
            <ul>
                <li>Inicio</li>
                <li>Sobre mí</li>
                <li>Herramientas</li>
                <li>Ambiciones</li>
            </ul>
        </div>
        <div className='nav3'>
            <img src="among-us-svgrepo-com.svg" alt="amongus" />
            <img src="github-svgrepo-com.svg" alt="github" />
            <img src="linkedin-svgrepo-com.svg" alt="linkedin" />
        </div>
      </nav>
    </>
  )
}

export default Nav