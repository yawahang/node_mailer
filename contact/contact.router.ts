import { BaseUserContact, UserContact } from '../interface/contact.interface';
import express, { Request, Response } from 'express';
import * as UserService from '../service/contact.service';

/**
 * Router Definition
 */
export const userRouter = express.Router();

/**
 * Controller Definitions
 */

// GET contacts
// curl http://localhost:7000/api/contact -i
userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const contact: UserContact[] = await UserService.findAll();

        res.status(200).send(contact);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// GET contacts/:id
// curl http://localhost:7000/api/contact/2 -i
userRouter.get('/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const contact: UserContact = await UserService.find(id);

        if (contact) {
            return res.status(200).send(contact);
        }

        res.status(404).send('Contact not found');
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// POST contacts
/**
 * curl -X POST -H 'Content-Type: application/json' -d '{
  "subject": "Subject 3",
  "html": "<h2>Hello 3</h2>"
}' http://localhost:7000/api/contact -i
 */
userRouter.post('/', async (req: Request, res: Response) => {
    try {
        const contact: BaseUserContact = req.body;

        const newContact = await UserService.create(contact);

        res.status(201).json(newContact);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// PUT contacts/:id
/**
 * curl -X POST -H 'Content-Type: application/json' -d '{
  "subject": "Subject 3",
  "html": "<h2>Hello 3</h2>"
}' http://localhost:7000/api/contact/2 -i
 */
userRouter.put('/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const contactUpdate: UserContact = req.body;

        const existingContact: UserContact = await UserService.find(id);

        if (existingContact) {
            const updatedItem = await UserService.update(id, contactUpdate);
            return res.status(200).json(updatedItem);
        }

        const newItem = await UserService.create(contactUpdate);

        res.status(201).json(newItem);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

// DELETE contacts/:id
//curl -X DELETE http://localhost:7000/api/contact/2 -i
userRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await UserService.remove(id);

        res.sendStatus(204);
    } catch (e) {
        res.status(500).send(e.message);
    }
});