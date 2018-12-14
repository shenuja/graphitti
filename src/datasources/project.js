 const { RESTDataSource } = require('apollo-datasource-rest');

 class ProjectAPI extends RESTDataSource{
   constructor(){
     super();
     this.baseURL = 'http://localhost:3000/'
   }

   async getProjectById(id){
     return this.get('projects/project-'+id);
   }

   async getProjectByLocation(location){
     const data = await this.get('projects?location_like='+location);
     return data && data.length ? data.map(p => this.projectReducer(p)) : [];
   }

   async getAllProjects(){
     const data = await this.get('projects');
     return data && data.length ? data.map(p => this.projectReducer(p)) : [];
   }

   async getProjectsLength(){
     const data = await this.get('projects');
     return data && data.length ? data.length : 0
   }

   async createProject(project){
     return this.post(
           `projects`, // path
           project, // request body
         );
   }

   projectReducer(project){
     return {
       id: project.id,
       name:project.name,
       location: project.location,
     };
   }
 }

module.exports = ProjectAPI;
