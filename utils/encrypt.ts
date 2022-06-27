var crypto = require('crypto');

export const encrypt = (password: string) => {  
   const secretKey = 'YSH_PRIAVTE_2022';
   // 암호화 객체 생성, sha256 알고리즘 선택
   var hmac = crypto.createHmac('sha256', password);

   // 암호화할 본문 생성
   var message = Buffer.from(secretKey).toString('base64');

   hmac.write(message);
   hmac.end();

   let hash = hmac.read();
   return Buffer.from(hash).toString('base64');
};