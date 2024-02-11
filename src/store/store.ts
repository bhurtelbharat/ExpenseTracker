
import rootReducer from './rootReducer'
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: rootReducer,
});
