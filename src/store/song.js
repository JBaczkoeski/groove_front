import router from "@/helpers/router";
import api from '@/services/api';

const actions = {
    async createSong({Name, author, Img, description, UserId }){
        try {
            const response = await api.post('/api/Artist/AddTrack', {
                Name,
                author,
                Img,
                description,
                UserId
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