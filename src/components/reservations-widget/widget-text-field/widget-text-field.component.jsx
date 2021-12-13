import React from "react"
import * as S from "./widget-text-field.styles.jsx"
import { useFormContext } from "react-hook-form"
import { Controller } from "react-hook-form"

const WidgetTextField = ({
  name,
  isRequired = false,
  customError,
  minLength,
  pattern,
  validate,
  onChange,
  type = "text",
  ...otherProps
}) => {
  const { control } = useFormContext()

  const getError = error => {
    if (error) {
      return error.type === "required"
        ? "This is a required field"
        : customError
    }
    return ""
  }

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{
        required: isRequired,
        validate: validate ? value => validate(value) : null,
      }}
      render={({ field, fieldState, formState }) => {
        // if (name === "email" || name === "phone") {
        //   console.log("field", field)
        //   console.log("fieldState", fieldState)
        // }

        return (
          <S.Wrapper
            variant="outlined"
            // required={isRequired}
            color="inputs"
            error={!!fieldState.error}
            fullWidth
            margin="normal"
            value={field.value}
            inputRef={field.ref}
            InputLabelProps={{ shrink: true }}
            onChange={field.onChange}
            onBlur={field.onBlur}
            helperText={getError(fieldState.error)}
            type={type}
            {...otherProps}
          />
        )
      }}
    />
  )
}
export default WidgetTextField
