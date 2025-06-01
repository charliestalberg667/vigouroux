import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_fiR8LuEG_NPRipuNaSBRLZmzwaHnuukyd');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received contact form request body:', body);

    const { name, email, phone, message, language } = body;

    const subject = language === 'fr' 
      ? 'Nouveau message de contact - Vigouroux'
      : 'Nieuw contactbericht - Vigouroux';

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FF6F3C;">${language === 'fr' ? 'Nouveau message de contact' : 'Nieuw contactbericht'}</h2>
        <p><strong>${language === 'fr' ? 'Nom' : 'Naam'}:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>${language === 'fr' ? 'Téléphone' : 'Telefoon'}:</strong> ${phone}</p>
        <p><strong>${language === 'fr' ? 'Message' : 'Bericht'}:</strong> ${message}</p>
      </div>
    `;

    console.log('Sending contact email with subject:', subject);

    const data = await resend.emails.send({
      from: 'Vigouroux <onboarding@resend.dev>',
      to: 'vigouroux.geoffray@gmail.com',
      subject: subject,
      html: html,
      replyTo: email,
    });

    console.log('Contact email sent successfully:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An error occurred' },
      { status: 500 }
    );
  }
} 