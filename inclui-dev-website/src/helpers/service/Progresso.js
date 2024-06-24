import { WebClient } from "../api/WebClient";
import { useAuth } from "../auth/hooks/useAuth";

const { getUser } = useAuth();

export class Progresso {
    static async getProgresso(id) {
        try {
            const response = await WebClient.exchange(`/progresso?id=${id}`, "GET");
            return await response.json();
        } catch (error) {
            console.error('Error fetching progress:', error);
            throw error;
        }
    }

    static async setProgresso(curso, progresso) {
        return await WebClient.exchange(`/progresso`, "PUT", {
            "usuario" : getUser().id,
            "educativo" : curso,
            "progresso": progresso
        })
            .then(response => response.json())
            .catch(error => console.error('Error saving progress:', error))
    }

    static async check(curso) {
        const data = await WebClient.exchange(`/progresso/check?usuario=${getUser().id}&educativo=${curso}`, "GET")
            .then(response => response.json())

        return (data.modalidade) ? true : false
    }

    static async saveProgresso(curso) {
        return await WebClient.exchange(`/progresso`, "POST", {
            "usuario" : getUser().id,
            "educativo" : curso,
            "modalidade": "CURSO",
            "progresso": 0
        }).then(response => response.json())
        .catch(error => console.error('Error saving progress:', error))
    }
}
