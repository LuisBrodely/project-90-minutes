import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import React from "react";

const PayPalButton: React.FC = () => {
  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
    currency: "USD",
    intent: "capture",
  };

  const sendTransactionData = async (details: any, data: any) => {
    try {
      const response = await axios.post('http://dev-90minutos-1292116088.us-east-2.elb.amazonaws.com/payments/api/v1/transactions/send-info-notification', {
        membershipName: "Anual",
        orderUUID: data.orderID,
        shipmentUUID: data.payerID,
        amount: 999.00,
        paymentDetails: details,
      });

      console.log('Datos enviados exitosamente:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };


  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => {
            console.log(actions)
          if (!actions.order) {
            return Promise.reject(new Error("Actions order is undefined"));
          }
          console.log(data)
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  value: "55.0",
                  currency_code: "USD",
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          if (!actions.order) {
            return Promise.reject(new Error("Actions order is undefined"));
          }
          return actions.order.capture().then((details) => {
            if (!details.payer || !details.payer.name) {
              return;
            }
            alert(`Transaction completed by ${details.payer.name.given_name} `);
            console.log(data)

            // Enviar los datos de la transacción al servicio
            sendTransactionData(details, data);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
