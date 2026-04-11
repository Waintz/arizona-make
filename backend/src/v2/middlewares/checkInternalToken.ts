export const checkInternalToken = (req: any, res: any, next: any) => {
  const botToken = req.headers['x-internal-bot-token'];
  
  if (botToken !== process.env.INTERNAL_BOT_TOKEN) {
    return res.status(401).json({ 
      error: "Unauthorized", 
      message: "This endpoint is restricted to the internal bot service." 
    });
  }
  next();
};