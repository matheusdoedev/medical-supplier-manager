import {
  GetMedicationsParams,
  GetMedicationsParamsReducerActionProps,
} from '@/interfaces'

export const getMedicationsParamsReducer = (
  state: GetMedicationsParams,
  action: GetMedicationsParamsReducerActionProps,
) => {
  switch (action.type) {
    case 'changeSearch':
      return { ...state, search: action.search }
    case 'goToFirstPage':
      return { ...state, page: 1 }
    case 'goToPreviousPage':
      return { ...state, page: state.page - 1 }
    case 'goToNextPage':
      return { ...state, page: state.page + 1 }
    case 'goToLastPage':
    default:
      return { ...state, page: action?.lastPage ?? 1 }
  }
}
