
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js')


  let projects = [{
    id: 'project-0',
    name: 'Sunrise Hospital',
    location: 'Kochi, Kerala'
  },
  {id: 'project-1',
    name: 'Holiday Inn',
    location: 'Singapore'
  }]

let idCount = projects.length
  const resolvers = {
    Query : {
      allProjects: () => projects
    },
    Project: {
      id: (root) => root.id,
      name: (root) => root.name,
      location: (root) => root.location,
    },
    Mutation: {
      createProject: (root,args) => {
        const project = {
          id: `project-${idCount++}`,
          name: args.name,
          location: args.location,
        }
        projects.push(project)
        return project
      }
    },
  }


  const server = new ApolloServer({typeDefs, resolvers });

  server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
