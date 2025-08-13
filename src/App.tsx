import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const container = document.querySelector(".page-container");
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.setProperty("--rand-x", Math.random());
      p.style.setProperty("--rand-y", Math.random());
      p.style.setProperty("--rand-rot", Math.random());
      container.appendChild(p);

      setTimeout(() => {
        p.style.opacity = "1";
      }, i * 20); // efeito escalonado
    }
  }, []);

  return (
    <div className="page-container">
      <h1>Meu Site</h1>
      <p>Conteúdo principal permanece intacto!</p>

      <footer className="footer">
        <p>© 2025 Minha Empresa</p>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
}
