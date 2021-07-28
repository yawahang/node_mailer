export interface BaseUserContact {
    subject: string;
    html: string;
    attachments: Attachment[];
}

export interface UserContact extends BaseUserContact {
    id: number;
}

export interface Attachment {
    filename: string,
    content: string,
    encoding: string
}