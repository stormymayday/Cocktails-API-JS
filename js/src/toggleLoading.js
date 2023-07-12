import getElement from "../utils/getElement.js";

const loading = getElement('.loading');

export const showLoading = () => {

    loading.classList.remove('hide-loading');

};

export const hideLoading = () => {

    loading.classList.add('hide-loading');

};
