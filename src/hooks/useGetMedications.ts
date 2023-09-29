import { ChangeEvent, useEffect, useMemo, useReducer, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { GET_MEDICATIONS_PARAMS_DEFAULT_VALUE } from '@/constants'
import { getMedicationsParamsReducer } from '@/hooks'
import { GetWithPagination, Medication } from '@/interfaces'
import { interviewService } from '@/services'

export const useGetMedications = () => {
  const [searchError, setSearchError] = useState<string | undefined>(undefined)
  const [limitError, setLimitError] = useState<string | undefined>(undefined)

  const [params, paramsDispatch] = useReducer(
    getMedicationsParamsReducer,
    GET_MEDICATIONS_PARAMS_DEFAULT_VALUE,
  )

  const navigate = useNavigate()

  const {
    data: getMedicationsData,
    isFetching: isFetchingMedications,
    refetch,
  } = useQuery('getMedications', () => interviewService.getMedications(params))

  const { data: medicationsData, last_page }: GetWithPagination<Medication> =
    useMemo(() => {
      if (!getMedicationsData) return { data: [], last_page: 1, total: 0 }

      return getMedicationsData.data
    }, [getMedicationsData])

  const goToCreateMedicineView = () => {
    navigate('/create-medicine')
  }

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    paramsDispatch({ type: 'changeSearch', search: event.target.value })
  }

  const handleChangeLimit = (event: ChangeEvent<HTMLInputElement>) => {
    paramsDispatch({ type: 'changeLimit', limit: Number(event.target.value) })
  }

  useEffect(() => {
    refetch()
  }, [params.page, refetch])

  useEffect(() => {
    if (
      params.search &&
      params.search.length < 3 &&
      params.search.length >= 1
    ) {
      setSearchError('Must have at least 3 characters.')
    } else {
      setSearchError(undefined)
      paramsDispatch({ type: 'goToFirstPage' })
      refetch()
    }
  }, [params.search, refetch])

  useEffect(() => {
    if (params.limit > 1000) {
      setLimitError('Max: 1000')
    } else if (params.limit <= 0) {
      setLimitError('Min: 1')
    } else {
      setLimitError(undefined)
      paramsDispatch({ type: 'goToFirstPage' })
      refetch()
    }
  }, [params.limit, refetch])

  return {
    handleChangeLimit,
    medicationsData,
    last_page,
    searchError,
    limitError,
    params,
    paramsDispatch,
    setSearchError,
    isFetchingMedications,
    goToCreateMedicineView,
    handleChangeSearch,
  }
}
