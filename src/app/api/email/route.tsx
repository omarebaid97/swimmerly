import { NextResponse } from 'next/server';
import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY! || process.env.NEXT_PUBLIC_SENDGRID_API_KEY!);

type ResponseData = {
  status?: string;
  message?: string;
};

// console.log(process.env.SENDGRID_API_KEY || process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export async function POST(request: Request) {
  let response: ResponseData = {};
  const body = await request.json();

  const data = {
    to: "swimmerly23@gmail.com",
    from: "o.ebaid97@gmail.com",
    subject: "New Submission from Swimmerly",
    html: `
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>Swimmerly Message</title>
            <meta name="description" content="Swimmerly Message">
            <meta name="author" content="Swimmerly">
            <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
            <link rel="stylesheet" href="css/styles.css?v=1.0">
          </head>
          <body>
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new message from ${body.name}, their email is: ✉️${body.email}</h3>
              <div style="font-size: 16px;">
                <p>Phone: ${body.phone}</p>
                <p>Age: ${body.age}</p>
                <p>Message: ${body.message}</p>
                <br>
              </div>
            </div>
          </body>
          </html>
        `,
  };

  await mail
    .send(data)
    .then(() => {
      response = {
        status: 'success',
        message: "Your message was sent. I'll be in contact shortly.",
      };
    })
    .catch((error) => {
      response = {
        status: 'error',
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json(response);
}

