import Knex from 'knex';

export async function up(knex : Knex){
    //CRIAR A TABELA (fazer as coisas)
    return knex.schema.createTable('itens', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex : Knex){
    //DELETAR TABELA (voltar atrás)
   return knex.schema.dropTableIfExists('itens');
}