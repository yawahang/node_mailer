import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import nodemailer from 'nodemailer';

export class UsersRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'user');
    }

    configureRoutes() {

        this.app.route(`/email`)
            // .get((req: express.Request, res: express.Response) => {
            //     res.status(200).send(`List of users`);
            // })
            .post((req: express.Request, res: express.Response) => {
                console.log("configureRoutes email post req =>" + req);
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
                let transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        type: 'OAuth2',
                        clientId: '865260303706-d24vfu02tkup71bupf4kpfnjrhb8pv27.apps.googleusercontent.com',
                        clientSecret: 'n5Y0J4gLD8Tl_qeZQW4xt5Mf'
                    }
                });

                transporter.sendMail({
                    from: "onlinehub79@gmail.com", // Sender address
                    to: "yawahangkoyu@gmail.com", // List of recipients
                    subject: "Test Node Mailer", // Subject line
                    // text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
                    html: "<h1>This is test Node Mailer mail from Yawahang!</h1>",
                    //   attachments: [
                    //     { // Use a URL as an attachment
                    //       filename: 'your-testla.png',
                    //       path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
                    //   }
                    // ]
                    // auth: {
                    //     user: 'user@example.com',
                    //     refreshToken: '1//04Pd1ZzLpyXnWCgYIARAAGAQSNwF-L9IreVDIH6ym-SZDbAOCimqhD0Tehrqei4crhSmvDUMvD9G-bL1CxuPzDqUnhXm0lFBwRlM',
                    //     accessToken: 'ya29.a0ARrdaM-c008oaUojmWRTsETff7VXnortO9NEYb-gxLSPqvPUm9pAhnpxzNhPMTQghqO6BE4t1pUpiQllM1_paIR03A0NEsGCYgKIMXUpUAlxnx9DbXv8GWdKfkG7icsKy5khH577jUixeU1sCqxs-tz6CrJI',
                    //     expires: 1484314697598
                    // }
                }, (err, info) => {
                    if (err) {
                        console.log("Error " + err);
                    } else {
                        console.log("Email sent successfully");
                        console.log(info);
                    }
                });

                // Node Mailer End
                res.status(200).send(`Contact Form Submitted!`);
            });

        // this.app.route(`/users/:userId`)
        //     .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
        //         // this middleware function runs before any request to /users/:userId
        //         // but it doesn't accomplish anything just yet---
        //         // it simply passes control to the next applicable function below using next()
        //         next();
        //     })
        //     .get((req: express.Request, res: express.Response) => {
        //         res.status(200).send(`GET requested for id ${req.params.userId}`);
        //     })
        //     .put((req: express.Request, res: express.Response) => {
        //         res.status(200).send(`PUT requested for id ${req.params.userId}`);
        //     })
        //     .patch((req: express.Request, res: express.Response) => {
        //         res.status(200).send(`PATCH requested for id ${req.params.userId}`);
        //     })
        //     .delete((req: express.Request, res: express.Response) => {
        //         res.status(200).send(`DELETE requested for id ${req.params.userId}`);
        //     });

        return this.app;
    }

}