import React, { forwardRef, useImperativeHandle } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { dateRegex, phoneRegex, zipRegex } from "utils/regexExpressions";
import { useAppDispatch } from "store/hooks";
import { setStep } from "store/app/app-slice";
import { submitOrder } from "api/submitOrder";
import { LegoMinifig } from "utils/interfaces";

type CustomFormProps = {
  selectedMinifig: LegoMinifig;
  ref: any;
};

const CustomForm: React.FC<CustomFormProps> = forwardRef(
  ({ selectedMinifig }, ref) => {
    const dispatch = useAppDispatch();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const validationSchema = yup.object({
      name: yup
        .string()
        .max(64, "Name is too long")
        .required("Name is required"),
      surname: yup
        .string()
        .max(64, "Surname is too long")
        .required("Surname is required"),
      phone: yup
        .string()
        .matches(phoneRegex, "Phone number is not valid. Eg. (555) 555-1234")
        .required("Phone number is required"),
      email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
      birth: yup
        .string()
        .matches(
          dateRegex,
          "Date is not valid. Correct pattern MM/DD/YYYY eg. 12/24/1999"
        )
        .required("Date is required"),
      address: yup
        .string()
        .max(64, "Address name is too long")
        .required("Address is required"),
      city: yup
        .string()
        .max(64, "City name is too long")
        .required("City is required"),
      state: yup
        .string()
        .max(64, "State name is too long")
        .required("State is required"),
      zip: yup
        .string()
        .matches(zipRegex, "Zip code is not valid. Eg. 48222")
        .required("Zip code is required"),
    });

    const formik = useFormik({
      initialValues: {
        name: "",
        surname: "",
        phone: "",
        email: "",
        birth: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        submitOrder({ ...values, minifig_id: selectedMinifig?.set_num }, () => {
          dispatch(setStep({ stepNumber: 0 }));
        });
      },
    });

    useImperativeHandle(ref, () => ({
      handleSubmit() {
        formik.handleSubmit();
      },
    }));

    return (
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        sx={{
          backgroundColor: "#ffffff",
          p: 3,
          borderRadius: "12px",
          m: 3,
        }}
      >
        <Grid container spacing={isSmall ? 0 : 2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              placeholder="Name"
              variant="outlined"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={(formik.touched.name && formik.errors.name) ?? " "}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="surname"
              name="surname"
              label="Surname"
              placeholder="Surame"
              variant="outlined"
              value={formik.values.surname}
              onChange={formik.handleChange}
              error={formik.touched.surname && Boolean(formik.errors.surname)}
              helperText={
                (formik.touched.surname && formik.errors.surname) ?? " "
              }
              size="small"
            />
          </Grid>
        </Grid>
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone number"
          type="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={(formik.touched.phone && formik.errors.phone) ?? " "}
          size="small"
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={(formik.touched.email && formik.errors.email) ?? " "}
          size="small"
        />
        <TextField
          fullWidth
          id="birth"
          name="birth"
          label="Date of birth"
          value={formik.values.birth}
          onChange={formik.handleChange}
          error={formik.touched.birth && Boolean(formik.errors.birth)}
          helperText={(formik.touched.birth && formik.errors.birth) ?? " "}
          size="small"
        />
        <TextField
          fullWidth
          id="address"
          name="address"
          label="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={(formik.touched.address && formik.errors.address) ?? " "}
          size="small"
        />
        <TextField
          fullWidth
          id="city"
          name="city"
          label="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={(formik.touched.city && formik.errors.city) ?? " "}
          size="small"
        />
        <Grid container spacing={isSmall ? 0 : 2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="state"
              name="state"
              label="State"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={(formik.touched.state && formik.errors.state) ?? " "}
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="zip"
              name="zip"
              label="Zip code"
              value={formik.values.zip}
              onChange={formik.handleChange}
              error={formik.touched.zip && Boolean(formik.errors.zip)}
              helperText={(formik.touched.zip && formik.errors.zip) ?? " "}
              size="small"
            />
          </Grid>
        </Grid>
      </Box>
    );
  }
);

CustomForm.displayName = "CustomForm";

export default CustomForm;
