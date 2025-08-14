import conf from '../conf/conf';
import {Client, Account, ID} from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);

    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount) {
                //calling another method
                return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
    
        } catch (error) {
            if (error.code === 401) {
                console.warn('User is not logged in.');
            } else {
                console.error("AuthService :: getCurrentuser :: error", error);
            }
        return null;
    }
}

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService;