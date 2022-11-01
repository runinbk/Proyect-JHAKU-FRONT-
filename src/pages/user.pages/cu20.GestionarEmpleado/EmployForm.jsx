import { Formik, Form } from "formik";
import { useEmploy } from "../../../context/user.context/cu20.GestionarEmpleado/EmployProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function EmployForm() {
  const { createEmploy, getEmploy, updateEmploy } = useEmploy();

  const [employ, setEmploy] = useState({
    id: "",
    login: "",
    password: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmploy = async () => {
      if (params.id) {
        const employ = await getEmploy(params.id);
        setEmploy({
          id: employ.id,
          login: employ.login,
          password: employ.password,
        });
      }
    };
    loadEmploy();
  }, []);

  return (
    <div>
      <Formik
        initialValues={employ}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateEmploy(params.id, values);
            navigate("/");
          } else {
            await createEmploy(values);
          }
          setEmploy({
            id: "",
            login: "",
            password: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1>{params.id ? "Edit Empleado" : "Create Empleado"}</h1>
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

export default EmployForm;