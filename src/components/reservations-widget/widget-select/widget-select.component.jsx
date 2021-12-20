import React from "react"
import * as S from "./widget-select.styles.jsx"
import { Controller, useFormContext } from "react-hook-form"
import { FormHelperText, InputLabel, Select } from "@mui/material"

const WidgetSelect = ({
  name,
  label,
  options,
  defaultValue,
  isRequired,
  ...otherProps
}) => {
  const { control } = useFormContext()
  return (
    <S.Wrapper variant="outlined" fullWidth>
      <Controller
        name={name}
        rules={{ required: isRequired }}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <>
            {label && <InputLabel id={`select-${name}`}>{label}</InputLabel>}

            <Select
              fullWidth
              labelId={`select-${name}`}
              // onChange={handleSetValue}
              displayEmpty
              error={!!fieldState.error}
              native
              inputRef={field.ref}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              label={label}
              color="secondary"
              {...otherProps}
            >
              {/*<option aria-label="None" value="" disabled />*/}
              {options?.map(option => (
                <option value={option.value ?? option}>
                  {option.label ?? option}
                </option>
              ))}
            </Select>
            {fieldState.error && (
              <FormHelperText style={{ color: "#f44336" }}>
                This is a required field
              </FormHelperText>
            )}
          </>
        )}
      />
    </S.Wrapper>
  )
}
export default WidgetSelect
