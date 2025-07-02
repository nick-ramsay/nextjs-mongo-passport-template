import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production' ? 'https://api.nextjs-mongo-passport-template.com' : '//localhost:3001'

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
    async getCurrentUser(currentPath: string) {
        const response = await api.get('/api/next-js-mongo-passport-template/user', { params: { currentPath } })
        return response.data
    },
    async sendEmail(messageInfo: any) {
        const response = await api.post('/api/next-js-mongo-passport-template/send-email', messageInfo)
        return response.data
    },
    async createAccount(newAccountInfo: any) {
        const response = await api.post('/api/next-js-mongo-passport-template/create-account', newAccountInfo)
        return response.data
    },
    async setEmailVerificationToken(email: any) {
        const response = await api.post('/api/next-js-mongo-passport-template/set-email-verification-token', { email })
        return response.data
    },
    async checkExistingAccountEmails(email: any) {
        const response = await api.post('/api/next-js-mongo-passport-template/check-existing-account-emails', [email])
        return response.data
    },
    async setEmailResetCode(email: any, generatedResetToken: any) {
        const response = await api.post('/api/next-js-mongo-passport-template/reset-password-request', { email, generatedResetToken })
        return response.data
    },
    async checkEmailAndResetToken(email: any, resetToken: any) {
        const response = await api.post('/api/next-js-mongo-passport-template/check-email-and-reset-token', { email, resetToken })
        return response.data
    },
    async resetPassword(email: any, newPassword: any) {
        const response = await api.post('/api/next-js-mongo-passport-template/reset-password', { email, newPassword })
        return response.data
    },
}