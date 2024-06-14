import * as Yup from "yup";
import { useState } from "react";
import { FormikValues, useFormik } from "formik";

import "../../styles/components/LoginRegister.scss";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";

interface IRegisterFormValues {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterComponent = () => {
  const [submitting, setSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required("Name is required"),
    lastName: Yup.string().min(3).required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues: IRegisterFormValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: FormikValues) => {
    try {
      setSubmitting(true);
      console.log("=>", values);
      // Aquí puedes manejar el envío del formulario, por ejemplo, hacer una solicitud a una API
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="content-wrapper">
      <div className="title-text">Create your free account!</div>

      <div className="form-content-wrapper">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Stack
            direction="row"
            justifyContent="space-between"
            className="name-lastname-stack"
          >
            <Stack direction="column">
              <label className="label-text" htmlFor="name">
                Enter your name
              </label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Your name here"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error">{formik.errors.name}</div>
              )}
            </Stack>

            <Stack direction="column">
              <label className="label-text" htmlFor="lastName">
                Enter your last name
              </label>
              <input
                className="input"
                type="text"
                name="lastName"
                placeholder="Your last name here"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="error">{formik.errors.lastName}</div>
              )}
            </Stack>
          </Stack>

          <Stack direction="column">
            <label className="label-text" htmlFor="email">
              Enter your email
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Your email here"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </Stack>

          <Stack direction="column">
            <label className="label-text" htmlFor="password">
              Enter your password
            </label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Your password here"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </Stack>

          <div className="submit-button">
            <Button
              variant="contained"
              type="submit"
              disabled={submitting || !formik.isValid}
              fullWidth
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
