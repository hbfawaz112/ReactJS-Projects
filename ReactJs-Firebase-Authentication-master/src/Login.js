import React from "react";

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
          {!hasAccount ? (<h2>Create An Account</h2>) : (<h2>Welcome Again , Login</h2>)}

        <label>User Name</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="errorMsg">{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="errorMsg">{passwordError}</p>

        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                {" "}
                Don'thave an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Sign up
                </span>{" "}
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}> Sign up</button>
              <p>
                {" "}
                Have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>
                  Sigin
                </span>{" "}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Login;
