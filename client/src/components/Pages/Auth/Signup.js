export default function Signup() {
  const submit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="signup">
      <form onSubmit={submit}>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" />
        <label fpr="password">Password</label>
        <input id="password" name="password" type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}
