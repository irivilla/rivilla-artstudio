

export function createPresupuestoEmail(data: any): string {

  const servicioNombre =
    typeof data.servicio === 'object'
      ? data.servicio.nombre || data.servicio.name || 'No especificado'
      : data.servicio;

  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>

      <body style="
        margin: 0;
        padding: 0;
        background-color: #f8f5f3;
        font-family: Arial, sans-serif;
        color: #333333;
      ">

        <div style="
          max-width: 650px;
          margin: 30px auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        ">

          <div style="
            background-color: #D6A4A5;
            padding: 30px;
            text-align: center;
          ">
            <h1 style="
              margin: 0;
              color: #ffffff;
              font-size: 26px;
            ">
              Nueva solicitud de presupuesto 🌸
            </h1>
          </div>

          <div style="padding: 30px;">

            <p style="font-size: 16px;">
              Has recibido una nueva solicitud desde la web de
              <strong>Rivilla Art Studio</strong>.
            </p>

            <hr style="
              border: none;
              border-top: 1px solid #eeeeee;
              margin: 25px 0;
            ">

            <h2 style="color: #B86F80;">
              Datos del cliente
            </h2>

            <p>
              <strong>Nombre:</strong>
              ${escapeHtml(data.nombre)}
            </p>

            <p>
              <strong>Email:</strong>
              ${escapeHtml(data.email)}
            </p>

            <p>
              <strong>Teléfono:</strong>
              ${escapeHtml(data.telefono)}
            </p>

            <h2 style="color: #B86F80; margin-top: 30px;">
              Datos del evento
            </h2>

            <p>
              <strong>Servicio:</strong>
              ${escapeHtml(servicioNombre)}
            </p>

            <p>
              <strong>Fecha:</strong>
              ${escapeHtml(String(data.fecha))}
            </p>

            <p>
              <strong>Lugar:</strong>
              ${escapeHtml(data.lugar || '-')}
            </p>

            ${
              data.numeroInvitados
                ? `
                  <p>
                    <strong>Número de invitados:</strong>
                    ${escapeHtml(String(data.numeroInvitados))}
                  </p>
                `
                : ''
            }

            ${
              data.numeroCopias
                ? `
                  <p>
                    <strong>Número de copias:</strong>
                    ${escapeHtml(String(data.numeroCopias))}
                  </p>
                `
                : ''
            }

            ${
              data.mensaje
                ? `
                  <h2 style="color: #B86F80; margin-top: 30px;">
                    Mensaje
                  </h2>

                  <div style="
                    background-color: #f8f5f3;
                    padding: 18px;
                    border-radius: 8px;
                    line-height: 1.6;
                  ">
                    ${escapeHtml(data.mensaje)}
                  </div>
                `
                : ''
            }

          </div>

          <div style="
            background-color: #f8f5f3;
            padding: 20px;
            text-align: center;
            color: #777777;
            font-size: 13px;
          ">
            Rivilla Art Studio · Solicitud recibida desde la web
          </div>

        </div>

      </body>
    </html>
  `;
}


/**
 * Evita que contenido introducido por el usuario
 * pueda interpretarse como HTML dentro del email.
 */
function escapeHtml(value: string): string {

  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}