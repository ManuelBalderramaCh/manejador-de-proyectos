const supertest = require('supertest');
const app = require('../app');
var key = "";
var id = "";

describe('Probar las rutas de las historias de usuarios', ()=>{
    it('Deberia de crear una historia', (done)=>{
        supertest(app).post('/userHistories')
        .send({
            name: 'prueba',
            context: 'contexto',
            priority: 'baja',
            events: 'Cancelado',
            column: 'primera'
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
    it('deberia de obtener la lista de historias', (done)=>{
        supertest(app).get('/userHistories')
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
    it('deberia de encontrar una historia', (done)=>{
        supertest(app).get(`/userHistories/${id}`)
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
    it('deberia de editar una historia', (done)=>{
        supertest(app).patch(`/userHistories/${id}`)
        .send({
            name: 'prueba',
            context: 'contexto',
            priority: 'baja',
            events: 'Cancelado',
            column: 'primera'
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
    it('deberia de reemplazar una historia', (done)=>{
        supertest(app).put(`/userHistories/${id}`)
        .send({
            name: 'prueba',
            context: 'contexto',
            priority: 'baja',
            events: 'Cancelado',
            column: 'primera'
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
    it('eliminar una historia', (done)=>{
        supertest(app).delete(`/userHistories/${id}`)
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
