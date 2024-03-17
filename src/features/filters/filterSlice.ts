import { createSlice, PayloadAction, current } from '@reduxjs/toolkit'

export type VisibilityFiltersType =
  | 'SHOW_ALL'
  | 'SHOW_COMPLETED'
  | 'SHOW_ACTIVE'

const initialState: VisibilityFiltersType = 'SHOW_ALL'

const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: initialState as VisibilityFiltersType,
  reducers: {
    setVisibilityFilter(state, action: PayloadAction<VisibilityFiltersType>) {
      console.log(current(state))
      return action.payload
    },
  },
})

export const { setVisibilityFilter } = filtersSlice.actions

export default filtersSlice.reducer
