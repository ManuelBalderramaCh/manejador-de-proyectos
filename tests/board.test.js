const supertest = require('supertest');
const app = require('../app');
var key = "";
var id = "";

describe('Probar las rutas de las board', ()=>{
    it('Deberia de crear un board', (done)=>{
        supertest(app).post('/boards')
        .send({
           title: 'Board1',
           columna: 'Primera'
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
    it('deberia de obtener la lista de boards', (done)=>{
        supertest(app).get('/boards')
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
    it('deberia de encontrar un board', (done)=>{
        supertest(app).get(`/boards/${id}`)
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
    it('deberia de editar un board', (done)=>{
        supertest(app).patch(`/boards/${id}`)
        .send({
            title: 'Board1',
            columna: 'Primera'
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
    it('deberia de reemplazar un board', (done)=>{
        supertest(app).put(`/boards/${id}`)
        .send({
            title: 'Board1',
            columna: 'Primera'
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
    it('eliminar un board', (done)=>{
        supertest(app).delete(`/boards/${id}`)
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
