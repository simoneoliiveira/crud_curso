import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS curso(
        id_curso INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        area TEXT NOT NULL,
        nivel TEXT NOT NULL,
        modalidade TEXT NOT NULL
    )
`);

function createCursoRepository(novoCurso) {
    return new Promise((resolve, reject) => {
        const {
            nome,
            area,
            nivel,
            modalidade
        } = novoCurso;

        db.run(
            `INSERT INTO curso(nome, area, nivel, modalidade)
            VALUES(?,?,?,?)`,
            [nome, area, nivel, modalidade],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(novoCurso);
                }
            }
        )
    });
}

export default {
    createCursoRepository
}
