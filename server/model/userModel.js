import sql from "../config/db.js";

class UserModel{

    static async create(data){
        const query=`
         INSERT INTO users (email, password, full_name)
         VALUES ($1, $2, $3)
         RETURNING *;
        `
        const values = [data.email, data.password, data.full_name];
        const { rows } = await sql.query(query, values);
        return rows[0];
    }

    static async  findByEmail(email){
      const query=`select * from users where email=$1 and deleted_at is null`
      const values=[email];
      const {rows}=await sql.query(query,values);
      return rows[0];
    }

    static async findById(id){
      const query=`select * from users where id=$1 and deleted_at is null`
      const values=[id];
      const {rows}=await sql.query(query,values);
      return rows[0];
    }

    static async update(id,data){
      const query=`
      UPDATE users
      SET email=$1, password=$2, full_name=$3
      WHERE id=$4
      RETURNING *;
      `
      const values=[data.email, data.password, data.full_name, id];
      const {rows}=await sql.query(query,values);
      return rows[0];
    }

    static async softDelete(id){
       const query=`
        update users set deleted_at=NOW() where id=$1
       `
       const values=[id];
       await sql.query(query,values);
    }

}

export default UserModel;