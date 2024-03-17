import React from 'react'
import { VisibilityFiltersType } from './filterSlice'

const Link: React.FC<Props> = ({
  active,
  children,
  setVisibilityFilter,
  filter,
}) => (
  <button
    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
)

interface Props {
  active: boolean
  children: any
  setVisibilityFilter: (filter: VisibilityFiltersType) => any
  filter: VisibilityFiltersType
}

export default Link
