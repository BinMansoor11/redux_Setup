import { GET_RESTAURANT_DATA } from './types';

import { NavigationActions } from 'react-navigation';

// const accessPoint = 'http://3pikit.com/';

// const axios = require('axios');

// export const selectedOption = (optionSelected) => async (dispatch) => {
//   console.log(optionSelected);
//   dispatch({
//     type: GET_SELECT_OPTION,
//     payload: optionSelected,
//   });
// };

// export const selectRestaurant = (restaurant) => async (dispatch) => {
//   console.log(restaurant);
//   dispatch({
//     type: SELECTED_RESTAURANT,
//     payload: restaurant,
//   });
// };

// export const error = () => async (dispatch) => {
//   dispatch({ type: ERROR });
// };

// export const isArabic = (state) => async (dispatch) => {
//   dispatch({ type: IS_ARABIC, payload: state });
// };

// export const getRestrauntBanner = (accessToken) => async (dispatch) => {
//   // dispatch({
//   //   type: GET_RESTAURANT_BANNER,
//   //   payload: { baner: "banner working" }
//   // });
//   console.log('bannerraccess', accessToken);
//   dispatch({ type: LOADING });
//   const res = await axios
//     .post(
//       accessPoint + 'api/v1/featured-banner',
//       {},
//       {
//         headers: {
//           Accept: 'application/json',
//           Authorization: 'Bearer ' + accessToken,
//         },
//       },
//     )
//     .then((res) => {
//       console.log('Response of getrestrauntbanner is : ', res.data);
//       if (res.data.status) {
//         dispatch({
//           type: GET_RESTAURANT_BANNER,
//           payload: res.data.data.banner,
//         });
//         dispatch({ type: LOADED });
//       } else {
//         dispatch({ type: ERROR });
//       }
//     })
//     .catch(function (error) {
//       console.log('banner', error);
//     });
// };

// export const uploadProfilePic = (accessToken, image) => async dispatch => {
//   console.log(accessToken, image);
//   const imageData = { uri: image, name: "profilePic", type: "image/jpg" };
//   const bodyFormData = new FormData();

//   bodyFormData.append("profile_pic", imageData);
//   const up = await axios

//     .post(accessPoint + "api/v1/edit-profile", bodyFormData, {
//       headers: {
//         Accept: "application/json",
//         Authorization: "Bearer " + accessToken,
//         "Content-Type": "multipart/form-data"
//       }
//     })
//     .then(res => {
//       console.log(res);
//       // dispatch({
//       //   type: GET_RESTAURANT_DATA,
//       //   payload: res.data.data
//       // });
//       console.log("Navigating to Home");
//       dispatch(NavigationActions.navigate({ routeName: "Home" }));
//     })
//     .catch(function(error) {
//       console.log("Error is", error);
//     });

// };
