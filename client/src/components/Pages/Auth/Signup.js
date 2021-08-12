import { useMutation, gql } from "@apollo/client";
import { createUser } from "../../../graphql/mutation";

export default function Signup() {
  const [addUser, { data, loading, error }] = useMutation(createUser);

  const submit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    console.log(email, password);

    addUser({ variables: { email, password } });
    email = "";
    password = "";
  };

  const creationStatus = () => {
    let message = "Please fill up the fields below to sign up!";

    if (loading) message = "Creating user, please wait...";
    if (data) message = `User '${data.createUser.email}' has been created!`;
    if (error) {
      console.log(Object.keys(error));
    }

    return message;
  };

  return (
    <div className="signup">
      {creationStatus()}
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
