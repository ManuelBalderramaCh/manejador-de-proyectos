const supertest = require('supertest');
const app = require('../app');
var key = "";
var id = "";

describe('Probar las rutas de los equipos', ()=>{
    it('Deberia de crear un equipo', (done)=>{
        supertest(app).post('/teams')
        .send({
            teamName: 'Ratongas',
            teamMembers: 'Miguel'
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
    it('deberia de obtener la lista de equipos', (done)=>{
        supertest(app).get('/teams')
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
    it('deberia de encontrar un equipo', (done)=>{
        supertest(app).get(`/teams/${id}`)
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
    it('deberia de editar un equipo', (done)=>{
        supertest(app).patch(`/teams/${id}`)
        .send({
            teamName: 'Ratongas',
            teamMembers: 'Miguel'
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
    it('deberia de reemplazar un equipo', (done)=>{
        supertest(app).put(`/teams/${id}`)
        .send({
            teamName: 'Ratongas',
            teamMembers: 'Miguel'
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
    it('eliminar un equipo', (done)=>{
        supertest(app).delete(`/teams/${id}`)
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
