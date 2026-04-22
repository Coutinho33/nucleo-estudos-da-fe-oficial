
export default function Page(){
return <main>
<header className="container" style={{display:'flex',justifyContent:'space-between'}}>
<h1>Núcleo de Estudos da Fé</h1><nav>Artigos • Downloads • Sobre</nav>
</header>
<section className="container" style={{textAlign:'center',padding:'60px 24px'}}>
<h2 style={{fontSize:'48px'}}>Buscar conhecimento pela fé e pelo estudo</h2>
<p>Portal de estudos para membros de A Igreja de Jesus Cristo dos Santos dos Últimos Dias.</p>
</section>
<section className="container">
<h3>Artigos</h3>
<div className="grid grid-3">
<div className="card">A Fé em Jesus Cristo</div>
<div className="card">Estudo das Escrituras</div>
<div className="card">História da Restauração</div>
</div>
</section>
<section className="container">
<h3>Downloads</h3>
<div className="grid grid-3">
<div className="card">Guia de Estudo (PDF)</div>
<div className="card">Plano Semanal (DOCX)</div>
<div className="card">Biblioteca Básica</div>
</div>
</section>
<footer className="container">© 2026 Núcleo de Estudos da Fé</footer>
</main>
}
