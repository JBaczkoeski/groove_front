import router from "@/helpers/router";
import api from '@/services/api';

const actions = {
    async create({ name, author, photo, description }){
        try {

            const response = await api.post('api/Artist/addTrack', {
                name,
                author,
                photo,
                description
            });

            if (response.status === 200) {
                const data = response.data;
                await router.push('#');
                return data;
            }else {
                return false;
            }
        }catch (error){
            console.error('Błąd podczas dodawania utworu:', error)
            return false;
        }
    }
}

export default {
    namespaced: true,
    actions,
}