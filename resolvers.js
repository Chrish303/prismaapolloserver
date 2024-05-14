const { PrismaClient } = require('@prisma/client');
const { update } = require('lodash');
const prisma = new PrismaClient();

const resolvers = {
    Query: {
        Students: async () => {
            try {
                return await prisma.student.findMany();
            } catch (error) {
                console.error(error);
                throw new Error('Failed to fetch students');
            }
        },
        Student: async (_, { id }) => {
            try {
                return await prisma.student.findUnique({
                    where: { id: parseInt(id) } 
                });
            } catch (error) {
                console.error(error);
                throw new Error('Failed to find student');
            }
        },
        colleges:async()=>{
            try{
                return await prisma.college.findMany();
            }catch(error){
                console.error('Error to fetch data',error);
                throw new Error('Failed to fetch data')
            }
        }
    },
    Mutation: {
        createstudent: async (_, { name, department, rollno, mobile }) => {
            try {
                const student = await prisma.student.create({
                    data: {
                        name: name,
                        department: department,
                        rollno: rollno,
                        mobile: mobile
                    }
                });
                return student;
            } catch (error) {
                console.error('Error creating student:', error);
                throw new Error('Failed to create a new student');
            }
        },
        updatestudent: async(_, { id, name, department, rollno, mobile }) => {
            try {
                const student = await prisma.student.update({
                    where: { id: parseInt(id) }, // Parse id to number
                    data: {
                        name: name,
                        department: department,
                        rollno: rollno,
                        mobile: mobile
                    }
                });
                return student;
            } catch (error) {
                console.error('Error updating student:', error);
                throw new Error('Failed to update student');
            }
        },
        deletestudent: async (_, { id }) => {
            try {
                await prisma.student.delete({
                    where:{ id: parseInt(id) }
                });
                return { message: 'Student deleted successfully' };
            } catch (error) {
                console.error('Error deleting student', error);
                throw new Error('Failed to delete student');
            }
        },
        createcollege:async(_,{name,course,location})=>{
            try{
                const college = await prisma.college.create({
                    data:{
                        name:name,
                        course:course,
                        location:location
                    }
                });return college;
            }catch(error){
                console.error('Error to create college',error);
                throw new Error('Failed to Create company')
            }
        },
        updatecollege:async(_,{id,name,course,location})=>{
            try{
                const college = await prisma.college.update({
                    where:{id:parseInt(id)},
                    data:{
                        name:name,
                        course:course,
                        location:location
                    }
                });return college
            }catch(error){
                console.error('Error to update company',error);
                throw new Error('Failed to update company')
            }
        },
        deletecompany:async(_,{id})=>{
            try{
                const college = await prisma.college.delete({
                    where:{id:parseInt(id)}
                });return college
            }catch(error){
                console.error('Error to delete',error);
                throw new Error('Failed to delete company')
            }
        }
    }
};

module.exports = resolvers;
