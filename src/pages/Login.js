export default function Login() {
  return (
    <div>
      <main className="container py-5" style={{ maxWidth: '560px' }}>
        <h1 className="brand-font text-choco mb-4">Iniciar sesión</h1>
        <form id="loginForm" className="needs-validation" noValidate>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input type="email" className="form-control" id="lemail" required />
            <div className="invalid-feedback">Ingresa tu correo.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="lpass"
              required
              minLength="6"
              maxLength="32"
            />
            <div className="invalid-feedback">Ingresa tu contraseña.</div>
          </div>
          <button className="btn btn-choco" type="submit">
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
}
