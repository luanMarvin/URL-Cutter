import { Request, Response, Router } from "express";
import OpenDB from "../database";

export const router = Router();

router.get('/', async (req: Request, res: Response) => { 
    try {
        const db = await OpenDB();
        const result = await db.all('SELECT * FROM links');
        res.status(200).json(result);
        db.close()
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    } 
});

router.get('/:name', async (req: Request, res: Response) => {
    const { name } = req.params;

    try {
        const db = await OpenDB();
        const result = await db.get(`SELECT complete_link FROM links WHERE name = ?`, [name]);
        const url:string = `http://${result.complete_link}`
        res.redirect(url);
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    }
})

router.post('/', async (req: Request, res: Response) => { 
    const { name, complete_link } = req.body;

    !name || !complete_link ? res.send(400).json({message: "É necessário incluir Nome e Link"}) : null

    const short_link = `${req.protocol}://${req.get('host')}/${name}`;

    const complete_linkClean = complete_link.replace(/^(https?:\/\/)/, '');

    try {
        const db = await OpenDB();
        await db.run(`INSERT INTO links (complete_link, short_link, name) VALUES (?, ?, ?)`, [complete_linkClean, short_link, name]);

        res.status(201).json({message: 'Novo cadastro Realizado'});
        db.close();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    }
});

router.put('/', async (req: Request, res: Response) => { 
    const {name, complete_link, newname} = req.body;
    try {
        const db = await OpenDB();
        const result = await db.run('UPDATE links SET name = ?, complete_link = ? WHERE name = ?', [name, complete_link, newname]);
        res.status(200).json(result);
        db.close();
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    } 
});

router.delete('/', async (req: Request, res: Response) => { 
    const { name } = req.body;
    try {
        const db = await OpenDB();
        const result = await db.run('DELETE from links WHERE name = ?', [name]);
        res.status(200).json(result);
        db.close();
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    } 
});
