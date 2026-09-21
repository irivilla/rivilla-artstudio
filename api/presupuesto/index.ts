import { VercelRequest, VercelResponse } from '@vercel/node';
import { sendPresupuestoEmail } from './email';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {

  // Solo permitimos POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      message: 'Método no permitido'
    });
  }

  try {

    const data = req.body;

    // Comprobamos simplemente que se han recibido datos
    if (!data) {
      return res.status(400).json({
        ok: false,
        message: 'No se han recibido datos'
      });
    }

    // Enviamos el email
    const result = await sendPresupuestoEmail(data);

    if (!result.success) {
      return res.status(500).json({
        ok: false,
        message: 'No se ha podido enviar el email'
      });
    }

    return res.status(200).json({
      ok: true,
      message: 'Solicitud enviada correctamente'
    });

  } catch (error) {

    console.error('Error en API presupuesto:', error);

    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor'
    });
  }
}