import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "df653a493c6b92",
        pass: "1e7ee596c77158",
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe FeedWidget <oi@feedwidget.com>",
            to: "Douglas Duarte <douglasduarte.eng@gmail.com>",
            subject,
            html: body,
        });
    }
}
