import { Router, Response, Request } from 'express';
const request = require('request');


const kakaoRouter = Router();

kakaoRouter.get("/getCalendar", (req: Request, res: Response) => {

    let ACCESS_TOKEN = req.query.accessToken;

    var headers = {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    };

    var options = {
        url: 'https://kapi.kakao.com/v2/api/calendar/calendars?filter=USER',
        headers: headers
    };

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send(body);
        }else{
            console.log(error, response, body, ACCESS_TOKEN);
            res.send({});
        }
    }

    request(options, callback);

});


// kakaoRouter.get('/loginRedirect', (req: Request, res: Response) => {

//     const AUTHORIZE_CODE = req.query.code;

//     var headers = {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     };

//     var dataString = `grant_type=authorization_code&client_id=${process.env.KAKAO_REST_API_KEY}&code=${AUTHORIZE_CODE}`;

//     var options = {
//         url: 'https://kauth.kakao.com/oauth/token',
//         method: 'POST',
//         headers: headers,
//         body: dataString
//     };



//     request(options, function callback(error: any, response: any, body: any) {
//         if (!error && response.statusCode == 200) {
//             console.log(body);
//             let data = JSON.parse(body);

//             // set cookie and 302 redirect

//             res.cookie('kakao-access-token', data.access_token, {
//                 maxAge: 1000 * 60 * 60 * 24 * 7,
//                 httpOnly: false,
//                 domain: 'http://127.0.0.1:3000',
//             });

//             res.redirect('http://localhost:3000/');

//         } else {
//             console.log(error);
//             res.send({
//                 "accessToken": null,
//             });
//         }
//     });


// }
// );

export default kakaoRouter;