const CanceledEmail = name => {
  return `
    <!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
      table, td, div, h1, p {
          font-family: Arial, sans-serif;
      }
  </style>
</head>
<body style="margin:0;padding:0;">
<table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
  <tr>
    <td align="center" style="padding:0;">
      <table role="presentation"
             style="width:602px;border-collapse:collapse;border: 5px solid #811E1A;border-spacing:0;text-align:left;">
        <tr>
          <td style="padding:36px 38px 42px 38px;">
            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
              <tr>
                <td style="padding:0 0 18px 0; color:#153643; border-bottom: 1px solid #811E1A">
                  <img width="30" src="https://admin-banhmi.godiip.com/wp-content/uploads/2022/02/logoVertical-dark.png"
                  alt="">
                </td>
              </tr>
              <tr>
                <td style="padding:36px 0 0 0;">
                  <p
                    style="font-family:Arial,sans-serif; font-size: 24px; margin-bottom: 16px; line-height: 36px; font-weight: 500;">
                    Hola, ${name}
                  </p>
                  <p style="font-family:Arial,sans-serif; font-size: 18px; margin-bottom: 16px; font-weight: 300;">
                    Tu reservación ha sido cancelada. 
                    Te esperamos en Banh Mi en una próxima ocasión. Recuerda que puedes hacer tu reservación visitando nuestra página web <a href="www.banhmi.ec" target="_blank">www.banhmi.ec</a> o contactándonos vía WhatsApp o llamada telefónica al siguiente número <a href="tel:+59399770299">099 770 2994</a>.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:30px; border-top: 1px solid lightgray">
            <table role="presentation"
                   style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:14px;font-family:Arial,sans-serif;">
<!--              <tr>-->
<!--                <td style="padding:0;">-->
<!--                  <p style="font-family:Arial,sans-serif; font-size: 14px; font-weight: 300;"><b>Condiciones de la Reserva</b></p>-->
<!--                  <p style="font-family:Arial,sans-serif; font-size: 14px; font-weight: 300;">-->
<!--                   Puedes hacer una reservación en estos 3 canales: Nuestra página web www.banhmi.ec y vía WhatsApp o llamada telefónica al siguiente número:  099 770 2994. <br>-->
<!--                          En caso de retraso, cancelaciones o cambio de hora de tu reserva por favor notifícanos vía WhatsApp o llamada telefónica, al: 099 770 2994.  <br>-->
<!--                          Las reservaciones solicitadas fuera de nuestros horarios de atención serán confirmadas dentro de los siguientes horarios: Martes a Sábado de 11 am - 10:30pm.-->
<!--                    </p>-->

<!--                </td>-->
<!--              </tr>-->
              <tr>
                <td align="center" style="text-align: center;">
                  <a href="https://www.godiip.com/" target="_blank">
                  <img style="margin-top: 32px;" width="100" src="https://admin-banhmi.godiip.com/wp-content/uploads/2022/01/poweredby-dark.png"
                       alt="">
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>
  `
}

export default CanceledEmail
