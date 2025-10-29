import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //make the user login
        return await this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      console.error("Login failed:", error.message);
      throw new Error("Invalid credentials or network issue.");
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      if (error.code === 401) {
        console.log("User not logged in.");
      } else {
        console.log("Appwrite service :: getCurrentUser :: error", error);
      }
      return null; // always safe fallback
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions(); //Logout all the session of the user
    } catch (error) {
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;

// By importing this, we can access all the methods in this
// Each method is independent of the appWrite,thus can be modified to be used in any backend with just little modification.
//
