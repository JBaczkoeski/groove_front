export default function authHeader() {
    const token = localStorage.getItem('token');
    if (token) {
        return token;
    } else {
        return {};
    }
}