import { configureStore } from "@reduxjs/toolkit";

import {prepBytes} from '../Redux/Slice'

const store = configureStore({
    reducer: prepBytes
})
export default store;
