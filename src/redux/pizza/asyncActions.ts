import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    "pizza/fetchPizzasStatus",
    async ({ order, sortBy, category, search, currentPage }) => {
      const { data } = await axios.get<Pizza[]>(
        `https://62938de17aa3e6af1a0d4d66.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`
      );
  
      return data;
    }
  );