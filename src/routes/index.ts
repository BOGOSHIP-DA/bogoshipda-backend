import { Router, Response, Request } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<title>API ENTRY | 보고싶다</title>');
  res.write('<link rel="icon" href="https://www.bogoship.me/icon.png">');
  res.write(
    "Welcome!<br>This is API Server of '보고싶다:육해공 통합 인터넷 편지 서비스'<br><br>",
  );
  res.end('API Document is <a href="https://api.bogoship.me/docs">HERE</a>');
});

export default router;
