import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="#">
              <img src="/images/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/images/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Alura</p>
      </section>
    </footer>
  )
}

export default Footer
