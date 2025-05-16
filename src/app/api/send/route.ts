import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_S8EjaB1Y_7FG4c79qeUXGDekSYfLFjMgz');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, firstname, email, phone, address, message, language } = body;

    // Determine if this is a contact form or devis form submission
    const isContactForm = !firstname && !address && message;

    const subject = isContactForm
      ? language === 'fr' 
        ? 'Nouveau message de contact - Vigouroux'
        : 'Nieuw contactbericht - Vigouroux'
      : language === 'fr' 
        ? 'Nouvelle demande de devis - Vigouroux'
        : 'Nieuwe offerte aanvraag - Vigouroux';

    const html = isContactForm
      ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6F3C;">${language === 'fr' ? 'Nouveau message de contact' : 'Nieuw contactbericht'}</h2>
          <p><strong>${language === 'fr' ? 'Nom' : 'Naam'}:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>${language === 'fr' ? 'Téléphone' : 'Telefoon'}:</strong> ${phone}</p>
          <p><strong>${language === 'fr' ? 'Message' : 'Bericht'}:</strong> ${message}</p>
        </div>
      `
      : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6F3C;">${language === 'fr' ? 'Nouvelle demande de devis' : 'Nieuwe offerte aanvraag'}</h2>
          <p><strong>${language === 'fr' ? 'Nom' : 'Naam'}:</strong> ${name}</p>
          <p><strong>${language === 'fr' ? 'Prénom' : 'Voornaam'}:</strong> ${firstname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>${language === 'fr' ? 'Téléphone' : 'Telefoon'}:</strong> ${phone}</p>
          <p><strong>${language === 'fr' ? 'Adresse' : 'Adres'}:</strong> ${address}</p>
        </div>
      `;

    const data = await resend.emails.send({
      from: 'Vigouroux <onboarding@resend.dev>',
      to: 'cevceceecc@gmail.com',
      subject: subject,
      html: html,
      replyTo: email,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
} 