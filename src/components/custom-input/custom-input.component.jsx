import React from "react"
import * as S from "./custom-input.styles.jsx"
import { Grid, InputAdornment, TextField } from "@mui/material"

const CustomInput = props => {
  const {
    children,
    name,
    className,
    errors,
    customError,
    isRequired,
    rows,
    register,
    placeholder,
    rowsMax,
    type = "text",
    halfWidth,
  } = props

  const getError = () => {
    if (errors[name]) {
      if (customError) {
        return customError
      }
      return "This is a required field"
    }
  }

  return (
    <Grid item xs={12} md={halfWidth ? 6 : 12}>
      <S.CustomTextField
        fullWidth
        multiline={!!rows || !!rowsMax}
        error={!!errors[name]}
        variant="outlined"
        rows={rows}
        rowsMax={rowsMax}
        required={!!isRequired}
        className={className}
        lang="es"
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">{children}</InputAdornment>
          ),
        }}
        // variant="outlined"
        color="primary"
        type={type}
        helperText={getError()}
        {...register(name, { required: isRequired })}
      />
    </Grid>
  )
}
export default CustomInput
