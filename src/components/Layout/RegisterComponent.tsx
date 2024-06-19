/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from "yup";
import { useState } from "react";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";
import { FormikValues, useFormik } from "formik";
import { toast } from "react-toastify";

import { registerUser } from "../../services/apiService";
import { IRegisterFormValues } from "../../interfaces/layout.interface";

import "react-toastify/dist/ReactToastify.css";
import "../../styles/components/LoginRegister.scss";

const RegisterComponent = () => {
  const initialValues: IRegisterFormValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [submitting, setSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3).required("Name is required"),
    lastName: Yup.string().min(3).required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values: FormikValues) => {
    try {
      setSubmitting(true);
      const response = await registerUser(values);

      if (response.status == "success") {
        toast.success(response.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        formik.resetForm();
      } else {
        toast.error(response.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
      setSubmitting(false);
    } catch (error: any) {
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
