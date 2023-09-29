import { FC } from 'react'
import { styled } from 'styled-components'
import { Autocomplete, Stack, TextField } from '@mui/material'

import { AutocompleteFieldProps, AutocompleteOption } from '@/interfaces'

import { InputError, InputHead, InputLabel, InputWrapper } from '@/styles'

const AutocompleteField: FC<AutocompleteFieldProps> = ({
  options,
  value,
  onChange,
  label,
  $error,
  placeholder,
}) => {
  const handleChange = (value: AutocompleteOption[]) => {
    onChange(value)
  }

  const handleLabel = () => label && <InputLabel>{label}</InputLabel>

  const handleErrorText = () => $error && <InputError>{$error}</InputError>

  return (
    <AutocompleteWrapper data-testid="autocomplete">
      <InputHead>
        {handleLabel()}
        {handleErrorText()}
      </InputHead>
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
          options={options}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(_e, value) => handleChange(value)}
          value={value}
          renderInput={(params) => (
            <TextField {...params} placeholder={placeholder} />
          )}
        />
      </Stack>
    </AutocompleteWrapper>
  )
}

const AutocompleteWrapper = styled(InputWrapper)`
  && {
    .MuiStack-root {
      max-width: 350px;
    }

    .MuiInputBase-root {
      padding: 3px 15px;
    }

    .MuiInputBase-input {
      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.secondary};
      color: ${({ theme }) => theme.colors.quaternary['500']};

      &::placeholder {
        color: ${({ theme }) => theme.colors.terciary['600']};
        line-height: 1.1em;
      }
    }

    .MuiChip-root {
      background: ${({ theme }) => theme.colors.secondary['600']};
      border-radius: 4px;
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-size: 14px;
      margin: 0 4px 0 0;
      color: ${({ theme }) => theme.colors.terciary['400']};
      height: 24px;
    }

    .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${({ theme }) => theme.colors.terciary['600']};
    }

    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid ${({ theme }) => theme.colors.primary['400']};
    }
  }
`

export default AutocompleteField
