import conf from '../conf/conf.js'
import { Client , ID, TablesDB, Storage, Query } from 'appwrite';

export class Service{
    client = new Client();
    tablesDB;
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.tablesDB = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug , content, featuredImage, status, userId}){
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                },
            });
        } catch (error) {
            console.log("Appwrite serive :: createPost : error: ",error);
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status
                },
            });
        } catch (error) {
            console.log("Appwrite serive :: updatePost : error: ",error);
        }
    }

    async deletePost(slug){
        try {
           await this.tablesDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            }); 
           return true;
        } catch (error) {
            console.log("Appwrite serive :: deletePost : error: ",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            });
        } catch (error) {
            console.log("Appwrite serive :: getPost : error: ",error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries,
            });
            
        } catch (error) {
            console.log("Appwrite serive :: getPosts : error: ",error);
        }
    }

    //file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique(),
                file
            });

        } catch (error) {
            console.log("Appwrite serive :: uploadFile : error: ",error)
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId
            });
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deleteFile : error: ",error)
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview({
            bucketId: conf.appwriteBucketId,
            fileId
        });
    }
}


const service = new Service();
export default service;