import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production' ? '' : '//localhost:3001'

export default {
    //START: Account APIs...
    sendEmail: function (messageInfo) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/send-email", data: [messageInfo] });
    },
    createAccount: function (newAccountInfo) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/create-account", data: newAccountInfo })
    },
    setEmailVerificationToken: function (email) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/set-email-verification-token", data: {email: email} })
    },
    checkExistingAccountEmails: function (email) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/check-existing-account-emails", data: [email] });
    },
    setEmailResetCode: function (email, generatedResetToken) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/reset-password-request", data: [email, generatedResetToken] });
    },
    checkEmailAndResetToken: function (email, resetToken) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/check-email-and-reset-token", data: {email:email, resetToken:resetToken} });
    },
    resetPassword: function (email, newPassword) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/reset-password", data: {email: email, newPassword: newPassword} });
    },
    login: function (email, password) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/reset-login", data: {email: email, password: password} });
    },
    setSessionAccessToken: function (id, sessionAccessToken) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/set-session-access-token", data: {id: id, sessionAccessToken: sessionAccessToken} });
    },
    //END: Account APIs...
    //START: Home page APIs...
    fetchAccountDetails: function (id) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/fetch-account-details", data: {id:id} });
    },
    testBackendToken: function () {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/test-backend-token", data: {}});
    }
    //END: Home page APIs...
};