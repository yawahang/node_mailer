import { BaseUserContact, UserContact } from '../interface/contact.interface';
import { UserContacts } from '../interface/contacts.interface';
import nodemailer from 'nodemailer';

/**
 * In-Memory Store
 */

let contacts: UserContacts = {
    1: { id: 1, subject: 'Mail 1', html: '<h2>Hello 1</h2>' },
    2: { id: 2, subject: 'Mail 1', html: '<h2>Hello 2</h2>' }
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<UserContact[]> => Object.values(contacts);

export const find = async (id: number): Promise<UserContact> => contacts[id];

export const create = async (contact: BaseUserContact): Promise<UserContact> => {

    const id = new Date().valueOf();
    contacts[id] = {
        id,
        ...contact,
    };
    // console.log('sendEmail contact =>', contact);

    // Node Mailer Start  
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         type: 'OAuth2',
    //         user: 'onlinehub79@gmail.com',
    //         pass: 'ONLINEhub$#',
    //         clientId: '865260303706-d24vfu02tkup71bupf4kpfnjrhb8pv27.apps.googleusercontent.com',
    //         clientSecret: 'n5Y0J4gLD8Tl_qeZQW4xt5Mf',
    //         refreshToken: '1//04Pd1ZzLpyXnWCgYIARAAGAQSNwF-L9IreVDIH6ym-SZDbAOCimqhD0Tehrqei4crhSmvDUMvD9G-bL1CxuPzDqUnhXm0lFBwRlM',
    //     },
    // });
    const OAUTH_CLIENTID: string = process.env.OAUTH_CLIENTID as string;
    const OAUTH_CLIENT_SECRET: string = process.env.OAUTH_CLIENT_SECRET as string;
    const MAIL_FROM: string = process.env.MAIL_FROM as string;
    const MAIL_TO: string = process.env.MAIL_TO as string;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            clientId: OAUTH_CLIENTID,
            clientSecret: OAUTH_CLIENT_SECRET
        }
    });
    //  Testing Nodemailer – Gmail integration using Mailtrap
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //         user: "1a2b3c4d5d6e7f", // replace with your Mailtrap credentials
    //         pass: "your_password"
    //     },
    //     debug: true, // show debug output
    //     logger: true // log information in console
    // });
    transporter.sendMail({
        from: MAIL_FROM,
        to: MAIL_TO,
        // to: [
        //     'yawahangkoyu@gmail.com',
        //     'onlinehub79@gmail.com'
        // ],
        subject: contact.subject, // Subject
        // text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
        // html: '<h1>This is test Node Mailer mail from Yawahang!</h1>',
        html: contact.html,
        attachments: contact.attachments,
        // attachments: [
        //     {   // encoded string as an attachment
        //         filename: 'text1.txt',
        //         content: 'aGVsbG8gd29ybGQh',
        //         encoding: 'base64'
        //     }
        // ]
        // auth: {
        //     user: 'user@example.com',
        //     refreshToken: '1//04Pd1ZzLpyXnWCgYIARAAGAQSNwF-L9IreVDIH6ym-SZDbAOCimqhD0Tehrqei4crhSmvDUMvD9G-bL1CxuPzDqUnhXm0lFBwRlM',
        //     accessToken: 'ya29.a0ARrdaM-c008oaUojmWRTsETff7VXnortO9NEYb-gxLSPqvPUm9pAhnpxzNhPMTQghqO6BE4t1pUpiQllM1_paIR03A0NEsGCYgKIMXUpUAlxnx9DbXv8GWdKfkG7icsKy5khH577jUixeU1sCqxs-tz6CrJI',
        //     expires: 1484314697598
        // }
    }, (err, info) => {

        if (err) {

            console.log('Error ' + err);
        } else {

            console.log('Email sent successfully');
            console.log(info);
        }
    });
    // Node Mailer End  
    return contacts[id];
};

export const update = async (id: number, itemUpdate: BaseUserContact): Promise<UserContact | null> => {

    const contact = await find(id);

    if (!contact) {
        return null;
    }

    contacts[id] = { id, ...itemUpdate };

    return contacts[id];
};

export const remove = async (id: number): Promise<null | void> => {

    const contact = await find(id);

    if (!contact) {
        return null;
    }

    delete contacts[id];
};