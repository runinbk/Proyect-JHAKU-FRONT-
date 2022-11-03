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
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit User" : "Create User"}
            </h1>
            <label className="block">ID</label>
            <input
              type="text"
              name="id"
              placeholder="Write a ID"
              onChange={handleChange}
              value={values.id}
              className="px-2 py-1 rounded-sm w-full"
            />

            <label className="block">Login</label>
            <input
              type="text"
              name="login"
              placeholder="Write a LogIn"
              onChange={handleChange}
              value={values.login}
              className="px-2 py-1 rounded-sm w-full"
            />

            <label className="block">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Write a Password"
              onChange={handleChange}
              value={values.password}
            />
            <button
              type="submit"
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;
