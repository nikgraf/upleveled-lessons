// Create the products table
exports.up = async (sql) => {
  sql`
        CREATE TABLE todos(
          id SERIAL PRIMARY KEY,
          title VARCHAR NOT NULL,
          checked BOOLEAN NOT NULL
        )
      `;
};

// Delete the products table
exports.down = async (sql) => {
  sql`
        DROP TABLE products
      `;
};
