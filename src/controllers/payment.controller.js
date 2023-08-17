import mercadopago from "mercadopago";

export const createOrder = async (req,res) => {

    mercadopago.configure({
        acces_token:"APP_USR-1389275418378973-081717-700f9c5d255f7234a58f03aff8c0b8d2-1453120891"
    

    });

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Laptop Lenovo",
                unit_price: 40000,
                currency_id:"ARS",
                quantity: 1, 
            }
        ]
    });
    
    console.log(result);
    res.send ('creating Order')
};