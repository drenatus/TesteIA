const request = require('supertest')
const urlcurrent = 'http://localhost:8080'


it('Inserir usuário', () => {
  return request (urlcurrent)
  .post('/agenda')
  .send({nome: "TesteApi", telefone: "876543210"})
  .expect(200)
  .expect((res) => {
    console.log(res.body)
   })
});

it('Listar usuários', () => {
  return request (urlcurrent)
  .get('/agenda')
  .expect(200)
  .then(res => {
    expect(res.body).toStrictEqual([{"nome":"TesteApi","telefone":"876543210"}])
    console.log(res.body)
   })
})

it('Validar que sistema não permite adicionar usuário existente', () => {
  return request (urlcurrent)
  .post('/agenda')
  .send({nome: "TesteApi", telefone: "012345678"})
  .expect(500)
  .expect((res) => {
    console.log(res.body)
   })
});

it('Deletar usuário', () => {
  return request (urlcurrent)
  .post('/apagar_agenda')
  .send({nome: "TesteApi", telefone: "876543210"})
  .expect(200, {})
  .expect((res) => {
    console.log(res.body)
   })
})



