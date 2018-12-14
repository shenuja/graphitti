module.exports = {
  Query: {
    allProjects: async (_,__,{dataSources}) =>
    dataSources.projectAPI.getAllProjects(),
    project:(_,{id},{dataSources}) =>
    dataSources.projectAPI.getProjectById(id),
    projectByLocation: async(_,{location},{dataSources}) =>
    dataSources.projectAPI.getProjectByLocation(location),
  },
  Mutation: {
    createProject: async (_,args,{dataSources}) => {
      let idCount = await dataSources.projectAPI.getProjectsLength();
      console.log("idcount = "+idCount);
      const project = {
        id: "project-"+idCount++,
        name: args.name,
        location: args.location,
      };
      return dataSources.projectAPI.createProject(project);
    },
  },
};
