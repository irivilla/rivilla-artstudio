import { Resend } from 'resend';
import { createPresupuestoEmail } from './template.ts';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPresupuestoEmail(
  data: any
): Promise<{ success: boolean; id?: string }> {

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY no está configurada');

    return {
      success: false
    };
  }

  const html = createPresupuestoEmail(data);

  const { data: emailData, error } = await resend.emails.send({
    from: process.env.EMAIL_FROM || 'Rivilla Art Studio <onboarding@resend.dev>',
    to: [process.env.EMAIL_TO!],
    replyTo: data.email,
    subject: `Nueva solicitud de presupuesto - ${data.nombre}`,
    html
  });

  if (error) {
    console.error('Error enviando email:', error);

    return {
      success: false
    };
  }

  return {
    success: true,
    id: emailData?.id
  };
}