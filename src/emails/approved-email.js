const ApprovedEmail = (name, lastName, date, seats) => {
  return `
    <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
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
          <td style="padding:36px 38px 0 38px;  border-bottom: 1px solid lightgray">
            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
              <tr>
                <td style="padding:0 0 18px 0; color:#153643; border-bottom: 1px solid #811E1A">
                  <img width="30" src="https://admin-banhmi.godiip.com/wp-content/uploads/2022/02/logoVertical-dark.png"
                       alt="">
                </td>
              </tr>
              <tr>
                <td style="padding:36px 0 36px 0;">
                  <p
                    style="font-family:Arial,sans-serif; font-size: 24px; margin-bottom: 16px; line-height: 36px; font-weight: 500;">
                    Hola, ${name}
                  </p>
                  <p style="font-family:Arial,sans-serif; font-size: 18px; margin-bottom: 16px; font-weight: 300; margin: 0">
                    Tu reservación está <span style="color: #811E1A">confirmada.</span>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 38px 0 38px;">
            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
              <tr style="">
                <td>
                  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                    <tr>
                      <td style="width:260px;padding:32px 0 32px 0;vertical-align:top; border-right: 1px solid lightgray">
                        <p
                          style="font-family:Arial,sans-serif; font-size: 14px; font-weight: 500; line-height: 21px; color: #111212; margin-top: 0">
                          Datos de la Reservación
                        </p>
                        <p
                          style="font-family:Arial,sans-serif; font-size: 14px; color: #111212; font-weight: 300; margin: 0; line-height: 27px;">
                          Nombre de la reserva
                        </p>
                        <p
                          style="font-family:Arial,sans-serif; font-size: 18px; margin-bottom: 16px; font-weight: 300; margin-top: 0">
                          ${name} ${lastName}
                        </p>
                        <p
                          style="font-family:Arial,sans-serif; font-size: 14px; color: #111212; font-weight: 300; margin: 0; line-height: 27px;">
                          Fecha de la reserva
                        </p>
                        <p
                          style="font-family:Arial,sans-serif; font-size: 18px; margin-bottom: 16px; font-weight: 300; margin-top: 0">
                          ${date}
                        </p>
                        <p
                          style="font-family:Arial,sans-serif; font-size: 14px; color: #111212; font-weight: 300; margin: 0; line-height: 27px;">
                          Número de personas
                        </p>
                        <p
                          style="font-family:Arial,sans-serif; font-size: 18px; margin-bottom: 16px; font-weight: 300; margin-top: 0; padding:0">
                          ${seats}
                        </p>
                      </td>
                      <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                      <td style="width:260px;padding:32px 0 32px 0;vertical-align:top;color:#153643;">

                        <p
                          style="font-family:Arial,sans-serif; font-size: 14px; font-weight: 500; line-height: 21px; color: #111212; margin-top: 0; padding:0;">
                          Políticas de Reservaciones
                        </p>
                        <p
                          style="font-family:Arial,sans-serif; font-size: 14px; color: #111212; font-weight: 300; margin: 0; line-height: 20px; padding:0">
                          Puedes hacer una reservación en estos 3 canales: Nuestra página web www.banhmi.ec y vía WhatsApp o llamada telefónica al siguiente número:  099 770 2994. <br>
                          En caso de retraso, cancelaciones o cambio de hora de tu reserva por favor notifícanos vía WhatsApp o llamada telefónica, al: 099 770 2994.  <br>
                          Las reservaciones solicitadas fuera de nuestros horarios de atención serán confirmadas dentro de los siguientes horarios: Martes a Sábado de 11 am - 10:30pm.
                        </p>
                      </td>
                    </tr>
                  </table>
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
<!--                  <p style="font-family:Arial,sans-serif; font-size: 14px; font-weight: 300; text-align: center; line-height: 21px">For athletes, high-->
<!--                    altitude produces two contradictory effects on performance. For explosive events-->
<!--                    (sprints up to 400 metres, long jump, triple jump) the reduction in atmospheric pressure means there-->
<!--                    is less resistance from the atmosphere and the athlete's performance will generally be better at-->
<!--                    high altitude.</p>-->

<!--                </td>-->
<!--              </tr>-->
              <tr>
                <td align="center" style="text-align: center;">
                  <a href="https://www.godiip.com/" target="_blank">
                    <img style="margin-top: 32px;" width="100"
                         src="https://admin-banhmi.godiip.com/wp-content/uploads/2022/01/poweredby-dark.png"
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

export default ApprovedEmail
