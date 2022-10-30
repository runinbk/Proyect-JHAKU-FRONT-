import { Formik, Form } from "formik";
import { useUser } from "../../../context/user.context/cu3.GestionarUsuario/UserProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserForm() {
  const { createUser, getUser, updateUser } = useUser();

  const [user, setUser] = useState({
    id: "",
    login: "",
    password: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setUser({
          id: user.id,
          login: user.login,
          password: user.password,
        });
      }
    };
    loadUser();
  }, []);

  return (
    <div>
      <Formik
        initialValues={user}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateUser(params.id, values);
            navigate("/");
          } else {
            await createUser(values);
          }
          setUser({
            id: "",
            login: "",
            password: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1>{params.id ? "Edit User" : "Create User"}</h1>
            <label>ID</label>
            <input
              type="text"
              name="id"
              placeholder="Write a ID"
              onChange={handleChange}
              value={values.id}
            />

            <label>Login</label>
            <input
              type="text"
              name="login"
              placeholder="Write a LogIn"
              onChange={handleChange}
              value={values.login}
            />

            <label>Password</label>
            <input
              type="text"
              name="password"
              placeholder="Write a Password"
              onChange={handleChange}
              value={values.password}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;
