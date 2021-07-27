"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const nodemailer_1 = __importDefault(require("nodemailer"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'user');
    }
    configureRoutes() {
        this.app.route(`/email`)
            // .get((req: express.Request, res: express.Response) => {
            //     res.status(200).send(`List of users`);
            // })
            .post((req, res) => {
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
            let transporter = nodemailer_1.default.createTransport({
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
                from: "onlinehub79@gmail.com",
                to: "yawahangkoyu@gmail.com",
                subject: "Test Node Mailer",
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
                }
                else {
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
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQW9FO0FBRXBFLDREQUFvQztBQUVwQyxNQUFhLFdBQVksU0FBUSx5Q0FBa0I7SUFFL0MsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3BCLDBEQUEwRDtZQUMxRCw2Q0FBNkM7WUFDN0MsS0FBSzthQUNKLElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdkQscUJBQXFCO1lBRXJCLGlEQUFpRDtZQUNqRCx3QkFBd0I7WUFDeEIsY0FBYztZQUNkLDBCQUEwQjtZQUMxQix5Q0FBeUM7WUFDekMsK0JBQStCO1lBQy9CLGdHQUFnRztZQUNoRyxvREFBb0Q7WUFDcEQsbUlBQW1JO1lBQ25JLFNBQVM7WUFDVCxNQUFNO1lBQ04sSUFBSSxXQUFXLEdBQUcsb0JBQVUsQ0FBQyxlQUFlLENBQUM7Z0JBQ3pDLElBQUksRUFBRSxnQkFBZ0I7Z0JBQ3RCLElBQUksRUFBRSxHQUFHO2dCQUNULE1BQU0sRUFBRSxJQUFJO2dCQUNaLElBQUksRUFBRTtvQkFDRixJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsMEVBQTBFO29CQUNwRixZQUFZLEVBQUUsMEJBQTBCO2lCQUMzQzthQUNKLENBQUMsQ0FBQztZQUVILFdBQVcsQ0FBQyxRQUFRLENBQUM7Z0JBQ2pCLElBQUksRUFBRSx1QkFBdUI7Z0JBQzdCLEVBQUUsRUFBRSx3QkFBd0I7Z0JBQzVCLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLHVGQUF1RjtnQkFDdkYsSUFBSSxFQUFFLHVEQUF1RDtnQkFDN0QsbUJBQW1CO2dCQUNuQixzQ0FBc0M7Z0JBQ3RDLHFDQUFxQztnQkFDckMsb0pBQW9KO2dCQUNwSixNQUFNO2dCQUNOLElBQUk7Z0JBQ0osVUFBVTtnQkFDVixnQ0FBZ0M7Z0JBQ2hDLCtIQUErSDtnQkFDL0gsMExBQTBMO2dCQUMxTCw2QkFBNkI7Z0JBQzdCLElBQUk7YUFDUCxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUNiLElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxrQkFBa0I7WUFDbEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztRQUVQLG1DQUFtQztRQUNuQywwRkFBMEY7UUFDMUYsZ0ZBQWdGO1FBQ2hGLDREQUE0RDtRQUM1RCx5RkFBeUY7UUFDekYsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCw4REFBOEQ7UUFDOUQsNkVBQTZFO1FBQzdFLFNBQVM7UUFDVCw4REFBOEQ7UUFDOUQsNkVBQTZFO1FBQzdFLFNBQVM7UUFDVCxnRUFBZ0U7UUFDaEUsK0VBQStFO1FBQy9FLFNBQVM7UUFDVCxpRUFBaUU7UUFDakUsZ0ZBQWdGO1FBQ2hGLFVBQVU7UUFFVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUVKO0FBNUZELGtDQTRGQyJ9