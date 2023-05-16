const supertest = require('supertest');
const app = require('../app');
var key = "";
var id = "";

describe('Probar las rutas de los roles', ()=>{
    it('Deberia de crear un rol', (done)=>{
        supertest(app).post('/roles')
        .send({
            description: 'Lider',
            permissionType: 'ProductOwner'
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
    it('deberia de obtener la lista de roles', (done)=>{
        supertest(app).get('/roles')
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
    it('deberia de encontrar un rol', (done)=>{
        supertest(app).get(`/roles/${id}`)
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
    it('deberia de editar un rol', (done)=>{
        supertest(app).patch(`/roles/${id}`)
        .send({
            description: 'Lider',
            permissionType: 'ProductOwner'
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
    it('deberia de reemplazar un rol', (done)=>{
        supertest(app).put(`/teams/${id}`)
        .send({
            description: 'Lider',
            permissionType: 'ProductOwner'
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
    it('eliminar un rol', (done)=>{
        supertest(app).delete(`/roles/${id}`)
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
