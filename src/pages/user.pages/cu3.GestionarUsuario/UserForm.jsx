import { Formik, Form } from "formik";
import { createUserRequest } from "../../../api/user/cu3.GestionarUsuario.api";

function UserForm() {
  return (
    <div>
      <Formik
        initialValues={{
          id: "",
          login: "",
          password: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createUserRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
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
