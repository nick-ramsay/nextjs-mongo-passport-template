import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production' ? 'https://nmpt-server-805c6f256a1e.herokuapp.com/' : '//localhost:3001'

// Create axios instance with credentials
const api = axios.create({
    baseURL: apiURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default {
    async login(email: string, password: string) {
        const response = await api.post('/api/next-js-mongo-passport-template/login', { email, password })
        return response.data
    },
    async logout() {
        const response = await api.post('/api/next-js-mongo-passport-template/logout')
        return response.data
    },
    async getCurrentUser() {
        const response = await api.get('/api/next-js-mongo-passport-template/user')
        return response.data
    },
    sendEmail(messageInfo: any) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/send-email", data: [messageInfo] });
    },
    createAccount(newAccountInfo: any) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/create-account", data: newAccountInfo })
    },
    setEmailVerificationToken(email: any) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/set-email-verification-token", data: { email: email } })
    },
    checkExistingAccountEmails(email: any) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/check-existing-account-emails", data: [email] });
    },
    setEmailResetCode(email: any, generatedResetToken: any) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/reset-password-request", data: [email, generatedResetToken] });
    },
    checkEmailAndResetToken(email: any, resetToken: any) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/check-email-and-reset-token", data: { email: email, resetToken: resetToken } });
    },
    resetPassword(email: any, newPassword: any) {
        return axios({ method: "post", url: apiURL + "/api/next-js-mongo-passport-template/reset-password", data: { email: email, newPassword: newPassword } });
    },
}