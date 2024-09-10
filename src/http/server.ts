import fastify from "fastify";

const app = fastify()

app
    .listen({                                /* Retorna uma promise*/ 
    port: 3333,
}).then(()=> {
    console.log('http server running')
})
