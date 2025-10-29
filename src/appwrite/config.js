import conf from "../conf/conf.js";
import { Client, ID, Databases, Query, Storage } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabseId,
        conf.appwriteTableId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabseId,
        conf.appwriteTableId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabseId,
        conf.appwriteTableId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Error deleting post:", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      const response = await this.databases.getDocument(
        conf.appwriteDatabseId,
        conf.appwriteTableId,
        slug
      );
      return response;
    } catch (error) {
      console.error("Error getting post:", error);
    }
  }

  //The query will fetch only active posts and work only if status is set as a index in appwrite.
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabseId,
        conf.appwriteTableId,
        queries
      );
    } catch (error) {
      console.error("Error getting posts:", error);
      return false;
    }
  }

  //file upload services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Error uploading file:", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Error deleting file:", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFileView(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Error getting file preview:", error);
    }
  }

}

const service = new Service();

export default service;
