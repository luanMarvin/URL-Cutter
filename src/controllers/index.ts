import { Request, Response, Router } from "express";
import OpenDB from "../database";

export const router = Router();

router.get('/', async (req: Request, res: Response) => { 
    try {
        const db = await OpenDB();
        const result = await db.all('SELECT * FROM links');
        res.render('index', { links: result }); 
        db.close();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    } 
});

router.get('/:name', async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        const db = await OpenDB();
        const result = await db.get(`SELECT complete_link FROM links WHERE name = ?`, [name]);
        if(result === undefined){
            res.redirect(`${req.protocol}://${req.get('host')}/`) //Se o link não existir redireciona para esse link 
        } else {
            const url: string = `${req.protocol}://${result.complete_link}`;
            res.redirect(url);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    }
});

router.post('/', async (req: Request, res: Response) => { 

    const { name, complete_link } = req.body;

    if (!name || !complete_link) {
        res.status(400).json({ message: "É necessário incluir Nome e Link" });
    }

    try {
        const short_link = `${req.protocol}://${req.get('host')}/${name}`;
        const complete_linkClean = complete_link.replace(/^(https?:\/\/)/, '');
        const db = await OpenDB();
        const verify = await db.get(`SELECT name FROM links WHERE name = ?`, [name]);
        if(verify === undefined){
            await db.run(`INSERT INTO links (complete_link, short_link, name) VALUES (?, ?, ?)`, [complete_linkClean, short_link, name]);
            res.status(201);
            db.close();
        } else {
            res.status(409).json({ message: 'já existe uma url com esse nome'}) //Tentar gravar uma Url já existente
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    }
});

router.put('/', async (req: Request, res: Response) => {
    const { name, complete_link, newname } = req.body;

    try {
        const db = await OpenDB();
        await db.run('UPDATE links SET name = ?, complete_link = ? WHERE name = ?', [newname, complete_link, name]);
        db.close();
        res.status(200).json({ message: 'Link atualizado com sucesso' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    } 
});


router.delete('/', async (req: Request, res: Response) => { 
    const { name } = req.body;
    try {
        const db = await OpenDB();
        await db.run('DELETE from links WHERE name = ?', [name]);
        res.status(200).redirect('/');
        db.close();
    } catch (err) { 
        console.error(err);
        res.status(500).json({ message: 'Ocorreu um erro inesperado.' });
    } 
});
