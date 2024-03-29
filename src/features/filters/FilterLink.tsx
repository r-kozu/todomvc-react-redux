import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from './Link'
import { RootState } from '../../reducers'
import { setVisibilityFilter } from './filterSlice'

type LinkProps = React.ComponentProps<typeof Link>
type Props = Omit<Omit<LinkProps, 'active'>, 'setVisibilityFilter'>

const FilterLink: React.FC<Props> = (props) => {
  const dispatch = useDispatch()

  const visibilityFilter = useSelector(
    (state: RootState) => state.visibilityFilter
  )
  const active = props.filter === visibilityFilter

  return (
    <Link
      active={active}
      setVisibilityFilter={(filter) => dispatch(setVisibilityFilter(filter))}
      {...props}
    />
  )
}

export default FilterLink
