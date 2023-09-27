import { FC } from 'react'
import { Autocomplete, Stack, TextField } from '@mui/material'

import { AutocompleteFieldProps, AutocompleteOption } from '@/interfaces'

const AutocompleteField: FC<AutocompleteFieldProps> = ({
  options,
  value,
  onChange,
}) => {
  const handleChange = (value: AutocompleteOption[]) => {
    onChange(value)
  }

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        isOptionEqualToValue={(option, value) => option.value === value.value}
        onChange={(e, value) => handleChange(value)}
        value={value}
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
          />
        )}
      />
    </Stack>
  )
}

export default AutocompleteField
