const { gql } = require('apollo-server');

const typeDefs = gql`
    type Student{
        id:ID!
        name:String!
        department:String!
        rollno:Int!
        mobile:String!
    }

    type College{
        id:ID!
        name:String!
        course:String!
        location:String!
    }

    type Query {
    Students: [Student]!
    Student(id:ID!): Student!
    colleges: [College]!
}

 type Mutation{
    createstudent(name:String!,department:String!,rollno:Int!,mobile:String!):Student!
    updatestudent(id:ID!, name:String!, rollno:Int!, department:String!, mobile:String!):Student!
    deletestudent(id:ID!):Student!

    createcollege(name:String!, course:String!, location:String!):College!
    updatecollege(id:ID!, name:String!, course:String!, location:String!):College!
    deletecompany(id:ID!):College!
 }

`

module.exports = typeDefs;