const supertest = require('supertest');
const app = require('../app');
var key = "";
var id = "";

describe('Probar las rutas de las columnas', ()=>{
    it('Deberia de crear una columna', (done)=>{
        supertest(app).post('/columns')
        .send({
           title: 'Primera',
           stories: 'prueba'
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
    it('deberia de obtener la lista de columnas', (done)=>{
        supertest(app).get('/columns')
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
    it('deberia de encontrar una columna', (done)=>{
        supertest(app).get(`/columns/${id}`)
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
    it('deberia de editar una columna', (done)=>{
        supertest(app).patch(`/columns/${id}`)
        .send({
            title: 'Primera',
            stories: 'prueba'
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
    it('deberia de reemplazar una columna', (done)=>{
        supertest(app).put(`/columns/${id}`)
        .send({
            title: 'Primera',
           stories: 'prueba'
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
    it('eliminar una columna', (done)=>{
        supertest(app).delete(`/columns/${id}`)
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
