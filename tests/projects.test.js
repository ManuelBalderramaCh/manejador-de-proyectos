const supertest = require('supertest');
const app = require('../app');
var key = "";
var id = "";

describe('Probar las rutas de los proyectos', ()=>{
    it('Deberia de crear un proyecto', (done)=>{
        supertest(app).post('/projects')
        .send({
            projectName: 'Manejador',
            applicationDate: '14/02/2023',
            startUpDate: '20/04/2023',
            description: 'Proyecto',
            projectManagerId: 'nvBo2ngV23rn',
            projectOwnerId: 'Nmgfk230r4kE',
            team: 'Ratongas'
        })
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                id = res.body.objs._id;
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('deberia de obtener la lista de proyectos', (done)=>{
        supertest(app).get('/projects')
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('deberia de encontrar un proyecto', (done)=>{
        supertest(app).get(`/projects/${id}`)
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('deberia de editar un proyecto', (done)=>{
        supertest(app).patch(`/projects/${id}`)
        .send({
            projectName: 'Manejador',
            applicationDate: '14/02/2023',
            startUpDate: '20/04/2023',
            description: 'Proyecto',
            projectManagerId: 'nvBo2ngV23rn',
            projectOwnerId: 'Nmgfk230r4kE',
            team: 'Ratongas'
        })
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('deberia de reemplazar un proyecto', (done)=>{
        supertest(app).put(`/projects/${id}`)
        .send({
            projectName: 'Manejador',
            applicationDate: '14/02/2023',
            startUpDate: '20/04/2023',
            description: 'Proyecto',
            projectManagerId: 'nvBo2ngV23rn',
            projectOwnerId: 'Nmgfk230r4kE',
            team: 'Ratongas'
        })
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
    it('eliminar un proyecto', (done)=>{
        supertest(app).delete(`/projects/${id}`)
        .set('Authorization', `Bearer ${key}`)
        .end(function(err, res){
            if(err){
                done(err);
            }else{
                expect(res.statusCode).toEqual(200);
                done();
            }
        })
    })
})
