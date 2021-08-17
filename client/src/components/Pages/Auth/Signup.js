import { useMutation, gql } from "@apollo/client";
import { createUser } from "../../../graphql/mutation";

export default function Signup({ setPage }) {
  const [addUser, { data, loading, error }] = useMutation(createUser);
  try {
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
        setPage("error");
      }

      return message;
    };

    return (
      <div className="signup">
        {creationStatus()}
        <form onSubmit={submit}>
          <label for="email">Email</label>
          <input id="email" name="email" type="email" />
          <label for="password">Password</label>
          <input id="password" name="password" type="password" />
          <button>Submit</button>
        </form>
      </div>
    );
  } catch (e) {
    console.log("hi");
    return <h1>An error occured</h1>;
  }
}
