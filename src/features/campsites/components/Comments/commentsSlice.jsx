// import { COMMENTS } from '../../../../app/shared/COMMENTS'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl } from '../../../../app/shared/baseUrl';
import {CommentForm} from './CommentForm'


export const fetchComments = createAsyncThunk(
      
   
   'comments/fetchComments',
   async () => {
       
      const response = await fetch(baseUrl + 'comments');
      




           if (!response.ok) {
               return Promise.reject('Unable to fetch, status: ' + response.status)
           }
           
           const data = await response.json();
           return data;
       
   }
)

export const postComment = createAsyncThunk(
   'comments/postComment',
   async (comment, { dispatch }) => {
      const response = await fetch(baseUrl + 'comments', {
         method: 'POST',
         headers:{ 'Content-Type': 'application/json' },
         body: JSON.stringify(comment),

      })
      
      if (!response.ok) {
         // throw new Error(response.statusText);
         return Promise.reject(response.status)
      }
   
      const data = await response.json();
   
      dispatch(addComment(data));
   
      return data;
   });


const initialState = {
   commentsArray: [],
   isLoading: true,
   errMsg: ''
}

const commentsSlice = createSlice({
   name: 'comments',
   initialState,
   reducers: {
      addComment: {
         reducer: (state, action) => {
            console.log(state)
            console.log({ action })
            console.log('addComment action.payload', action.payload);
            console.log('addComment state.commentsArray', state.commentsArray);
            const newComment = {
               id: state.commentsArray.length + 1,
               ...action.payload
            };
   
            console.log({ newComment })
   
            state.commentsArray.push(newComment);
         
         }
      }
   },
   extraReducers: {
      [fetchComments.pending]: (state) => {
          state.isLoading = true;
      },
      [fetchComments.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.errMsg = '';
          state.commentsArray = (action.payload);
      },
      [fetchComments.rejected]: (state, action) => {
          state.isLoading = false;
          // console.log(action.error);

          state.errMsg = action.error ? action.error.message : 'Fetch failed';
      }

      
   },
   reducer: {
      [fetchComments.rejected]: (state, action) => {
         alert('Your comment could not be posted\nError ' + (action.error ? action.error.message: 'Fetch failed'))
      }
   }
   

   
   
})


export const commentsSliceReducer=commentsSlice.reducer


export const {addComment} = commentsSlice.actions


export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
   return state.comments.commentsArray.filter((comment) => {
      return comment.campsiteId === parseInt(campsiteId)
   })


   // return {
   //    featuredItem: state.comments.commentsArray.filter((comment) => {
   //       return comment.campsiteId === parseInt(campsiteId);
   //    }),
   //    isLoading: state.campsites.isLoading,
   //    errMsg: state.campsites.errMsg
   // };
   
} 