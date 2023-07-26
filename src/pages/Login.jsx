import { Container } from "react-bootstrap"

const Login = () => {
  return (
    <Container className="d-flex align-items-center py-4 bg-body-tertiary">

      <main className="form-signin w-100 m-auto">
  <form>
    <h1 className="h3 mb-3 fw-normal">Log in</h1>

    <div className="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
      <label for="floatingInput" className='text-muted'>Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword" className='text-muted'>Password</label>
    </div>

    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
  </form>
</main>
    </Container>
  )
}

export default Login