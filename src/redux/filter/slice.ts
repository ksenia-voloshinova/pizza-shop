import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FilterSliceState, Sort, SortPropertyEnum } from "./types"


const initialState: FilterSliceState = {
    searchValue: "",
    categoryId: 0,
    currentPage: 0,
    sort: {
      name: 'популярности',
      sortProperty: SortPropertyEnum.RATTINC_DESC
    }
  }
  
  export const filterSlice = createSlice({
      name: 'filters',
      initialState,
      reducers : {
          setCategoryId(state, action:PayloadAction<number>) {
            state.categoryId = action.payload
          },
          setSearchValue(state, action:PayloadAction<string>) {
            state.searchValue  = action.payload
          },
          setSort(state, action:PayloadAction<Sort>) {
            state.sort  = action.payload
          },
  
          setCurrentPage(state, action:PayloadAction<number>) {
            state.currentPage  = action.payload
          },
          setFilters(state, action:PayloadAction<FilterSliceState>) {
            state.searchValue = action.payload.searchValue
            state.sort  = action.payload.sort;
            state.currentPage  = Number(action.payload.currentPage);
            state.categoryId  = Number(action.payload.categoryId);
          }
      }
  })

  export const {setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions;
export default filterSlice.reducer;