exports.up = knex => knex.schema.createTable("movie_notes", table => {
  table.increments("id");
  table.text("title");
  table.text("description");
  table.text("rating")
  table.integer("user_id").references("id").inTable("users");

  table.timestamp("created_ad").default(knex.fn.now());
  table.timestamp("created_up").default(knex.fn.now());

});
  
exports.down = knex => knex.schema.dropTable("movie_notes");
