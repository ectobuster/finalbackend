import jwt from 'jsonwebtoken';
const generarJWT = ( uid = '' ) => {

  return new Promise((resolve, reject) => {
    const payload = { uid };
    
    console.log('u i de:',uid,process.env.SECRETKEY,payload)

    jwt.sign(payload, process.env.SECRETKEY || '', {
      expiresIn: '4h'
    }, (err, token) => {

      if(err){
        reject('No se pudo generar el token')
      }else{
        resolve(token);
      }
    })
  });

};

export default generarJWT;